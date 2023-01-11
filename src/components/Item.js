import React from "react"
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")
export default function Item({elemento, restartStock}) {
  const [cantidadDeProductosStock, setCantidadDeProductosStock]=React.useState(elemento.stock)
  const [botonActivo, setBotonActivo]=React.useState(false)
  const [textoBoton, setTextoBoton]=React.useState("Comprar")
  function handleClick() {
    if (cantidadDeProductosStock !=1){
      setCantidadDeProductosStock(cantidadDeProductosStock -1)
    }
    else if(cantidadDeProductosStock === 1 ){
      setCantidadDeProductosStock("Agotado")
      setBotonActivo(true)
      setTextoBoton("Sin Stock")
    }
    console.log('se compro 1: ${elemento.producto.nombre}')
    restartStock(elemento.id)
  }
  let stock =parseInt(elemento.stock)

  return (
    <div className='producto'>
      <h3>{elemento.producto.nombre}</h3>
      <p>{elemento.producto.descripcion}</p>
      <h5>En Stock: {cantidadDeProductosStock}</h5>
      <button onClick={handleClick} type="button" disabled={botonActivo}>{textoBoton}</button>
    </div>
  )
}
