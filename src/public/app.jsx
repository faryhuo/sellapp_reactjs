
import 'babel-polyfill'
import React            from 'react';
import ReactDOM         from 'react-dom';

import HomePage from 'page/HomePage/HomePage.jsx';
import SellerDetail from 'page/SellerDetail/SellerDetail.jsx';

//import  'material-design-icons/iconfont/material-icons.css';
import '@/common/stylus/index.styl';

import {HashRouter as Router, Route,Switch,Redirect } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
            <div id="App_Conponent" >
                <Router  >
                     <Switch>
                        <Route  path="/SellerList" component={HomePage}></Route>
                        <Route  path="/Detail" exect component={SellerDetail}></Route>
                        <Redirect path="/" to={{pathname: '/SellerList/home'}} />

                    </Switch>
               </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
