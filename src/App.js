import React from 'react';
import Posts from './Posts';
import Profile from './Profile';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Route path="/posts" component={Posts} />
          <Route path="/profile" componemt={Profile} />
          <Route path="/home" componemt={Home} />
          <Route path="/" exact={true} component={Home} />
      </div>
    </BrowserRouter>
  )
}

export default App;
