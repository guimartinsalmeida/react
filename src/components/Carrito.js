import React from 'react'
import './carrito.css'
import Producto from './Producto'

//para que el map pueda interar tienes que ponerlo como parametro y o estoy poniendo com las llaves {} porque estoy haciendo el destructuring
// el ternario se pone en adentro de el div de el componente de el carrito, le estoy diciendo que con el length cuente cuantos productos hay adentro de el carrito, y si hay 0 productos me regresa un mensaje, pero si hay productos hace el map
const Carrito = ({carrito, agregarProducto}) => (

    <div className='carrito'>
        <h2>Tu carrito de Compras</h2>
         {carrito.length === 0
         ?
            <p>Tu carrito esta vazio</p>
         
         :
            carrito.map(producto =>(
                <Producto
                key={producto.id}
                producto={producto} 
                carrito={carrito}      
                agregarProducto={agregarProducto}     
                />
        ))}
    </div>
)
//le paso el carrito={carrito} porque el componente carrito tendra que hacer una interacion en el carrito para poder hacer el filter de el boton eliminar
//el map le pongo en lo pongo en donde pertenece y a donte tendra que interar para que me regresse los resultados que quiera 
 
export default Carrito;