import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductLis from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Warning from "./components/warning/Warning";
import Exp from "./components/exp&skills/ExpandSkills"
import { ThemeContext } from "./context";

const App = () => {
  const theme= useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
  <div style={{backgroundColor: darkMode? '#222':'white', color: darkMode? ' #59b256':'black'}}>
    <Toggle/>
    <Warning/>
    <Intro/>
    <Exp/>
    <ProductLis/>
    <About/>   
    <Contact/> 
    
  </div>);
};

export default App;