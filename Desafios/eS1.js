// Primer desafio ntregable

class ProductManager {
 
    constructor () {
        this.products = [];
        this.ultID = 0;
    }

    getProducts() {
        const misProductos = this.products.map((product) => {return product;});
        return misProductos;
    }

    addProducts = (title, description, price,thumbnail,code,stock) => {
        const codigoUsado = this.products.some((product)=> product.code === code);
        if(codigoUsado){
            console.log("--------------------------------------------------")
            console.log(`el codigo del producto ${title} ya esta registrado, no es posible agregarlo, por favor ingresar otro codigo`)
        }
        else{
            const productID = this.createID();
            const product = { id:productID, title, description, price,thumbnail,code,stock }
            this.products.push(product)  
        }
        
    }

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
productos.addProducts("producto prueba3","Este es un producto prueba3",400,"Sin imagen","abc124",40)

console.log("--------------------------------------------------")
console.log("Traer array de productos:    ", productos.getProducts()) //funciona getProducts
console.log("--------------------------------------------------")
console.log("Atraer producto por ID:    ", productos.getProductsByID(1))


