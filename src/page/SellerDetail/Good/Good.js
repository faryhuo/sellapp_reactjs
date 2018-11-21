import React from 'react';

import './Good.styl'
import GoodList from 'component/GoodList/GoodList.js'
import ShopCart from 'component/ShopCart/ShopCart.js'
import GoodDetail from 'component/GoodDetail/GoodDetail.js'


import GoodListStore from 'store/GoodListStore.js'
import SellerDetailStore from 'store/SellerDetailStore.js'
import ShopCartStore from 'store/ShopCartStore.js'

let goodListStore;

let shopCartStore;
import { observer } from 'mobx-react';
const dataSource={};
@observer
class Good extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        let id = props.sellerId;
        let localStore = dataSource["SellerDetail__" + id];
        if (!localStore) {
            goodListStore = new GoodListStore();
            shopCartStore = new ShopCartStore();
            dataSource["SellerDetail__" + id]=
                { goodListStore: goodListStore, shopCartStore: shopCartStore };
        } else {
            goodListStore = localStore.goodListStore;
            shopCartStore = localStore.shopCartStore;
        }
    }
    initScroll() {
    }
    componentWillMount() {
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }
    render() {
        return (
            <div className="GoodPage">
                <div>
                    <GoodList store={goodListStore} shopCartStore={shopCartStore} />
                    <ShopCart store={shopCartStore} deliveryPrice="20" minPrice="20" />
                </div>
                {goodListStore.isShowDetailPage && <GoodDetail store={goodListStore} shopCartStore={shopCartStore} />}
            </div>
        );
    }
}

export default Good;