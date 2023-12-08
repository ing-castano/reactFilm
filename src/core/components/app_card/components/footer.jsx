import React, { useState } from 'react'
import { useCardContext } from '../provider/card_context';

const Footer = ({children, ...props}) => {

  const {isHovered} = useCardContext();

  return (
    <section 
      {...props}
      style={{
        padding: "15px",
        borderTop: "1px solid white",
        WebkitBackdropFilter: "blur(4px)",
        opacity: isHovered ? "1" : "0",
        transform: isHovered ? 'translateY(0)' : 'translateY(-15px)',
        transition: 'all 0.2s ease-in-out',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        overflow: 'hidden', // para esconder los borders en caso de no tener Radius
        ...props.style,

      }}
      > 
        {children} 
    </section>
  );
}

export default Footer