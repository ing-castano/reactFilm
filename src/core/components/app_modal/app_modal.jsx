import React from 'react'
import {createPortal} from 'react-dom'

const AppModal = ({children, onClickedOut, open}) => {

  

  return (
    <>
        {open && createPortal(
            <div
                onClick={(e)=> {
                    if(e.target == e.currentTarget) // usamos el event bubbling , que describe como se manejan los eventos en javascript para determinar que si yo hago click en el modal, entonces e.target apunta al modal pero e.currenTarget apunta al div que lo contiene, que sería el overlay de fondo negro que hicimos. En caso contrario, es decir, si hago click afuera, ambos coinciden y por lo tanto activo el callback onClickedOut()
                        onClickedOut();  
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
            }}>
                {children}
            </div>,
            document.body
        )}
    </>
  )
}

export default AppModal