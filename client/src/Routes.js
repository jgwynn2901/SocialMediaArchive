// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from "./components/posts/post";
import Login from "./components/account/Login"
import Register from "./components/account/Register"
import App from "./App"; 

const Routes = () => (
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/post/:id" component={Post} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
</BrowserRouter>
);

export default Routes;