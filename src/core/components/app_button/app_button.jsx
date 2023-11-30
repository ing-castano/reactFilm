import React from 'react'

const AppButton = ({children, ...props}) => { // aca los 3 puntos no es el operador spread, sino el REST operator -> le aviso al componente que va a llegar un arreglo de parámetros de tamaño dinámico
  return (
    <button {...props}>{children}</button> // aca si uso el spread operator -> el arreglo que venga, lo desestructuro entre los tags de button
  )
}

export default AppButton