import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import img1 from '../assets/Images/11.webp'
import img2 from '../assets/Images/12.webp'
import img3 from '../assets/Images/13.webp'
import img4 from '../assets/Images/14.webp'

const Section = styled.section`
	min-height: 100vh;
	width: 100vw;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`
const Overlay = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 30vw;
	height: 90vh;
	box-shadow: 0 0 0 4vw ${props => props.theme.text};
	border: 3px solid black;
	z-index: 11;
`
const Title = styled.h1`
	font-size: ${props => props.theme.fontxxxl};
	font-family: 'Kaushan Script';
	font-weight: 300;
	/* text-transform: capitalize; */
	color: ${props => props.theme.body};
	text-shadow: 1px 1px 1px ${props => props.theme.text};
	position: absolute;
	top: 2rem;
	left: 1rem;
	z-index: 15;
`
const Text = styled.div`
	width: 20%;
	font-size: ${props => props.theme.fontlg};
	font-weight: 300;
	position: absolute;
	padding: 2rem;
	top: 0;
	right: 0;
	z-index: 11;
`
const Container = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0);
	width: 25vw;
	height: auto;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`

const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 5rem 0;
	img {
		width: 100%;
		height: auto;
		z-index: 5;
	}
`
const Product = ({ img, title = '' }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>
        {title}
      </h2>
    </Item>
  )
}

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)
  const ScrollingRef = useRef(null)
  useLayoutEffect(() => {
    let element = ref.current

    let scrollingElement = ScrollingRef.current
    let t1 = gsap.timeline()
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight
      element.style.height = `calc(${mainHeight / 4}px)`
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: 'bottom+=100% top-=100%',
          scroller: '.App', // locomotive-scroll
          scrub: 1,
          pin: true
					// markers: true,
        },
        ease: 'none'
      })

      t1.fromTo(
				scrollingElement,
        {
          y: '0'
        },
        {
          y: '-100%',
          scrollTrigger: {
						// id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: 'top top',
            end: 'bottom top',
            scroller: '.App',
            scrub: 1
						// markers: true,
          }
        }
			)

      ScrollTrigger.refresh()
    }, 1000)
    ScrollTrigger.refresh()

    return () => {
      t1.kill()
      ScrollTrigger.kill()
    }
  }, [])

  return (
    <Section ref={ref} id='new-arrival'>
      <Overlay />
      <Title data-scroll data-scroll-direction='horizontal' data-scroll-speed='-2'>
				New Arrivals
			</Title>
      <Text data-scroll data-scroll-speed='-4'>
				There is new collection available for cool clothes in all sizes. This collection is a great way to find a new
				look for you. It offers a variety of cool apparel styles to fit your taste, while you can also find some cool
				clothes that you can wear everyday.
				<br />
        <br />
				The first line of clothing you will see on this collection is for men. The collection also includes three new
				styles for women.
				<br />
        <br />
				Give it a try and experience a new look.
			</Text>
      <Container ref={ScrollingRef}>
        <Product img={img1} name='Denim' />
        <Product img={img2} name='Cool Dresses' />
        <Product img={img3} name='Jackets' />
        <Product img={img4} name='T-shirts' />
      </Container>
    </Section>
  )
}

export default NewArrival
