import { ThemeProvider } from "styled-components";
import Router from "./Components/App/Router/Router";
import Footer from "./Components/Partials/Footer/Footer";
import Header from "./Components/Partials/Header/Header";
import Sidebar from "./Components/Partials/Sidebar/Sidebar";
import { GlobalStyles } from "./Styles/Global";
import { GridOuter } from "./Styles/GridOuter";
import { Theme } from "./Styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GridOuter>
        <Header />
        <Sidebar />
        <Router />
        <Footer />
      </GridOuter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
