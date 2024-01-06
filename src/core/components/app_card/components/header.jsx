import React from 'react';
import { useCardContext } from '../provider/card_context';

const Header = ({children, ...props}) => {

  const {isHovered} = useCardContext();


  return (
    <section 
      {...props} 
      style={{zIndex:0,}}> 
        <div 
          style={{
            display:"flex",
            justifyContent: "flex-end",
            padding: "10px",
            paddingTop: "5px",
            opacity: isHovered ? "1" : "0",
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.2s ease-in-out',
          }}>
          {children} 
        </div>
    </section>);
}


export default Header