import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import styled from 'styled-components'

const NavBarContainer = styled(motion.div)`
	width: 100vw;
	z-index: 6;
	position: absolute;
	top: ${props => (props.click ? '0' : `-${props.theme.navHeight}`)};
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 01s ease;
`
const MenuItems = styled(motion.ul)`
	position: relative;
	height: ${props => props.theme.navHeight};
	background-color: ${props => props.theme.body};
	color: ${props => props.theme.text};
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	width: 100%;
	padding: 0 10rem;
`

const MenuBtn = styled(motion.li)`
	list-style: none;
	color: ${props => props.theme.body};
	background-color: ${props => `rgba(${props.theme.textRgba},0.7)`};
	width: 15rem;
	height: 2.5rem;
	display: flex;
	align-items: center;
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	justify-content: center;
	clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
	font-size: ${props => props.theme.fontmd};
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
	color: ${props => props.theme.body};
`

const MenuItem = styled(motion.li)`text-transform: uppercase;`
const NavBar = () => {
  const { scroll } = useLocomotiveScroll()
  const handleScroll = id => {
    let elem = document.querySelector(id)
    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0]
    })
  }
  const [click, setClick] = useState(false)
  return (
    <NavBarContainer initial={{ y: `-100%` }} animate={{ y: 0 }} transition={{ duration: 2, delay: 0.5 }} click={click}>
      <MenuItems
        drag='y'
        dragConstraints={{
          top: 0,
          bottom: 70
        }}
        dragElastic={0.05}
        dragSnapToOrigin
			>
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          onClick={() => handleScroll('#home')}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
				>
					Home
				</MenuItem>
        <MenuItem
          onClick={() => handleScroll('.about')}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
				>
					about
				</MenuItem>
        <MenuItem
          onClick={() => handleScroll('#shop')}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
				>
					shop
				</MenuItem>
        <MenuItem
          onClick={() => handleScroll('#new-arrival')}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
				>
					new arrival
				</MenuItem>
      </MenuItems>
    </NavBarContainer>
  )
}

export default NavBar
