import React, { Fragment } from 'react';
import './App.css';
import Navbar from './menu/navbar/Navbar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import EventsPage from './pages/EventsPage';
import PeoplePage from './pages/PeoplePage';

function App() {
  return (
    <Fragment>
      <Route exact path='/' component={HomePage}/>
      <Route 
        path='/(.+)'
        render={() => 
          <Fragment>
            <Navbar/>
            <Container>
              <Route path='/events' component={EventsPage} />
              <Route path='/people' component={PeoplePage} />
            </Container>
          </Fragment>    
        }
      />
      
    </Fragment>
  );
}

export default App;
