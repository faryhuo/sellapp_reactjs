import React from 'react';

import 'component/SellerListOption/SellerListOption.styl'

import Star from 'component/Star/Star.js';


class SellerListOption extends React.Component{
    constructor(props){
        super(props);
        this.state={
            descType:{
                0:"decrease",
                1:"discount",
                2:"guarantee",
                3:"invoice",
                4:"special"
            }
        }
    }
    componentWillMount(){
    }
    viewDetail(){
        location.href="#/Detail/goods"
    }
    render(){
        return (
            <div className="SellerListOptions border-1px" onClick={(e)=>{this.viewDetail()}}>
            <div className="options-wrapper">
                 <div className="left-content">
                     <div className="image">
                         <img  width="100%" height="100%" src={this.props.Seller.icon}></img>
                     </div>
                 </div>
                 <div className="right-content">
                     <div className="header">
                        <span>{this.props.Seller.name}</span>
                     </div>
                     <div className="info">
                         <div className="left">
                             <div className="star"><Star size="24" score={this.props.Seller.score}></Star></div>
                             <div className="count">月售{this.props.Seller.sellCount}份</div>
                         </div>
                         <div className="right">
                             <div className="time">{this.props.Seller.deliveryTime}分鐘</div>
                             <div className="position">{this.props.Seller.position}Km</div>
                         </div>
                     </div>
                     <div className="price">
                             <div className="minPrice">起送 ￥{this.props.Seller.minPrice}</div>
                             <div className="deliveryPrice">配送 ￥{this.props.Seller.deliveryPrice}</div>
                             <div className="averagePrice">人均 ￥{this.props.Seller.averagePrice}</div>
                             <div className="icon">iCON</div>
                     </div>
                     {this.props.Seller.desc &&
                     <div className="desc-wrapper">
                         <ul className="desc-list">
                           {
                             this.props.Seller.desc.map((item,i)=>{
                              return  <li className="desc-item" key={i}>
                                <div className={"icon "+this.state.descType[item.type]}></div>
                                <div className="text">{item.text}</div>
                               </li>;
                             })
                           }
                         </ul>
                     </div>
                     }
                 </div>
            </div>
        </div>
        );
    }
}

export default SellerListOption;