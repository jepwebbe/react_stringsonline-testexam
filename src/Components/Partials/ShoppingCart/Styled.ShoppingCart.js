import styled from 'styled-components'

export const StyledCart = styled.section`
margin: 0 auto;
margin-right: 2rem;
ul {
  padding-left: 0;
  li {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr 1fr 0.5fr;
    align-items: end;
    column-gap: 1rem;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme.colors.theDarkGreen};
    h3 {
      margin-bottom: 0;
    }
    > p {
      margin: 0;
      justify-self: center;
    }
    > div.stockBox {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-items: center;
      > p {
        margin: 0;
        text-align: center;
      }
      .quantity {
        background: ${(props) => props.theme.colors.theGreen};
        display: flex;
        height: 2rem;
        width: 100%;
        align-items: center;
        justify-items: center;
        border-radius: ${(props) => props.theme.button.radius};
        > button {
          background-color: ${(props) => props.theme.colors.theGreen};
          border: none;
          color: ${(props) => props.theme.colors.theDarkGreen};
        }
        > p {
          color: ${(props) => props.theme.colors.theDarkGreen};
        }
      }
    }
    .stockQuantity {
      grid-area: 2 / 3;
      font-size: 0.8rem;
    }
    button {
      line-height: 1;
      background-color: ${(props) => props.theme.colors.thePurple};
      color: white;
      height: 2rem;
      border: none;
      width: 100%;
      border-radius: ${(props) => props.theme.button.radius};
    }
    button:last-of-type {
      margin-left: auto;
    }
  }
}
div.proceed {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  div.totals {
    display: flex;
    justify-content: end;
    .money {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 3fr 2fr;
      column-gap: 1rem;
      row-gap: 0.5rem;
      align-items: center;
      p {
        padding: 0;
        margin: 0;
      }
      p:last-of-type {
        font-size: 0.8rem;
        grid-area: 2/ 2;
        align-self: start;
      }
      div {
        p:first-of-type {
          font-size: 1.2rem;
          font-weight: bolder;
        }
      }
    }
    button {
      background-color: ${(props) => props.theme.colors.thePurple};
      border: none;
      border-radius: ${(props) => props.theme.button.radius};
      color: white;
      width: 3rem;
      height: 3rem;
      font-weight: bolder;
    }
  }
  > button {
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
    a {
      color: ${(props) => props.theme.colors.theDarkGreen};
    }
  }
}
`;