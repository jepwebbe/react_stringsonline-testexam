import styled from "styled-components";

export const StyledSidebar = styled.div`
  padding: 0 ${(props) => props.theme.space.padding};
  margin: 0 auto;
  grid-area: sidebar;
  height: 25rem;
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
`;
