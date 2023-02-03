export const Theme = {
  colors: {
    primaryBg: "black",
    darkGreenBg: "#0A1D1C",
    primaryTxt: "white",
    theGreen: "#00F9B6",
    theDarkGreen: "#1F5E5B",
    thePurple: "#D10061",
    theGrey: "#393939"
  },
  button: {
    radius: "0.5rem"
  },
  space: {
    padding: "2rem"
  },
  breakpoints: {
    xs: "320px",
    s: "480px",
    m: "768px",
    l: "1040px",
    xl: "1430px",
  },
  desktop: {
    rows: "auto auto 1fr auto",
    columns: "repeat(12, 1fr)",
    area: `
    "header header header header header header header header header header header header"
    "sidebar hero hero hero hero hero hero hero hero hero hero hero"
    ". main main main main main main main main main main main"
    "footer footer footer footer footer footer footer footer footer footer footer footer"
              `,
  },
  desktopTwo: {
    rows: "auto auto 1fr auto",
    columns: "repeat(12, 1fr)",
    area: `
    "header header header header header header header header header header header header"
    "sidebar main main main main main main main main main main main"
    ". main main main main main main main main main main main"
    "footer footer footer footer footer footer footer footer footer footer footer footer"
              `,
  },
  tablet: {
    rows: "auto auto auto 1fr auto",
    columns: "repeat(12, 1fr)",
    area: `
    "header header header header header header header header header header header header"
    "hero hero hero hero hero hero hero hero hero hero hero hero"
    "sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar"
    "main main main main main main main main main main main main"
    "footer footer footer footer footer footer footer footer footer footer footer footer"
              `,
  },
  tabletTwo: {
    rows: "",
    columns: "",
    area: `
              `,
  },
  mobile: {
    rows: "auto auto auto 1fr auto",
    columns: "1fr 1fr",
    area: `
    "header header"
    "hero hero"
    "sidebar sidebar"
    "main main"
    "footer footer"
              `,
  },
  mobileTwo: {
    rows: "",
    columns: "",
    area: `
              
              `,
  },

};
