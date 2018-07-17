import React from 'react';

import 'component/GoodDetail/GoodDetail.styl'
import RatingSelect from 'component/RatingSelect/RatingSelect.jsx';
import RatingContent from 'component/RatingContent/RatingContent.jsx';
import CartControl from 'component/CartControl/CartControl.jsx';
import Split from 'component/Split/Split.jsx';

import { observer } from 'mobx-react';
import RatingStore from 'store/RatingStore.js';
import BScroll from 'better-scroll';

let ratingStore = new RatingStore();

@observer
class GoodDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.food = this.props.store.selectGood;
        ratingStore.setRatingContent(this.food.ratings);
    }
    componentWillMount() {
    }
    componentDidMount(){
        this.initScroll();
    }
    componentWillUpdate() {
    }

    initScroll() {
        setTimeout(() => {
            if (this.goodDetailScroll) {
                this.goodDetailScroll.refresh();
            } else {
                this.goodDetailScroll = new BScroll(this.refs.GoodDetail, { probeType: 3, useTransition: true, click: true });
            }
        }, 0)
    }

    hidePage(){
        this.props.store.setIsShowDetailPage(false);
    }



    render() {
        return (
            <div className="GoodDetail" ref="GoodDetail">
                <div className="food-content">
                    <div className="image-header">
                        <img src={this.food.image} alt="" />
                        <div className="back" onClick={(e)=>{this.hidePage(e)}}>
                            <i className="icon-arrow_lift"></i>
                        </div>
                    </div>
                    <div className="content">
                        <h1 className="title">{this.food.name}</h1>
                        <div className="detail">
                            <span className="sell-count">月售{this.food.sellCount}份</span>
                            <span className="rating">好评率{this.food.rating}</span>
                        </div>
                        <div className="price">
                            <span className="now">￥{this.food.price}</span>
                            {this.food.oldPrice && <span className="old">￥{this.food.oldPrice}</span>}
                        </div>

                        <div className="cartcontrol-wrapper">
                            <CartControl cart={this.food} />
                        </div>
                        <div className="buy" >
                            加入购物车
                </div>
                    </div >
                    {this.food.info && <Split ></Split>}
                    {this.food.info && <div className="info" >
                        <h1 className="title">商品信息</h1>
                        <p className="text">{this.food.info}</p>
                    </div>}
                    {this.food.ratings && <Split ></Split>}
                    {this.food.ratings && <div className="rating" >
                        <h1 className="title">商品评价</h1>
                        <RatingSelect store={ratingStore} />
                        <RatingContent store={ratingStore} />
                    </div>
                    }
                </div>
            </div >
        );
    }
}

export default GoodDetail;