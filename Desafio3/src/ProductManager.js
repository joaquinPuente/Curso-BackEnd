// Segundo desafio entregable
const fs = require('fs')

class ProductManager {
 
    constructor (filename) {
        this.filename = filename;
        this.format = 'utf-8';
        this.ultID = 0;
        this.path = './product.json'
    }

    createID () {
        this.ultID++;
        return this.ultID;
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
    } 
    catch (err) {
      //Sino existe el archivo
      console.log(`Error: ${err}`);
      return [];
    }
    };

    getProductsByID = async (id) => {
        try {
          const data = await fs.promises.readFile(this.filename, this.format);
          const products = JSON.parse(data);
      
          const product = products.find((product) => product.id === id);
      
          if (product) {
            return product;
          } else {
            console.log("ID no encontrado");
            return null;
          }
        } catch (err) {
          console.log(`Error: ${err}`);
          return null;
        }
      };
      

    updateProduct = async (id, title, description, price, thumbnail, code, stock ) => {
        try {
            const products = await this.getProducts();
    
            // Buscar el producto por su ID
            const index = products.findIndex(product => product.id === id);
    
            if (index !== -1) {
                // Actualizar las propiedades del producto
                products[index] = {...products[index],...{title, description, price, thumbnail, code, stock}};
    
                // Guardar la lista de productos actualizada en el archivo
                await fs.promises.writeFile(this.filename, JSON.stringify(products));
    
                console.log('Producto actualizado exitosamente.');
            } else {
                console.log('ID de producto no encontrado.');
            }
        } 
        catch (err) {
            console.log(`Error: ${err}`);
        }
    };

    deleteProductByID = async (id) => {
        try {
            const products = await this.getProducts();
    
            // Buscar el producto por su ID
            const index = products.findIndex(product => product.id === id);
    
            if (index !== -1) {
                // Eliminar el producto de la lista
                products.splice(index, 1);
    
                // Guardar la lista de productos actualizada en el archivo
                await fs.promises.writeFile(this.filename, JSON.stringify(products));
                console.log(`Producto con ${id} fue eliminado exitosamente.`);
            } else {
                console.log('ID de producto no encontrado.');
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    };

}
module.exports = { ProductManager };