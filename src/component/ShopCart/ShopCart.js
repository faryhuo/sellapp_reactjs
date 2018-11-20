import React from 'react';

import 'component/ShopCart/ShopCart.styl'

import CartControl from 'component/CartControl/CartControl.js'
import { observer } from 'mobx-react';
import BScroll from 'better-scroll';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

@observer
class ShopCart extends React.Component {
    constructor(props) {
        super(props);
        this.shopCartStore = this.props.store;
        this.shopCartStore.setMinPrice(this.props.minPrice);
        this.state = {
            balls: [{
                show: false
            }, {
                show: false
            }, {
                show: false
            }, {
                show: false
            }, {
                show: false
            }],
            dropBall: [],
            fold: true,
            listShow: false
        }
    }
    componentWillMount() {
    }
    toggleList() {
        if (!this.shopCartStore.totalCount) {
            return;
        }
        this.setState({ listShow: this.listShow() });
    }
    listShow() {
        if (!this.shopCartStore.totalCount) {
            return false;
        } else {
            let show = !this.state.listShow;
            if (show) {
                setTimeout(() => {
                    this.scroll = new BScroll(this.refs.shopcartList, {
                        click: true, useTransition: true
                    });
                }, 0)
            }else{
                if(this.scroll){
                    this.scroll.destroy();
                    this.scroll = null;
                }
            }
            return show;
        }
    }
    pay(){
        if(!this.shopCartStore.isEnough){
            return;
        }
        window.alert(`支付${this.shopCartStore.totalPrice}`);
    }
    hideList(){
        this.setState({ listShow: false });
    }

    clear(){
        this.shopCartStore.clearFood();
        this.setState({ listShow: false });
    }

    render() {
        return (
            <div className="ShopCart-wrapper">
            <div className="ShopCart">
                <div className="content">
                    <div className="content-left">
                        <div className="logo-wrapper" onClick={(e) => { this.toggleList() }}>
                            <div className={"logo " + (this.shopCartStore.totalCount > 0 ? "highlight" : "")}>
                                <i className={"icon-shopping_cart " + (this.shopCartStore.totalCount > 0 ? "highlight" : "")}></i>
                                {this.shopCartStore.totalCount > 0 && <div className="num" >{this.shopCartStore.totalCount}</div>}
                            </div>
                        </div>
                        <div className={"price " + (this.shopCartStore.totalPrice > 0 ? "highlight" : "")}>￥{this.shopCartStore.totalPrice}</div>
                        <div className="desc">另需配送费{this.props.deliveryPrice}元</div>
                    </div>
                    <div className="content-right" >
                        <div onClick={(e)=>{this.pay()}} className={"pay "+(this.shopCartStore.isEnough?"enough":"not-enough")}>
                            {this.shopCartStore.payDesc}
                        </div>
                    </div>
                </div>
                <div className="ball-container">
                    {this.state.balls.map((ball, index) => {
                        return <div key={index}>
                            {ball.show && <div className="ball">
                                <div className="inner inner-hook">

                                </div>
                            </div>}
                        </div>
                    })
                    }
                </div>
                <ReactCSSTransitionGroup
                    transitionName="fold"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                     {this.state.listShow && 
                <div className={"shopcart-list"}>
                    <div className="list-header">
                        <div className="title">购物车</div>
                        <div className="empty" onClick={(e)=>{this.clear(e)}}>清空</div>
                    </div>
                    <div className="list-content" ref="shopcartList">
                        <ul>
                            {this.shopCartStore.selectedFoods.map((food, index) => {
                                return <li className="food" key={index}>
                                    <span className="name">{food.name}</span>
                                    <div className="price"><span>￥{food.price * food.count}</span></div>
                                    <div className="cart-control-wrapper">
                                        <CartControl cart={food} store={this.shopCartStore}></CartControl>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>}
                </ReactCSSTransitionGroup>
            </div >
            <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {this.state.listShow && <div  onClick={(e)=>{this.hideList(e)}} className="list-mask" ></div>}
           </ReactCSSTransitionGroup>
           </div>
        );
    }
}

export default ShopCart;