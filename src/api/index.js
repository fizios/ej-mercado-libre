import axios from 'axios';

export const search = (query, host) => {
  let url = "/api/items?q=" + query;
  if (host) {
    url = host + url;
  }
  return axios.get(url);
};

export const getDetails = (id, host) => {
  let url = "/api/items/" + id;
  if (host) {
    url = host + url;
  }
  return axios.get(url);
};
