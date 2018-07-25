import React from 'react';

import 'component/HomeMenu/HomeMenu.styl'
import { Route, NavLink} from 'react-router-dom';

class HomeMenu extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }


    render(){
        return (
            <div className="HomeMenu">
                <ul className="menu-list">
                    <li className="menu-item" >
                      <NavLink to={this.props.match.url+"/home"}  activeClassName="active">
                        <i className="active icon material-icons">home</i>
                        <div className="text">首页</div>
                      </NavLink>
                    </li>
                    <li className="menu-item">
                    <NavLink  to={this.props.match.url+"/order"}  activeClassName="active">
                    <i className="icon material-icons">child_friendly</i>
                      <div className="text">订单</div></NavLink>
                    </li>
                    <li className="menu-item">
                    <NavLink to={this.props.match.url+"/user"} activeClassName="active">
                      <i className="icon material-icons">person</i>
                      <div className="text">我的</div></NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomeMenu;