import ThemeContext from "./contexts/Theme";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    
      <ThemeContext.Provider value ="light">
        <Body/>
        <Footer/>
      </ThemeContext.Provider>
  );
}

export default App;
