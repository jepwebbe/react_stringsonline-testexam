import styled from "styled-components";

export const StyledCheckout = styled.section`
  grid-area: hero;
  color: white;
  margin-right: 2rem;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    div h3 {
      font-weight: bolder;
    }
    div input {
      width: 100%;
      border: 1px solid ${(props) => props.theme.colors.theDarkGreen};
      background-color: ${(props) => props.theme.colors.darkGreenBg};
      line-height: 2;
      margin-bottom: 0.5rem;
      border-radius: 0.2rem;
    }
    > div div.address {
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 0.5rem;
    }
    input {
      color: white;
    }
    input::placeholder {
      color: ${(props) => props.theme.colors.theGreen};
      font-family: "TitiliumWeb";
    }
    .submit {
      background-color: ${(props) => props.theme.colors.theGreen};
      border: none;
      font-family: "TitiliumWeb";
      font-weight: bolder;
      font-size: 1.2rem;
      margin-top: 0.5rem;
      width: 8rem;
      height: 4rem;
      border-radius: ${(props) => props.theme.button.radius};
      margin-left: auto;
      cursor: pointer;
    }
  }
`;
