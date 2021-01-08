import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { withRouter } from "react-router-dom"
import ItemList from "../components/itemList";
import queryString from "query-string";
import {search} from "../action";
import Breadcrumb from "../components/breadcrumb";

const List = ({ location }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { q:query } = queryString.parse(location.search);
    dispatch(search(query));
  }, [location.search]);

  const items = useSelector(state => {
    return state.list.items || [];
  });
  const categories = useSelector(state => state.list.categories);

  return (
    <React.Fragment>
      <Breadcrumb categories={categories} />
      <ItemList items={items}/>
    </React.Fragment>
  )
};

export const fetchData = (store, req, host) => {
  const { q:query } = req.query;
  store.dispatch(search(query, host));
}

export default withRouter(List);
