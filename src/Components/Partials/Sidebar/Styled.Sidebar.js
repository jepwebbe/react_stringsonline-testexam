import styled from "styled-components";

export const StyledSidebar = styled.div`
  grid-area: sidebar;
  height: 25rem;
  width: 20rem;
.categoriesBox {
  padding: 0 ${(props) => props.theme.space.padding};
  margin: 0 auto;

  ul {
    padding: 1rem 2rem 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.darkGreenBg};
    border: 1px solid ${(props) => props.theme.colors.theDarkGreen};
    height: 100%;
    li {
      line-height: 2;
      a {
        color: ${(props) => props.theme.colors.theGreen};
      }
    }
    ul {
      border: none;
      padding-top: 0;
    }
  }
}
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    .categoriesBox{display: none;}
  }
`;

export const StyledSidebarButton = styled.button`
border: none;
background-color: ${props => props.theme.colors.theGreen};
border-radius: ${props => props.theme.button.radius};
color: ${props => props.theme.colors.theDarkGreen};
grid-area: sidebar;
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    display: block;
  }
`;
