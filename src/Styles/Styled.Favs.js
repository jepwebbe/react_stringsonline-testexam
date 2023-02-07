import styled from "styled-components";

export const StyledFavs = styled.section`
  padding: 0 2rem;
  grid-area: ${props => props.gridArea};
  font-size: 1.2rem;
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 1.5rem;
    article {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 1rem;

      div.buy {
        display: flex;
        align-items: center;
        button {
          border-radius: unset;
          border-top-right-radius: ${(props) => props.theme.button.radius};
          border-bottom-right-radius: ${(props) => props.theme.button.radius};
          cursor: pointer;
        }
      }
      p.price {
        border: 1px solid ${(props) => props.theme.colors.theGrey};
        width: 100%;
        text-align: center;
        padding: 0.6rem;
      }
      a {
        color: ${(props) => props.theme.colors.theGreen};
      }
    }
  }
`;
