import React from 'react'

const  AppSectionHeadings = ({children, ...props}) => {
  return (
    <h2 {...props}
        className='text-white text-3xl font-extrabold mt-12 mb-2 ml-1'
        style={{...props.style}}
    > {children} </h2>
  )
}

export default  AppSectionHeadings