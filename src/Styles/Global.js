import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: "TitiliumWeb";
    src: local("TitiliumWebBlack"),
    url("../src/assets/fonts/TitilliumWebBlack.ttf") format('truetype');
}
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
    font-family: "TitiliumWeb";
}
#root {
    height: 100%;
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
