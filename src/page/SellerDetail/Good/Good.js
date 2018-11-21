import React from 'react';

import './Good.styl'
import GoodList from 'component/GoodList/GoodList.js'
import ShopCart from  'component/ShopCart/ShopCart.js'
import GoodDetail from  'component/GoodDetail/GoodDetail.js'


import GoodListStore from 'store/GoodListStore.js'
import SellerDetailStore from 'store/SellerDetailStore.js'
import ShopCartStore from 'store/ShopCartStore.js'

let goodListStore=new GoodListStore();

let sellerDetailStore=new SellerDetailStore();
let shopCartStore=new ShopCartStore();
import { observer } from 'mobx-react';

@observer
class Good extends React.Component{
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
            <div className="GoodPage">
                <div>
                    <GoodList store={goodListStore}  shopCartStore={shopCartStore} />
                    <ShopCart store={shopCartStore} deliveryPrice="20" minPrice="20" />
                </div>
                {goodListStore.isShowDetailPage && <GoodDetail store={goodListStore} shopCartStore={shopCartStore}/>}
            </div>
        );
    }
}

export default Good;