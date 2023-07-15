import { Router } from 'express'
import ProductManager from '../ProductManager.js';

const router = Router();
const productManager = new ProductManager('C:/Users/Joaquin Puente/Desktop/backend/Desafio6/src/product.json');

router.get('/', (req,res)=>{
    res.render('index', {})
}) 

router.get('/home', async (req,res)=>{
    const products = await productManager.getProducts()
    res.render('home', {products})
})

router.get('/form-products', async (req,res)=>{
    res.render('form', {})
})

router.post('/form-products', async (req,res)=>{
    const data = req.body;
    const { title, description, price, thumbnail, code, stock, category } = data;
    const result = await productManager.addProducts(title, description, price, thumbnail, code, stock, category);
    res.redirect('/products')
});

router.get('/realtimeProducts', async (req,res)=>{
    const products = await productManager.getProducts()
    res.render('realtimeProducts', {products})
})



export default router