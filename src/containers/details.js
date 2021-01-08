import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { withRouter } from "react-router-dom";

import Breadcrumb from "../components/breadcrumb";
import ItemDetails from "../components/details";

import { getItem  } from "../action";

const Details = props => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect( () => {
    dispatch(getItem(id))
  }, [id]);

  const details = useSelector(state => state.item[id]);

  return (
    <React.Fragment>
      {details && (
        <React.Fragment>
          <Breadcrumb categories={details.categories}/>
          <ItemDetails details={details} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
};

export const fetchData = (store, req, host) => {
  const id = req.url.split("/")[2];
  store.dispatch(getItem(id, host))
}

export default withRouter(Details);
