
import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from 'page/HomePage/HomePage.js';
import SellerDetail from 'page/SellerDetail/SellerDetail.js';
import '@/common/stylus/index.styl';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div id="App_Conponent" className="Application">
                <Router>
                    <div>
                        <Route exact path="/" render={() => <Redirect to="/SellerList/home" />} />
                        <Switch>
                            <Route path="/SellerList" component={HomePage}></Route>
                            <Route path="/Detail/:id" component={SellerDetail}></Route>
                            <Route render={() => <div>Not Found</div>} />
                        </Switch>F
                    </div>
                </Router>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
