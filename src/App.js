import './App.css';
import './components/navbar.css';
import React from 'react';
import HomeScreen2 from './screens/HomeScreen2.js';
import PaymentScreen from './screens/PaymentScreen';
import Aboutus from './screens/static/Aboutus';
import ContactUs from './screens/static/ContactUs';
import Refundpolicy from './screens/static/Refund-policy';
import TermsandConditions from './screens/static/TermsandConditions';
import PrivacyPolicy from './screens/static/PrivacyPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';

import Amplify from 'aws-amplify';
import Auth from './Auth';

Amplify.configure({
  Auth,
});

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarComponent />
        </div>
        <Switch>
          <Route path="/" exact component={HomeScreen2} />
          <Route path="/aboutus" exact component={Aboutus} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/refund-policy" exact component={Refundpolicy} />
          <Route path="/tandc" exact component={TermsandConditions} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/payment" exact component={PaymentScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
