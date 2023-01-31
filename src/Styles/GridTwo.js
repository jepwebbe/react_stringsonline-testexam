import styled from "styled-components";

export const GridTwo = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};
const StyledGrid = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBg};
  display: grid;
  min-height: 100%;
  color: ${(props) => props.theme.colors.primaryTxt};
  grid-template-columns: ${(props) => props.theme.mobileTwo.columns};
  grid-template-rows: ${(props) => props.theme.mobileTwo.rows};
  grid-template-areas: ${(props) => props.theme.mobileTwo.area};
  @media (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-template-columns: ${(props) => props.theme.tabletTwo.columns};
    grid-template-rows: ${(props) => props.theme.tabletTwo.rows};
    grid-template-areas: ${(props) => props.theme.tabletTwo.area};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.l}) {
    grid-template-columns: ${(props) => props.theme.desktopTwo.columns};
    grid-template-rows: ${(props) => props.theme.desktopTwo.rows};
    grid-template-areas: ${(props) => props.theme.desktopTwo.area};
  }
`;
