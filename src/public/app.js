
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from 'page/HomePage/HomePage.js';
import SellerDetail from 'page/SellerDetail/SellerDetail.js';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import '@/common/stylus/index.styl';
import './app.css';
import 'animate.css';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div id="App_Conponent" className="Application">
                <Router>
                    <Route
                        render={({ location }) => (
                            <div >
                                <Route exact path="/" render={() => <Redirect to="/SellerList/home" />}/>

                                <div >
                                    {/* <TransitionGroup>
                                        <CSSTransition
                                            key={location.key}
                                            classNames="fade"
                                            timeout={300}
                                        > */}
                                    <Switch location={location}>
                                        <Route path="/SellerList" component={HomePage}></Route>
                                        <Route path="/Detail/:id" component={SellerDetail}></Route>
                                        <Route render={() => <div>Not Found</div>} />
                                    </Switch>
                                    {/* </CSSTransition>
                                    </TransitionGroup> */}
                                </div>
                            </div>
                        )}
                    ></Route>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
