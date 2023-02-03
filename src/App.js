import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { ThemeProvider } from 'styled-components';
import Home from './sections/Home';
import GlobalStyles from './styles/GlobalStyles.js';
import { dark } from './styles/Themes';
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence } from 'framer-motion';
import About from './sections/About';
import Shop from './sections/Shop';
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './sections/Banner';
import NewArrival from './sections/NewArrival';
import Footer from './sections/Footer';
import Loder from './components/Loder';
import { useState } from 'react';



function App() {
  const [loaded,setLoaded]=useState(false)
  const containerRef = useRef(null)

useEffect(() => {
  setLoaded(()=>{
    setTimeout(() => {
      setLoaded(true)
    }, 3000);
  })

}, []);

  return (
    <>
    <GlobalStyles/>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            smartphone:{
              smooth:true,
            },
            tablet:{
              smooth:true,
            }
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
        <AnimatePresence> {loaded?null:<Loder/>}</AnimatePresence>

        <ScrollTriggerProxy/>
          <AnimatePresence>
          <main className='App' data-scroll-container ref={containerRef}>
            <Home />
            <About/>
            <Shop/>
            <Banner/>
            <NewArrival/>
            <Footer/>
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
