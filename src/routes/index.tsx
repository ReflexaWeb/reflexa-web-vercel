import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Categorias } from '../pages/Categorias';
import { Empresa } from '../pages/Empresa';
import { Grupo } from '../pages/Grupo';
import { Contato } from '../pages/Contato';
import { SacoLixo100Litros } from '../pages/SacoLixo100Litros';
import { SacoLixo150Litros } from '../pages/SacoLixo150Litros';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/produto/:code">
      <Details />
    </Route >
    <Route path="/categorias/" component={Categorias}/>
    <Route path="/produtos/products-by-group/:group_code">
      <Grupo/>
    </Route>
    <Route path="/sobre/" component={Empresa}/>
    <Route path="/lixo-100litros" component={SacoLixo100Litros}/>
    <Route path="/lixo-150litros" component={SacoLixo150Litros}/>
    <Route path="/contato/" component={Contato}/>
  </Switch>
)

export default Routes;