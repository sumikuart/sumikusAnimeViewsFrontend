import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";

// Style:
import './global.style.css'
// Context
import ThemeContextProvider from './context/theme.context';

// Components
import NavigationsBar from './component/globalcomponents/navigation/navigation.component';
import FooterComponent from './component/globalcomponents/footer/footer.component';
import BaseThemeComponent from './component/globalcomponents/baseTheme/baseTheme.component';
import ReviewOverviewComponent from './component/localComponents/reviews/reviewoverview.component';
import AddReviewComponent from './component/localComponents/reviews/addNewReview/addReview.component';

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
            <Route exact path='/review' component={ReviewOverviewComponent} />
            <Route exact path='/review/add' component={AddReviewComponent} />
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
