import React from 'react';

import 'component/SellerDetailMenu/SellerDetailMenu.styl'
import { Route, NavLink} from 'react-router-dom';

class SellerDetailMenu extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       // document.title = "Place Bond Order";
    }
    render(){
        return (
            <div className="SellerDetailMenu border-1px">
            <div className="tab-item">
                <NavLink to={this.props.match.url+'/goods'}   activeClassName="active">商品</NavLink>
            </div>
            <div className="tab-item">
                <NavLink to={this.props.match.url+'/ratings'}  activeClassName="active" >评论</NavLink>
            </div>
            <div className="tab-item">
                 <NavLink to={this.props.match.url+'/seller'}  activeClassName="active">商家</NavLink>
            </div>
        </div>
        );
    }
}

export default SellerDetailMenu;