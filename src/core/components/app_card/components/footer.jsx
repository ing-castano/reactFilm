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
        backdropFilter: "blur(100px)",
        opacity: isHovered ? "1" : "0",
        transform: isHovered ? 'translateY(0)' : 'translateY(-15px)',
        transition: 'all 0.2 ease-in-out',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        ...props.style,

      }}
      > 
        {children} 
    </section>
  );
}

export default Footer