import styled from 'styled-components'

export const StyledFooter = styled.footer`
grid-area: footer;
background-color: ${props => props.theme.colors.theGrey};
padding: 0 ${props => props.theme.space.padding};
display: grid;
place-content: center;
margin-top: 2rem;
img {
    padding: 0;
    height: 80%;
    margin: auto;
}
`