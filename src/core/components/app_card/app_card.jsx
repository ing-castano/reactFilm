import React, { useContext, useState } from 'react'
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { SwiperSlide } from 'swiper/react';
import { Provider } from './provider/card_context';
import useHover from './hooks/useHover';
import { Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure, Button, Chip} from "@nextui-org/react";


const image = {
  show: false,
  src: '',
  alt: "",
}

const movie = {
  title: 'title',
  description: 'text',
  backdrop: 'url',
  rating: 0,
  date: '0000-00-00',
}

const defaultConfig = {
  image: image,
  width: '150px',
  height: '200px',
  movie: movie,
}


const AppCard = ({children, config=defaultConfig, ...props}) => {

  const [isHovered, handlers, setIsHovered] = useHover();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
          transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          transition: 'all 150ms ease-in-out',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          zIndex: 10,
          ...props.style,
        }}
      >
        {config?.image?.show  && (
          <img 
            src={config.image.src}
            alt={config.image.alt}
            onClick={()=>{onOpen(); setIsHovered(false);}}
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
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='lg' scrollBehavior='inside' backdrop='blur'>
          <ModalContent className='text-white bg-black'>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">{config?.movie?.title}</ModalHeader>
                <ModalBody>
                  <div className='h-64 w-auto relative p-2'>
                    <img className=" absolute top-0 left-0 z-[-1]" src={config?.movie?.backdrop} alt={config?.movie?.title}></img>
                    <div className=' h-60 flex flex-col justify-between'>
                      <div className='flex flex-row justify-between '>
                        <Chip size="md" className='p-2'> ⭐️ {config?.movie?.rating} </Chip>
                        {config?.movie?.rating > 8 && (
                          <Chip className='p-2' size="sm" color="warning" variant="shadow">Recommended</Chip>
                        )}
                      </div>
                      <div className='flex flex-row justify-between '>
                        <Chip size="sm" className='p-2'> {config?.movie?.date} </Chip>                    
                      </div>
                    </div>
                  </div>
                  <p>{config?.movie?.description}</p>
                </ModalBody>
                <ModalFooter className='flex justify-center '>
                  <Button 
                  variant="shadow"
                  size='lg'
                  className="bg-gradient-to-br from-red-700 to-pink-500 border-small border-white/50 shadow-pink-500/30 drop-shadow text-white"
                  onPress={onClose}>
                    Play
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
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