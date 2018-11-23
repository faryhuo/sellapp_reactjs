import React from 'react';

import HomeMenu from 'component/HomeMenu/HomeMenu.js'


import SellerPage from 'page/SellerPage/SellerPage.js'
import OrderList from 'page/OrderList/OrderList.js'
import User from 'page/User/User.js'

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


    componentWillUnmount(){
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