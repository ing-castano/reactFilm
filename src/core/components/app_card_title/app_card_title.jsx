import React from 'react'

const  AppCardTitle = ({children, ...props}) => {
  return (
    <h3 {...props}
        className='text-white text-md font-bold mt-1'
        style={{...props.style}}
    > {children} </h3>
  )
}

export default  AppCardTitle