import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/HomePage/homepage.component'
import ContactPage from './pages/ContactPage/contactpage.component'
import GenericPage from './pages/Generic/genericpage.component'
import ElementsPage from './pages/Elements/elementspage.component'

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/generic' component={GenericPage} />
      <Route exact path='/elements' component={ElementsPage} />
      <Route exact path='/contact' component={ContactPage} />
    </div>
  );
}

export default App;
