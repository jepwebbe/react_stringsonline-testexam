import React from 'react'
import { StyledHero } from './Styled.Hero'
import heroImg from '../../../assets/images/heroBanner.png'
const Hero = () => {
  return (
    <StyledHero><img src={heroImg} alt="Et billede af en flot guitar" /></StyledHero>
  )
}

export default Hero