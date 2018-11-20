import React from 'react';

import HomeMenu from 'component/HomeMenu/HomeMenu.jsx'


import SellerPage from 'page/SellerPage/SellerPage.jsx'
import OrderList from 'page/OrderList/OrderList.jsx'
import User from 'page/User/User.jsx'

import 'page/HomePage/HomePage.styl'

import {Route,Switch} from 'react-router-dom';

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = "Home";
    }
    componentWillReceiveProps(nextProps) {

    }
    render(){
        return (
                <div className="HomePage" >
                    <div className="contentWrapper" >
                            <Route  path={this.props.match.url+"/home"} exact component={SellerPage}></Route>
                            <Route  path={this.props.match.url+"/order"} exact component={OrderList}></Route>
                            <Route  path={this.props.match.url+"/user"} exact component={User}></Route>

                    </div>
                    <div className="footerWarpper">
                          <HomeMenu match={this.props.match}/>
                    </div>
                </div>
        );
    }
}

export default HomePage;