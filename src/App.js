import './App.css';
import './components/navbar.css';
import React from 'react';
import HomeScreen2 from './screens/HomeScreen2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    
    <div className="App">
      <Router>
        <div >
          <NavbarComponent />
          
        </div>
        <Switch>

            <Route path = "/" exact component = {HomeScreen2}/>;

            
          </Switch>
        </Router>

      

    </div>
  );
}

export default App;
