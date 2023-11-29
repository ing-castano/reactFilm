import React, { useState } from 'react'

const useHover = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);  
    const handleMouseLeave = () => setIsHovered(false);

    const bind = {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
    }

    return [isHovered, bind];
    

}

export default useHover