import React, {Fragment, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'




function App(){


// Crear listado de productos 
const [productos, guardarProductos] = useState([
  {id: 1, nombre: 'Camisa ReactJS', precio: 50 },
  {id: 2, nombre: 'Camisa Vue.js', precio: 40 },
  {id: 3, nombre: 'Camisa Node.js', precio: 30 },
  {id: 4, nombre: 'Camisa Angular.js', precio: 20 },
])


// state paa u carrito de compras
const [carrito, agregarProducto] = useState([

])


//obtener la fecha

const fecha = new Date().getFullYear()

  return (
   <Fragment>
      <Header 
      titulo='Tienda Online'
      />
<h1>Lista de Producto</h1>
{productos.map(producto => (
  <Producto
      key={producto.id}
      producto={producto}
      productos={productos}
      carrito={carrito}
      agregarProducto={agregarProducto} />
))}
<Carrito
carrito={carrito}
agregarProducto={agregarProducto}
/>

      <Footer
      fecha={fecha}
      />
      </Fragment>
  )
}
// i don't understood why this guy used the function agregarProducto from const carrito in the carrito component

export default App