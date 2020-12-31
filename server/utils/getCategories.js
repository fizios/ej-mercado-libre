const api = require('../api');

const getCategories = async id => {
  const catObj = await api.getCategory(id);
  return catObj.path_from_root.map(c => c.name);
}

module.exports = getCategories;
