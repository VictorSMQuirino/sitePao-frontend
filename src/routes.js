import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cadastro from './pages/Cadastro';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/listProduto" component={Product}></Route>
                <Route path="/cadastro" component={Cadastro}></Route>
            </Switch>
        </BrowserRouter>
    );
}