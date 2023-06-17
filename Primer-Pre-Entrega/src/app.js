const express = require('express');
const { ProductManager } = require('./ProductManager');

const app = express();
const productManager = new ProductManager('./product.json');
const port = 8080;

app.get('/products', async (req, res) => {
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

app.get('/products/:id', async (req, res) => {
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

app.listen(port, () => console.log(`Servidor en puerto ${port}`));

//127.0.0.1:8080/products
//127.0.0.1:8080/products?limit=5
//127.0.0.1:8080/products/3
//127.0.0.1:8080/products/3522
