import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";


// Context
import ThemeContextProvider from './context/theme.context';

// Components
import NavigationsBar from './component/globalcomponents/navigation/navigation.component';
import FooterComponent from './component/globalcomponents/footer/footer.component';
import BaseThemeComponent from './component/globalcomponents/baseTheme/baseTheme.component';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeContextProvider>
          
          <BaseThemeComponent />

          <header>
            <NavigationsBar />
          </header>
          <main>
            <h1 style={{textAlign:'center'}}>Sumiku's Anime Views</h1>
          </main>
          <footer>
            <FooterComponent />
          </footer>

        </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
