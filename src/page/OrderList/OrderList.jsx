import React from 'react';

import 'page/OrderList/OrderList.styl'
import Title from 'component/Title/Title.jsx'
import OrderOptions from 'component/OrderOptions/OrderOptions.jsx'
import BScroll from 'better-scroll';

class OrderList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            OrderList:[{
                seller:{
                    name:"蓝冰样",
                    icon:"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
                },
                status:"订单已完成"
                ,
                goods:[{
                    name:"品肠",
                    count:1
                }],total:34.5
            },{
                seller:{
                    name:"蓝冰样",
                    icon:""
                },
                status:"订单已完成"
                ,
                goods:[{
                    name:"品肠",
                    count:1
                }],total:34.5
            },{
                seller:{
                    name:"蓝冰样",
                    icon:""
                },
                status:"订单已完成"
                ,
                goods:[{
                    name:"品肠",
                    count:1
                }],total:34.5
            },{
                seller:{
                    name:"蓝冰样",
                    icon:""
                },
                status:"订单已完成"
                ,
                goods:[{
                    name:"品肠",
                    count:1
                }],total:34.5
            }]
        }
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
                                           <OrderOptions orderItem={orderItem}/>
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