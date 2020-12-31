const fetch = require('node-fetch');

const apiUrl = "https://api.mercadolibre.com";

module.exports = {
    search: async q => {
        const url = `${apiUrl}/sites/MLA/search?q=${q}`
        const res = await fetch(url);
        return await res.json();
    },
    getItem: async id => {
        const url = `${apiUrl}/items/${id}`
        const res = await fetch(url);
        return await res.json();
    },
    getItemDescription: async id => {
        const url = `${apiUrl}/items/${id}/description`;
        const res = await fetch(url);
        return await res.json();
    },
    getCategory: async id => {
        const url = `${apiUrl}/categories/${id}`;
        const res = await fetch(url);
        return await res.json();
    }
}