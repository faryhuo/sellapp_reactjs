import React from 'react';

import 'component/GoodList/GoodList.styl'

import CartControl from  'component/CartControl/CartControl.js'

import BScroll from 'better-scroll';
import {observer} from 'mobx-react';

@observer
class GoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listHeight: [],
      scrollY: 0,
      classMap: {
        0: "decrease",
        1: "discount",
        2: "guarantee",
        3: "invoice",
        4: "special"
      },
      selectedFood: null
    }
  }
  componentWillMount() {
  }

  componentDidMount() {
    this._initScroll();
    this._calculateHeight();
  }

  componentWillUpdate() {
    this._initScroll();
  }
  componentWillReceiveProps(){
  }
  
  componentWillUnmount(){
    if(this.state.foodsScroll){
      this.state.foodsScroll.destroy();
      this.state.foodsScroll=null;
    }
  }

  _initScroll() {
    if(!this.state.menuScroll){
        this.state.menuScroll = new BScroll(this.refs.menuWrapper, { useTransition: true, click: true });
    }else{
      this.state.menuScroll.refresh();
    }
    if(!this.state.foodsScroll){
      this.state.foodsScroll = new BScroll(this.refs.foodsWrapper, { probeType: 3, useTransition: true, click: true });
      this.state.foodsScroll.on("scroll", (pos) => {
        this.props.store.changeGoodPositionY(Math.abs(Math.round(pos.y)));
      });
    }else{
      this.state.foodsScroll.refresh();
    }
  }
  _calculateHeight() {
    let foodList = this.refs.foodsWrapper.getElementsByClassName("food-list-hook");
    let height = 0;
    let listHeight=[]
    listHeight.push(height);
    for (let i = 0; i < foodList.length; i++) {
      let item = foodList[i];
      height += item.clientHeight;
      listHeight.push(height);
    }
    this.props.store.changeListHeight(listHeight)
  }

  selectMenu(index,$event){
    // if(!$event._constructed){
    //     return;
    // }
    console.log("selectMenu");
    let foodList=this.refs.foodsWrapper.getElementsByClassName("food-list-hook");
    let element=foodList[index];
    this.state.foodsScroll.scrollToElement(element,300);
    
  }

  selectedFood(good) {
    this.props.store.setSelectGood(good);
    this.props.store.setIsShowDetailPage(true);

  }
  render() {
    return (
      <div className="GoodList">
        <div className="menu-wrapper" ref="menuWrapper">
          <ul>
            {
              this.props.store.goods.map((good, index) => {
                return <li key={index} onClick={(e)=>{this.selectMenu(index,e)}}
                  className={"menu-item " + (this.props.store.currentIndex === index ? 'current' : '')} >
                  <span className="text border-1px">
                    {good.type > 0 &&  <span className={"icon " + this.state.classMap[good.type]}></span>}
                    {good.name}
                  </span>
                </li>;
              })
            }
          </ul>
        </div>
        <div className="foods-wrapper" ref="foodsWrapper">
          <ul>
            {
              this.props.store.goods.map((item, index) => {
                return <li className="food-list food-list-hook" key={index}>
                  <h1 className="title">{item.name}</h1>
                  <ul>
                    {item.foods.map((food, foodIndex) => {
                      return <li   className="food-item border-1px" key={foodIndex}>
                        <div className="icon" onClick={(e)=>{this.selectedFood(food)}} ><img src={food.icon} width="100%" height="100%" alt="" /></div>
                        <div className="content">
                          <h2 className="name">{food.name}</h2>
                          <p className="desc">{food.description}</p>
                          <div className="extra">
                            <span className="count">月售{food.sellCount}份</span>
                            <span>好评率{food.rating}%</span>
                          </div>
                          <div className="price">
                            <span className="now">￥{food.price}</span>
                            {food.oldPrice && <span className="old" >￥{food.oldPrice}</span>}
                          </div>
                          <div className="cart-control-wrapper">
                             <CartControl cart={food} store={this.props.shopCartStore}></CartControl>    
                          </div>
                        </div>
                        </li>
                    })
                    }
                  </ul>
                </li>;
              })
            }

          </ul>
        </div>
      </div>
    );
  }
}

export default GoodList;