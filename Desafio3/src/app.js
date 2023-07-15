const productRouter = require('./router/productsRouter.js');
const express = require('express');


const app = express();
const port = 8080;
app.use(express.json());
app.use(express.static('./src/public'));

app.use('/api/products', productRouter);
// app.use('/api/cart', cartRouter);

app.listen(port, () => console.log(`Servidor en puerto ${port}`));

//127.0.0.1:8080/products
//127.0.0.1:8080/products?limit=5
//127.0.0.1:8080/products/3
//127.0.0.1:8080/products/3522
