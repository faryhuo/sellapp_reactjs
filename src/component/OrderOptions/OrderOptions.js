import React from 'react';

import 'component/OrderOptions/OrderOptions.styl'

class OrderOptions extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className="OrderOptions">
                <div className="split"></div>            
                <div className="order-item-header border-1px">
                    <div className="seller-icon"><img width="40px" height="40px" src={this.props.orderItem.seller.icon}/></div>
                    <div className="seller-name">{this.props.orderItem.seller.name}</div>
                    <div className="order-icon">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </div>
                    <div className="order-state">{this.props.orderItem.status}</div>
                </div>
                <div className="order-content">
                    <ul className="order-list-detail">
                      {this.props.orderItem.goods.map((good,index)=>{
                          return <li key={index} className="order-item-detail">
                                    <div className="order-text">{good.name}</div>
                                    <div className="order-count">x{good.count}</div>
                                </li>; 
                      })}
                    </ul>
                    <div className="order-info border-1px">共{this.props.orderItem.goods?this.props.orderItem.goods.length:0}件商品,实付<span className="total">￥{this.props.orderItem.total}</span></div>
                </div>
                <div className="order-action-btn">
                    <button className="btn-again" onClick={(e)=>{this.props.againOrder(this.props.orderItem)}}>再来一单</button>
                    <button className="btn-comment">去评论</button>                            
                </div>
            </div>
        );
    }
}

export default OrderOptions;