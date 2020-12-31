import fetch from 'axios';

export const search = query => {
  const url = "/api/items?q=" + query;
  return fetch(url);
};

export const getDetails = id => {
  const url = "/api/items/" + id;
  return fetch(url);
};
