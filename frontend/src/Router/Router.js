import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AddTask from '../Pages/AddTasks/AddTasks';
import UpdateTask from '../Pages/UpdateTask/UpdateTask';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/adicionar" component={ AddTask } />
      <Route exact path="/editar/:id" component={ UpdateTask } />
    </Switch>
  )
};

export default Rotas;