import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AddTask from '../Pages/AddTasks/AddTasks';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/adicionar" component={ AddTask } />
    </Switch>
  )
};

export default Rotas;