const { Router } = require("express");
const { ProductManager } = require('./ProductManager');


const productRouter = Router();
const productManager = new ProductManager('./product.json');

productRouter.get('/products', async (req, res) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit) : undefined;
        const products = await productManager.getProducts();

        if (limit) {
            res.json(products.slice(0, limit));
        } else {
            res.json(products);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

productRouter.get('/products/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await productManager.getProductsByID(id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = productRouter;
