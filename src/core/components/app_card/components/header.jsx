import React from 'react';

const Header = ({children, ...props}) => {
  return <section {...props}> {children} </section>
}


export default Header