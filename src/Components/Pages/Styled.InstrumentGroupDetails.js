import styled from "styled-components";

export const StyledInstrumentGroupDetails = styled.div`
  grid-area: main;
  height: 100%;
  font-size: 1.25rem;
  margin-right: 2rem;
  article {
    display: grid;
    grid-template-columns: 1fr 3.2fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.theGrey};
    margin-bottom: 1rem;
    gap: 1.5rem;
    div.instrumentBox {
        width: 100%;
        height: 100%;
        background-color: white;
        display: grid;
      img {
        align-self: center;
        transform: rotate(-90deg);
      }
    }
    div {
      a {
        color: ${props => props.theme.colors.theGreen}
      }
    }
    div.stockBox {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 1.5rem;
        height: 100%;
        p:first-of-type {
            border: 1px solid ${props => props.theme.colors.theGrey};
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
