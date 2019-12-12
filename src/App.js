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
import SignUpComponent from './component/localComponents/signup/signup.component';
import LoginComponent from './component/localComponents/login/login.component';
import UserContextProvider from './context/user.context';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeContextProvider>
          <UserContextProvider>

          <BaseThemeComponent />

          <header>
            <NavigationsBar />
          </header>
          <main>
            <Route exact path='/review' component={ReviewOverviewComponent} />
            <Route exact path='/review/add' component={AddReviewComponent} />
            <Route exact path='/signup' component={SignUpComponent} />
            <Route exact path='/login' component={LoginComponent} />

          </main>
          <footer>
            <FooterComponent />
          </footer>
          
          </UserContextProvider>
        </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
