import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import videoRegister from './components/pages/register'
import categoryRegister from './components/pages/Category'

const iframe = <iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600" title='Flappy Bird'></iframe>;

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/register' component={videoRegister} exact/>
      <Route path='/register/category' component={categoryRegister} exact/>
      <Route component={() => (iframe)}/>

    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

