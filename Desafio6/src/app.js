import Express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cartRouter from "./router/cartRouter.js";
import productRouter from "./router/productRouter.js";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./router/viewsRouter.js";
import ProductManager from "./ProductManager.js";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);
app.get("/h", (req, res) => {
  res.send(`<h1>Esta es la página principal</h1>`);
});

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

const server = createServer(app);
const io = new Server(server);
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


const productManager = new ProductManager(
  'C:/Users/Joaquin Puente/Desktop/backend/Desafio6/src/product.json',
  io
);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("addProduct", (product) => {
    productManager.addProducts(
      product.title,
      product.description,
      product.price,
      product.thumbnail,
      product.code,
      product.stock,
      product.category
    );
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("deleteProduct", (productId) => {
    const ID = productId
    console.log('el ID del socket on es: ',ID)
    productManager.deleteProductByID(ID);
    io.emit("productDeleted", productId);
  });
});

//RUTAS PARA POSTMAN

//PRODUCTS

//127.0.0.1:8080/api/products (GET)
//127.0.0.1:8080/api/products/3 (GET FOR ID)
//127.0.0.1:8080/api/products/  (POST: {"title": "Prueba3Post","description": "Descripción del nuevo producto","price": 1000,"thumbnail": "ruta/imagen.jpg","code": "ABC100","stock": 10,"category":"urbanas"} )
//127.0.0.1:8080/api/products/delete/13 (DELETE FOR ID)
//127.0.0.1:8080/products/put/12 (PUT FOR ID: {"title": "Prueba2Put","description": "Descripción del nuevo producto","price": 1000,"thumbnail": "ruta/imagen.jpg","code": "ABC100","stock": 10,"category":"urbanas"} )

//CARTS

//127.0.0.1:8080/api/carts/ (POST)
//127.0.0.1:8080/api/carts/2 (GET)
//127.0.0.1:8080/api/carts/2/product/3 (POST)


