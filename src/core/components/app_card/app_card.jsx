import React, { useContext, useState } from 'react'
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { SwiperSlide } from 'swiper/react';
import { Provider } from './provider/card_context';
import useHover from './hooks/useHover';



const image = {
  show: false,
  src: '',
  alt: "",
}

const defaultConfig = {
  image,
  width: '150px',
  height: '200px',
}


const AppCard = ({children, config=defaultConfig, ...props}) => {

  const [isHovered, handlers] = useHover();

  return (
    <Provider
      value = {{
        isHovered,
      }} 
    >
      <article
        {...props}
        {...handlers} //de esta forma desestructuramos el objeto y nos traemos los dos eventos. PARA ASEGURARNOS DE TRAER LOS DOS. YA QUE SIN LOS DOS, el hover no funciona. (Buenas Practicas)
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: config.width,
          height: config.height,
          borderRadius: '15px',
          border: '2px solid white',
          ...props.style,
        }}
      >
        {config?.image?.show && (
          <img 
            src={config.image.src}
            alt={config.image.alt}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              top: '0',
              left: '0',
              borderRadius: '15px',
              zIndex: "0",
            }}
          />
        )}
        {children}
      </article>
    </Provider>
  );
};

AppCard.Header = Header; // al componente le creo una propiedad Header y le asigno mi componente Header
// tambien se puede hacer con Object.assign(AppCard, {Header, Body, Footer}); 
AppCard.Body = Body; // esto es compound components -> cuando le asigo a mi componente otro componente
AppCard.Footer = Footer;
// la idea es que haya un contexto en AppCard y que ese contexto pase a toda la info a los componentes que lo componen
// este context no genera una dependencia porque la idea de estos subcomponentes es que no existan de manera independiente sino como parte de AppCard.

export default AppCard