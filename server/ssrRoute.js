import React from "react";
import { Provider } from "react-redux";
import ReactDOMServer from "react-dom/server";
import {StaticRouter, matchPath} from "react-router-dom";
import fs from "fs";
import path from "path"

import Routes from "../src/routes";
import configureStore from "./configureStore";
import routesMap from "./routesMap";

import {serverSaga} from "../src/sagas";


module.exports = app => {
  app.get("/*", async (req, res, next) => {
    console.log(`Request URL = ${req.url}`);

    let staticFile = false;
    if (req.url.indexOf("favicon") > -1) staticFile = true;
    if (req.url.indexOf("manifest") > -1) staticFile = true;
    if (req.url.indexOf("OneSignal") > -1) staticFile = true;
    if (req.url.indexOf(".png") > -1) staticFile = true;
    if (req.url.indexOf(".js") > -1) staticFile = true;
    if (req.url.indexOf(".svg") > -1) staticFile = true;
    if (req.url.indexOf(".txt") > -1) staticFile = true;

    if (staticFile) {
      req.next();
    } else {
      try {
        const context = {};
        const store = configureStore();

        let currentRoute = routesMap.find(route => matchPath(req.url, route));
        const component = await import(`../src/${currentRoute.component}`);

        const jsx =
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Routes />
            </StaticRouter>
          </Provider>

        if ( context.url ) {
          res.redirect( context.url );
          return;
        }

        //Run Sagas
        store.runSaga(serverSaga).toPromise().then(() => {
          const reactApp = ReactDOMServer.renderToString(jsx);
          const reduxState = JSON.stringify(store.getState())

          const indexFile = path.resolve("build/index.html");
          fs.readFile(indexFile, "utf8", (err, data) => {
            if (err) {
              const errMsg = `There is an error: ${err}`;
              console.error(errMsg);
              return res.status(500).send(errMsg);
            }

            return res.send(
              data
                .replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
                .replace(' window.__INITIAL_STATE__ = {};', ` window.__INITIAL_STATE__ = ${reduxState};`)
            );
          });
        }).catch((e) => {
          console.log(e.message)
          res.status(500).send(e.message)
        })

        //Dispatch action event
        if (component.fetchData) {
          const host = "http://" + req.get("host")
          component.fetchData(store, req, host);
        }

        store.close();
      } catch (e) {
        console.log("SSR ERROR: ", e);
      }
    }
  });
}
