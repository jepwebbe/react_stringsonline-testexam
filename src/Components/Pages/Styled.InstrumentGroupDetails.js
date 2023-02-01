import styled from "styled-components";

export const StyledInstrumentGroupDetails = styled.div`
  >div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 1rem;
    label {
      background-color: ${(props) => props.theme.colors.theGreen};
      border: none;
      color: ${(props) => props.theme.colors.theDarkGreen};
      font-size: 1.5rem;
      padding: 0.2rem 1.5rem;
      margin-bottom: 1rem;
      font-size: 1rem;
      select {
        background-color: ${(props) => props.theme.colors.theGreen};
        border: none;

      }
    }
  }
  grid-area: main;
  height: 100%;
  font-size: 1.25rem;
  margin-right: 2rem;
  article {
    display: grid;
    grid-template-columns: 1fr 3.2fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    border: 1px solid ${(props) => props.theme.colors.theGrey};
    margin-bottom: 1rem;
    gap: 1.5rem;
/*     div.instrumentBox {
      width: 100%;
      height: 100%;
      background-color: white;
      display: grid;
      aspect-ratio: 1 / 1 ;
      img {
        align-self: center;
        transform: rotate(-90deg);
      }
    } */
    div {
      a {
        color: ${(props) => props.theme.colors.theGreen};
      }
    }
    div.stockBox {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 1.5rem;
      height: 100%;
      p:first-of-type {
        border: 1px solid ${(props) => props.theme.colors.theGrey};
        width: 100%;
        text-align: center;
        padding: 0.8rem;
      }
      button {
        width: 100%;
      }
    }
  }
`;
