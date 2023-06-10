// Segundo desafio entregable
const fs = require('fs')

class ProductManager {
 
    constructor (filename) {
        this.filename = filename;
        this.format = 'utf-8';
        this.ultID = 0;
    }

    

    addProducts = async (title, description, price, thumbnail, code, stock) => {
        const productID = this.createID();
        const product = { id:productID ,title, description, price, thumbnail, code, stock}
        const list = await this.getProducts(); //se obtiene la lista de productos

        list.push(product); //se pushea el nuevo usuario a la lista de productos

        await fs.promises.writeFile(this.filename, JSON.stringify(list)); //se escribe o sobreescribe el archivo existente
    };


    
    getProducts = async () => {
    try {
      //Leer el archivo
      const data = await fs.promises.readFile(this.filename, this.format);
      const dataObj = JSON.parse(data);

      return dataObj;
    } catch (err) {
      //Sino existe el archivo
      console.log(`Error: ${err}`);
      return [];
    }
    };

    createID () {
        this.ultID++;
        return this.ultID;
    }

}

run = async() => {
    const products = new ProductManager("./product.json")
    await products.addProducts("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
    await products.addProducts("producto prueba2","Este es un producto prueba",200,"Sin imagen","abc123",25)
    await products.addProducts("producto prueba3","Este es un producto prueba",200,"Sin imagen","abc123",25)

    console.log(await products.getProducts());
};

run() 