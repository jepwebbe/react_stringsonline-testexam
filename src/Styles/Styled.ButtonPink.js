import styled from 'styled-components'

export const StyledButtonPink = styled.button`
border: none;
background-color: ${props => props.theme.colors.thePurple};
color: white;
width: 10rem;
height: 2.8rem;
border-radius: ${props => props.theme.button.radius};
`