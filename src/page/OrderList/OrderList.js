import React from 'react';

import 'page/OrderList/OrderList.styl'
import Title from 'component/Title/Title.js'
import OrderOptions from 'component/OrderOptions/OrderOptions.js'
import BScroll from 'better-scroll';
import GlobalObject from 'common/js/GlobalObject.js';
import ShopCartStore from 'store/ShopCartStore.js';
import GoodListStore from 'store/GoodListStore.js';
class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            OrderList:[{
                seller:{
                    id:1,
                    name:"粥品香坊（回龙观）",
                    icon:"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
                },
                status:"订单已完成"
                ,
                goods:[{
                    name:"皮蛋瘦肉粥",
                    count:1,
                    price:10,
                }],total:34.5
            }]
        }
    }

    againOrder(Order){ 
        let id=Order.seller.id;
        let dataSource=GlobalObject["dataSource"];
        let localStore = dataSource["SellerDetail__" + id];
        if (!localStore) {
            let shopCartStore = new ShopCartStore();
            let goodListStore=new GoodListStore();
            shopCartStore.initSelectedFoods(Order.goods)

            dataSource["SellerDetail__" + id] =
                { goodListStore: goodListStore, shopCartStore: shopCartStore };
        } else {
            let shopCartStore = localStore.shopCartStore;
            shopCartStore.initSelectedFoods(Order.goods)

        }
        location.href=`#/Detail/${id}/goods`
    }

    initScroll(){
         setTimeout(()=>{
         if(!this.state.orderContentScroll){
           this.state.orderContentScroll=new BScroll(this.refs.orderContent
           ,{useTransition:true,click:true});
         }else{
             this.state.orderContentScroll.refresh();
         }
      },0);
     }
    componentWillMount(){
        document.title = "Order List";
    }
    componentDidMount(){
        this.initScroll();
    }
    componentWillUpdate(){
        this.initScroll();
    }
    render(){
        return (
            <div className="OrderList">
                <Title title="订单详情" />
                <div className="contentWrapper" ref="orderContent">
                    <div className="content">
                        <div className="order-list-wrapper">
                            <ul className="order-list">
                                {this.state.OrderList.map((orderItem,index)=>{
                                return <li className="order-item" key={index}>
                                           <OrderOptions againOrder={this.againOrder} orderItem={orderItem}/>
                                      </li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderList;