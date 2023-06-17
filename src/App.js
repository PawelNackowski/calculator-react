import { Calculator } from "./Calculator";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./Calculator/themeSlice";
import { dark, light } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const darkTheme = useSelector(selectDarkTheme);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <GlobalStyle />
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
