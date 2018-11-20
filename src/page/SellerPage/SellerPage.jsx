import React from 'react';

import 'page/SellerPage/SellerPage.styl';

import Title from 'component/Title/Title.jsx';
import SellerSearch from 'component/SellerSearch/SellerSearch.jsx';
import CategoryMenu from 'component/CategoryMenu/CategoryMenu.jsx';
import Split from 'component/Split/Split.jsx';

import SellerList from 'component/SellerList/SellerList.jsx';

import BScroll from 'better-scroll';

import SellerListStore from 'store/SellerListStore.js'

let sellerListStore = new SellerListStore();

class SellerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
    }
    componentWillReceiveProps() {
        this.initScroll();
    }
    componentDidMount() {
        this.initScroll();
    }
    initScroll(callback) {
        setTimeout(() => {
            if (!this.state.contentWapperScroll) {
                this.state.contentWapperScroll = new BScroll(this.refs.scrollContentWrapper
                    , { useTransition: true, click: true, probeType: 3 });
            } else {
                this.state.contentWapperScroll.refresh();
            }
            callback && callback(this.state.contentWapperScroll);
        }, 0);
    }
    render() {
        return (
            <div className="SellerPage">
                <Title title="外卖APP" />
                <SellerSearch SellerListStore={sellerListStore} />
                <div className="scrollContentWrapper" ref="scrollContentWrapper">
                    <div>
                        <CategoryMenu />
                        <Split />
                        <SellerList SellerListStore={sellerListStore} initScroll={(callback)=>{this.initScroll(callback)}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SellerPage;