require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        [
            "transform-assets",
            {
                "extensions": [
                    "css",
                    "svg"
                ],
                "name": "static/media/[name].[hash:8].[ext]"
            }
        ]
    ]
});


const express = require("express");
const path = require("path");

const setApiRoutes = require('./apiRoutes');
const setSsrRoute = require('./ssrRoute');

const app = express();

app.set('port', process.env.PORT || 3003);

app.use(express.static(path.resolve(__dirname, "../build")));

setApiRoutes(app);
setSsrRoute(app);

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
