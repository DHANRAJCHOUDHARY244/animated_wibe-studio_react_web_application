import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
	min-height: 100vh;
	width: 80vw;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`
const Container = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`
const BannerComponents = styled.h1`
	font-size: ${props => props.theme.fontxxxl};
	font-family: 'Kaushan Script';
	color: ${props => props.theme.text};
	/* position: absolute; */
	white-space: nowrap;
	text-transform: uppercase;
	line-height: 1;
	span {
		display: block;
		background-color: ${props => props.theme.body};
		padding: 1rem 2rem;
	}
`
const Banner = () => {
  return (
    <Section>
      <Container id='up'>
        <BannerComponents>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='8' data-scroll-target='#up'>
						Fashion is the armour
					</span>
        </BannerComponents>
        <BannerComponents>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-6' data-scroll-target='#up'>
						to survive the reality of everyday life
					</span>
        </BannerComponents>
        <BannerComponents>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up'>
						One is never over-dressed or
					</span>
        </BannerComponents>
        <BannerComponents>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='-4' data-scroll-target='#up'>
						under-dressed
					</span>
        </BannerComponents>
        <BannerComponents>
          <span data-scroll data-scroll-direction='horizontal' data-scroll-speed='6' data-scroll-target='#up'>
						with a Little Black Dress
					</span>
        </BannerComponents>
      </Container>
    </Section>
  )
}

export default Banner
