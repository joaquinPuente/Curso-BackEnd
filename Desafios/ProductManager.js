// Primer desafio entregable

class ProductManager {
 
    constructor () {
        this.products = [];
        this.ultID = 0;
    }

    getProducts() {
        const misProductos = this.products.map((product) => {return product;});
        return misProductos;
    }

    addProducts = (title, description, price, thumbnail, code, stock) => {
        if (this.products.some((product) => product.code === code)) {
          console.log(`El código del producto ${title} ya está registrado. No es posible agregarlo, por favor ingresar otro código.`);
        } 
        else if (title && description && price && thumbnail && code && stock) {
          const productID = this.createID();
          const product = { id: productID, title, description, price, thumbnail, code, stock };
          this.products.push(product);
          console.log(`El producto ${title} se agregó correctamente.`);
        } 
        else {
          console.log(`Faltan datos por completar para poder agregar el producto ${title}.`);
        }
      };
      

    createID () {
        this.ultID++;
        return this.ultID;
    }

    getProductsByID(id) {
        for(const productID of this.products ){
            if(productID.id == id){return productID}
            else{return console.log("no se encontro id")}
        }

    }

}


const productos = new ProductManager()
productos.addProducts("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25) //funciona addProducts
productos.addProducts("producto prueba2","Este es un producto prueba2",300,"Sin imagen","abc123",30) // funciona el condicional de codigo repetido
productos.addProducts("producto prueba3","Este es un producto prueba3",400,"Sin imagen") //funciona condicional de campos incompletos
productos.addProducts("producto prueba4","Este es un producto prueba4",200,"Sin imagen","abc124",44) //funciona addProducts

console.log("--------------------------------------------------")
console.log("Traer array de productos:    ", productos.getProducts()) //funciona getProducts
console.log("--------------------------------------------------")
console.log("Atraer producto por ID:    ", productos.getProductsByID(1))