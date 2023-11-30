import React from 'react'

const Body = ({children, ...props}) => {
    return <section {...props}> {children} </section>
}

export default Body