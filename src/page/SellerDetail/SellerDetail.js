import React from 'react';

import 'page/SellerDetail/SellerDetail.styl'
import SellerDetailHeader from 'component/SellerDetailHeader/SellerDetailHeader.js'
import GoodList from 'component/GoodList/GoodList.js'


import SellerDetailMenu from 'component/SellerDetailMenu/SellerDetailMenu.js'
import ShopCart from 'component/ShopCart/ShopCart.js'
import { Route, Switch } from 'react-router-dom';


import GoodListStore from 'store/GoodListStore.js'
import SellerDetailStore from 'store/SellerDetailStore.js'
import ShopCartStore from 'store/ShopCartStore.js'

import Good from 'page/SellerDetail/Good/Good.js'
import Rating from 'page/SellerDetail/Rating/Rating.js';
import Seller from 'page/SellerDetail/Seller/Seller.js';


let sellerDetailStore;
let goodListStore;

let shopCartStore;
import GlobalObject from 'common/js/GlobalObject.js';
let dataSource = GlobalObject["dataSource"];

class SellerDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(props);
        let id = props.match.params.id;
        sellerDetailStore = new SellerDetailStore(id);

        let localStore = dataSource["SellerDetail__" + id];
        if (!localStore) {
            goodListStore = new GoodListStore();
            shopCartStore = new ShopCartStore();
            dataSource["SellerDetail__" + id] =
                { goodListStore: goodListStore, shopCartStore: shopCartStore };
        } else {
            goodListStore = localStore.goodListStore;
            shopCartStore = localStore.shopCartStore;
        }

    }
    initScroll() {
    }
    componentWillMount() {
        document.title = sellerDetailStore.data.name;
    }
    componentDidMount() {
    }
    componentWillUpdate() {
    }



    render() {
        console.log(this.props.match)
        let id = this.props.match.params.id;
        return (
            <div className="SellerDetail" ref="SellerDetail">
                <SellerDetailHeader store={sellerDetailStore} />
                <SellerDetailMenu match={this.props.match} />
                <Route path={this.props.match.path + "/goods"}
                    render={(props) => (
                        <Good {...props} goodListStore={goodListStore} shopCartStore={shopCartStore} />
                    )}></Route>
                <Route path={this.props.match.path + "/ratings"}
                    render={(props) => (
                        <Rating {...props} store={sellerDetailStore} />
                    )}>
                </Route>
                <Route path={this.props.match.path + "/seller"}
                    render={(props) => (
                        <Seller {...props} store={sellerDetailStore} />
                    )}>
                </Route>

            </div>
        );
    }
}

export default SellerDetail;