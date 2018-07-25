import {observable, computed, action } from "mobx";


class SellerListStore{
  static filterType={
    name:1,
    sellCount:2,
    position:3,
    multiple:4,
    rating:5,
    other:6
  } 
  @observable filter={
    type:SellerListStore.filterType.multiple,
    value:""
  };
  @observable data=[{
    "id":1,
    "name":"粥品香坊（回龙观）",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  },{
    "id":1,
    "name":"111111",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  },{
    "id":1,
    "name":"222222",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  },{
    "id":1,
    "name":"333333",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  },{
    "id":1,
    "name":"44444",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  },{
    "id":1,
    "name":"55555",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  },{
    "id":1,
    "name":"66666",
    "icon":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
    "sellCount":4358,
    "deliveryTime":30,
    "minPrice":20,
    "deliveryPrice":3,
    "averagePrice":28,
    "score":4.5,
    "position":1.1,
    "desc":[{
      "type":1,
      "text":"折扣商品5.31折起"
    }]
  }];

  @computed
  get sellerList(){
    if(this.filter.type==SellerListStore.filterType.multiple){
       return this.data;
    }else{
        return this.data.filter((item,i)=>{
          return this.filterType>i;
        })
    }
  }

  @computed
  get filterType(){
    return this.filter.type;
  }

  @action
  changeFilterType(type){
    this.filter.type=type;
  }

}

export default SellerListStore;