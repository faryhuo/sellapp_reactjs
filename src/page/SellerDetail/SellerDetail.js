import React from 'react';

import 'page/SellerDetail/SellerDetail.styl'
import SellerDetailHeader from 'component/SellerDetailHeader/SellerDetailHeader.js'
import GoodList from 'component/GoodList/GoodList.js'


import SellerDetailMenu from  'component/SellerDetailMenu/SellerDetailMenu.js'
import ShopCart from  'component/ShopCart/ShopCart.js'
import { Route,Switch} from 'react-router-dom';


import GoodListStore from 'store/GoodListStore.js'
import SellerDetailStore from 'store/SellerDetailStore.js'
import ShopCartStore from 'store/ShopCartStore.js'

import Good from  'page/SellerDetail/Good/Good.js'
import Rating from 'page/SellerDetail/Rating/Rating.js';
import Seller from 'page/SellerDetail/Seller/Seller.js';


let sellerDetailStore;

class SellerDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
        
        }
        console.log(props);
        let id=props.match.params.id;
        sellerDetailStore=new SellerDetailStore(id);
    }
    initScroll(){
     }
    componentWillMount(){
        document.title = sellerDetailStore.data.name;
    }
    componentDidMount(){
    }
    componentWillUpdate(){
    }
    render(){
        let id=this.props.match.params.id;
        return (
            <div className="SellerDetail">
                <SellerDetailHeader store={sellerDetailStore}/>
                <SellerDetailMenu match={this.props.match}/>
                <Route>
                    <Switch>
                        <Route  path={this.props.match.url+"/goods"} exact 
                                                 render={(props) => (
                                                    <Good sellerId={id}/>
                                                  )}>></Route> 
                        <Route  path={this.props.match.url+"/ratings"} exact
                         render={(props) => (
                            <Rating store={sellerDetailStore}/>
                          )}>
                         </Route> 
                         <Route  path={this.props.match.url+"/seller"} exact
                         render={(props) => (
                            <Seller store={sellerDetailStore}/>
                          )}>
                         </Route> 
                    </Switch>
                </Route>
            </div>
        );
    }
}

export default SellerDetail;