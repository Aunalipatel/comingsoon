import './App.css';
import './components/navbar.css';

import React from 'react';
import HomeScreen2 from './screens/HomeScreen2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import LaptopRepairScreen from './screens/repairscreens/LaptopRepairScreen';
import TVRepairScreen from './screens/repairscreens/TVRepairScreen';
import ProjectorRepairScreen from './screens/repairscreens/ProjectorRepairScreen';
import MobileRepairScreen from './screens/repairscreens/MobileRepairScreen';
import TabletRepairScreen from './screens/repairscreens/TabletRepairScreen';
import PrinterRepairScreen from './screens/repairscreens/PrinterRepairScreen';
import ShopScreen from './screens/ShopScreen'; 
import LaptopAddon from './screens/addonscreens/LaptopAddon';
import TechcareScreen from './screens/TechcareScreen';
import EnterLocation from './screens/EnterLocation';
import GoogleMaps from './screens/GoogleMaps';
import SelectServiceDateandTime from './screens/SelectServiceDateandTime';
import PaymentGateway from './screens/PaymentGateway';




import Aboutus from './static/Aboutus';
import ContactUs from './static/ContactUs';
import Refundpolicy from './static/Refund-policy';
import TermsandConditions from './static/TermsandConditions';
import PrivacyPolicy from './static/PrivacyPolicy';



import AdminLoginForm from './screens/adminrelated/AdminLoginForm';
import AdminHomeScreen from './screens/adminrelated/AdminHomeScreen';
import Customers from './screens/adminrelated/Customers';
import Tickets from './screens/adminrelated/Tickets';
import CreateTicket from './screens/adminrelated/CreateTicket';
import AddCustomer from './screens/adminrelated/AddCustomer';




import Amplify from "aws-amplify";
import Auth from "./Auth";

Amplify.configure({
  Auth,
});

function App() {
  return (
    
    <div className="App">
      <Router>
        <div >
          <NavbarComponent />
          
        </div>
        <Switch>

            <Route path = "/" exact component = {HomeScreen2}/>;
            {/* static pages */}
            {/* <Route path = "/privacy-policy" exact component = {PrivacyPolicyScreen}/>;
            <Route path = "/t&c-screen" exact component = {TCScreen}/>;
            <Route path = "/aboutus" exact component = {AboutusScreen}/>; */}
            {/* staticpages end */}
            <Route path = "/google-maps" exact component = {GoogleMaps}/>;
            <Route path = "/payment-gateway" exact component = {PaymentGateway}/>;
            <Route path = "/select-service-date-and-time" exact component = {SelectServiceDateandTime}/>;
            <Route path = "/enter-location" exact component = {EnterLocation}/>;
            <Route path = "/laptop-repair" exact component = {LaptopRepairScreen}/>;
            <Route path = "/laptop-addons" exact component = {LaptopAddon}/>;
            <Route path = "/tv-repair" exact component = {TVRepairScreen}/>;
            <Route path = "/projector-repair" exact component = {ProjectorRepairScreen}/>;
            <Route path = "/mobile-repair" exact component = {MobileRepairScreen}/>;
            <Route path = "/tablet-repair" exact component = {TabletRepairScreen}/>;
            <Route path = "/printer-repair" exact component = {PrinterRepairScreen}/>;
            <Route path = "/shop" exact component = {ShopScreen}/>;
            <Route path = "/techcare" exact component = {TechcareScreen}/>;
            <Route path = "/admin-login-form" exact component = {AdminLoginForm}/>;
            <Route path = "/admin-homescreen" exact component = {AdminHomeScreen}/>;
            <Route path="/tickets-admin" exact component={Tickets} />
            <Route path="/customers-admin" exact component={Customers} />
            <Route path="/add-customer-admin" exact component={AddCustomer} />
            <Route path="/create-ticket-admin" exact component={CreateTicket} />
            
            <Route path="/aboutus" exact component={Aboutus} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/refund-policy" exact component={Refundpolicy} />
            <Route path="/tandc" exact component={TermsandConditions} />
            <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          
              

          </Switch>
        </Router>

      {/* <HomeScreen/> */}

    </div>
  );
}

export default App;
