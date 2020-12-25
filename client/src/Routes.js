// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from "./components/posts/post";
import App from "./App"; 

const Routes = () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/post/:id" component={Post} />
    </Switch>
</BrowserRouter>
);

export default Routes;