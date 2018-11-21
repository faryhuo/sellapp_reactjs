import React from 'react';

import './Good.styl'
import GoodList from 'component/GoodList/GoodList.js'
import ShopCart from 'component/ShopCart/ShopCart.js'
import GoodDetail from 'component/GoodDetail/GoodDetail.js'


import { observer } from 'mobx-react';
@observer
class Good extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

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
                    <GoodList store={this.props.goodListStore} shopCartStore={this.props.shopCartStore} />
                    <ShopCart store={this.props.shopCartStore} deliveryPrice="20" minPrice="20" />
                </div>
                {this.props.goodListStore.isShowDetailPage && <GoodDetail store={this.props.goodListStore} shopCartStore={this.props.shopCartStore} />}
            </div>
        );
    }
}

export default Good;