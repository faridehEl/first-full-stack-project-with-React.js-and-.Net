import Catalog from "../../catalog/Catalog";
import { Container, CssBaseline, Switch, createTheme} from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
function App() {
  const [darkMode , setDarkMode] = useState(false);
  const darkType = darkMode ? 'dark' : 'light';
  const theme= createTheme({
    palette : {
      mode:darkType,
      background : {
        default :darkType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  function handelChange(){
  setDarkMode(!darkMode);
   }

  return (
      <ThemeProvider theme = {theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handelChange={handelChange}/>
      <Container>
        <Catalog />
      </Container>
       
      </ThemeProvider>
  )
}

export default App
