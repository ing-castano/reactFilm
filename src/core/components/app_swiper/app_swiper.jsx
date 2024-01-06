import { useRef, useEffect, useState } from 'react';

export const AppSwiper = ({children}) => {
  const swiperElRef = useRef(null);
  const [slidesPerView, SetSlidesPerView] = useState(7);

  useEffect(()=>{
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        SetSlidesPerView(3);
      }
      else if (window.innerWidth < 992){
        SetSlidesPerView(5);
      }
      else {
        SetSlidesPerView(7);
      }
    }

      window.addEventListener("resize", resizeHandler);
      resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    }
  },[])
  /* // useEffect
  useEffect(() => {
    
    // el webcomponent permite utilizar tags html creados por el programador, pero esto react no sabe.
    // entonces será necesario indicarselo a React. Lo bueno de este enfoque es que webcomponents es una herramienta nativa de los navegadores así que ganamos mucha compatibilidad.
    
    // aca se usa useEffect para escuchar los eventos. Al escuchar, debo sincronizar el componente relacionado con la escucha
    // y posteriormente dejar de escuchar el evento -> se debe declarar un return para limpiar.

    // listen for Swiper events using addEventListener -> esto es en general util para detectar cuando llego a lo último y ir haciendo otra petición para pedir mas datos. No lo vamos a usar por ahora.
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });

    return () => {
        swiperElRef.current.removeEventListener('swiperprogress');
        swiperElRef.current.removeEventListener('swiperslidechange');
    
    
  }, []);
  */


  return (
    <swiper-container
      ref={swiperElRef}
      loop
      slides-per-view={slidesPerView}
      navigation="true"
      // pagination="true" //los puntitos de abajo para saber donde estamos
      >
        {children}
    </swiper-container>
  );
};