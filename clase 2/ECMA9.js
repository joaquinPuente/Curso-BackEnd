const obj1 = {
    fields1: 222,
    fields2: 'Romina',
    fields3: true,
    fields4: 'Agustin Sivila',
    fields5: 777
}

const obj2 = {
    fields1: '[TUTOR] Santiago',
    fields2: [2,3,4,6,7]
}

//SPREAD OPERATOR

const {fields2 } = obj1
console.log(fields2)

const obj3 = {...obj1, ...obj2}
console.log('obj3= ', obj3)







// ACtividad 

const tiposDeProducto = objetos.reduce((listaDeValores, objetoActual) => {
    Object.keys(objetoActual).forEach((nombreDeProducto) => {
      if (!listaDeValores.includes(nombreDeProducto)) {
        listaDeValores.push(nombreDeProducto);
      }
    });
  
    return listaDeValores;
  }, []); // Se inicializa el reduce con una lista vacía <[]>
  
  const ventasDeProducto = tiposDeProducto.reduce((objetoConVentas, tipoDeProducto) => {
    objetoConVentas[tipoDeProducto] = 0;
    objetos.forEach((objetoConProductos) => {
      if (objetoConProductos[tipoDeProducto]) {
        objetoConVentas[tipoDeProducto] += objetoConProductos[tipoDeProducto];
      }
    });
    
    return objetoConVentas;
  }, {}); // Se inicializa el reduce con un objeto vacío <{}>