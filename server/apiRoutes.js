const api = require('./api');
const transformers = require('./transformers');

module.exports = app => {
    app.get('/api/items', async (req, res) => {
        const { q } = req.query;
        const response = await api.search(q);
        res.send( await transformers.search(response));
    });

    app.get('/api/items/:id', async (req, res) => {
        const { id } = req.params;
        const details = await api.getItem(id);
        const description = await api.getItemDescription(id);
        res.send( await transformers.details(details, description));
    });
}