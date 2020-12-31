const getCategories = require('./utils/getCategories');

const author = {
    name: "Mariano",
    lastname: "Chaparro"
}

module.exports = {
    search: async data => {
        const res = {
            author: author
        }
        const filterCategory = {}

        data.results.forEach( i => {
            if (filterCategory[i.category_id] !== undefined) {
                filterCategory[i.category_id] = filterCategory[i.category_id] + 1;
            } else {
                filterCategory[i.category_id] = 0
            }
        });
        let mainCategory = {id: "", q: 0};
        Object.keys(filterCategory).forEach(k => {
            if (filterCategory[k] > mainCategory.q) {
                mainCategory.id = k;
                mainCategory.q = filterCategory[k]
            }
        })

        const categories = await getCategories(mainCategory.id);

        const dataItems = data.results.slice(0, 4);
        res.items = dataItems.map(i => ({
                id: i.id,
                title: i.title,
                price: {
                    currency: i.currency_id,
                    amount: i.price,
                    decimals: 2
                },
                picture: i.thumbnail,
                condition: i.condition,
                free_shipping: i.shipping.free_shipping,
                state_name: i.address.state_name
            })
        );

        res.categories = categories;

        return res;
    },
    details: async (data, description) => {
        const res = {
            author: author
        }

        const categories = await getCategories(data.category_id);

        res.item = {
            id: data.id,
            title: data.title,
            price: {
                currency: data.currency_id,
                amount: data.price,
                decimals: 2
            },
            picture: data.pictures[0] && data.pictures[0].url,
            condition: data.condition,
            free_shipping: data.shipping.free_shipping,
            sold_quantity: data.sold_quantity,
            description: description.plain_text,
            categories
        }
        return res;
    }
}