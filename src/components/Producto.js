import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto

    //agregar producto al carrito

    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id)[0]
   agregarProducto([
       ...carrito,
       producto
   ])
    }


  //eliminar producto de el carrito
  //todos los id que sean diferentes de el producto en el que yo haga click, seran filtrados y seguiran en la pantalla
  const eliminarProducto = id => {
      const productos = carrito.filter(producto => producto.id !== id)


      //poner los productos en el state
      agregarProducto(productos)


}


    // los ... son los spreadsoperator, estoy tomando una copia de el carrito para que cuando se agregue otro producto se mantenga el anterior al carrito
    //le puse el [0] porque el filter emoieza a filtrar en la pposicion 0, para que pueda filtrar todos los elementos de el array
    // el filter hace el fitro, filtra un dato y lo requiere
    //el filter buscara adentro de los productos el producto que tenga los mesmos ids y se los hace el require

    //lo que hace para poner el boton en el carrito cuando el producto passa a el otro, es ver cuales propriedades estan usando en uno y en el otro no lo usan
    //en el componente producto.js usan la propriedad productos, y en el componente carrito no la usan, lo que hace es verificar, y si hay la propriedad productos deja el boton de agregar
    //y si no hay la propriedad productos pone el boton de eliminar

    return ( 
        <div>
              <h2>{nombre}</h2>
              <p>{precio}</p>
            
               {productos
               ?
                    (
                        <button
                        type='button'
                        onClick={ () => seleccionarProducto(id) }
                        > comprar</button>
                    )
                :
                (
                    <button
                    type='button'
                    onClick={ () => eliminarProducto(id) }
                    > eliminar</button>
                )
                
                }
        </div>
    );
}
 
export default Producto;