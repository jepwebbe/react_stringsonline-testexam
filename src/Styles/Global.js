import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
}
body {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
#root {
    height: 100%;
    background-color: ${(props) => props.theme.colors.primaryBg};
    ;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
li {
    list-style-type: none;
}
a {
    text-decoration: none ;
}
`;
