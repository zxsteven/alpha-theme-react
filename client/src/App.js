import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component'

const HomePage = lazy(() => import('./pages/HomePage/homepage.component'))
const GenericPage = lazy(() => import('./pages/Generic/genericpage.component'))
const ElementsPage = lazy(() => import('./pages/Elements/elementspage.component'))
const ContactPage = lazy(() => import('./pages/ContactPage/contactpage.component'))

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/generic' component={GenericPage} />
          <Route exact path='/elements' component={ElementsPage} />
          <Route exact path='/contact' component={ContactPage} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
