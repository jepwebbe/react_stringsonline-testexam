import styled from "styled-components";

export const StyledInstrumentDetails = styled.article`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 1rem;
  margin-bottom: 5rem;
  margin-right: 2rem;
  div.gallery {
    display: grid;
    place-items: center;
    grid-auto-rows: 1fr;
    gap: 1rem;

  }
  > div {
    display: flex;
    flex-direction: column;
    div.choose {
        display: flex;
        gap: 1rem;
        input {
            width: 3rem;
        }
        button {
            width: 100%;
        }
    }
    div.brandlogo {
      width: 100%;
      height: 11rem;
      background-color: white;
      display: flex;
      align-items: center;
      img {
        padding: 1rem;
      }
    }
  }
`;
