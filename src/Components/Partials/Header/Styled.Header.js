import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  align-content: center;
  grid-area: header;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(12, 1fr);
  padding: ${(props) => props.theme.space.padding};
  nav {
    grid-area: 1 / 1 / span 3 / span 8;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    margin: auto 0;
    font-size: 1.5rem;
    max-width: 1220px;

    img {
      grid-column: 1 / -1;
      grid-row: 1;
    }
    ul {
      grid-column: 5 / -1;
      grid-row: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        color: ${(props) => props.theme.colors.primaryTxt};
      }
      button {
        background-color: ${(props) => props.theme.colors.theGreen};
        border: none;
        color: ${(props) => props.theme.colors.theDarkGreen};
        border-radius: ${(props) => props.theme.button.radius};
        font-size: 1.5rem;
        padding: 0.2rem 1.5rem;
        margin-right: 0.7rem;
      }
    }
  }
  > div.rightBox {
    grid-area: 1 / 9 / span 2 / span 4;
    display: grid;
    align-items: center;
    margin-left: 1rem;

    > div {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    > img {
      width: 2.4rem;
      height: 2.3rem;
    }
    p {
      margin: 0;
      padding: 0 1rem;
      .phone {
        transform: rotate(45deg);
      }
    }
    form {
      display: flex;
      input {
        padding: 0.5rem;
        line-height: 1.5;
        background-color: ${(props) => props.theme.colors.darkGreenBg};
        color: ${(props) => props.theme.colors.theDarkGreen};
        border: 1px solid ${(props) => props.theme.colors.theDarkGreen};
        width: 100%;
      }
      button {
        color: ${(props) => props.theme.colors.theDarkGreen};
        background-color: ${(props) => props.theme.colors.theGreen};
        border-radius: 0.2rem;
        border: none;
        width: 3rem;
        height: 3rem;
        margin-left: 1rem;
      }
    }
  }
  .breadcrumbs {
    grid-area: 4 / 1;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    nav,
    nav ul button {
      font-size: 1rem;
    }
    form input {
      line-height: 1rem;
      padding: 0;
    }
    div div {
      font-size: 0.7rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    nav ul {
      grid-column: 4 / -1;
    }
    div div img {
      width: 1.8rem;
      height: 1.7rem;
    }
  }
`;
