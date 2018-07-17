import React from 'react';

import 'page/SellerDetail/SellerDetail.styl'
import GoodList from 'component/GoodList/GoodList.jsx'
import ShopCart from  'component/ShopCart/ShopCart.jsx'


import GoodListStore from 'store/GoodListStore.js'
import SellerDetailStore from 'store/SellerDetailStore.js'
import ShopCartStore from 'store/ShopCartStore.js'

let goodListStore=new GoodListStore();

let sellerDetailStore=new SellerDetailStore();
let shopCartStore=new ShopCartStore();

class GoodDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
        
        }
    }
    initScroll(){
     }
    componentWillMount(){
    }
    componentDidMount(){
    }
    componentWillUpdate(){
    }
    render(){
        return (
            <div className="GoodDetail">
                <GoodList store={goodListStore}  shopCartStore={shopCartStore} />
                <ShopCart store={shopCartStore} deliveryPrice="20" minPrice="20" />
            </div>
        );
    }
}

export default GoodDetail;