import React from 'react';

import 'component/SellerList/SellerList.styl';


import SellerFilter from 'component/SellerFilter/SellerFilter.js';
import SellerListOption from 'component/SellerListOption/SellerListOption.js';
import img from './img/rolling.svg';
import { observer } from 'mobx-react';

@observer
class SellerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPullDown:false,
            isPullUp:false,
            isNeedLoadData:false,
            isReload:false
        }
    }
    componentWillMount() {
        this.props.initScroll();
    }
    componentDidMount(){
        this.props.initScroll((contentWapperScroll)=>{
            contentWapperScroll.on("scroll",(pos)=>{
                let y=pos.y//-275
                if(y<=-275){
                   this.filterStatus=true;
                }else{
                   this.filterStatus=false;
                }
                let maxScrollY=contentWapperScroll.maxScrollY;
                if(y>=60){
                  this.state.isPullDown=true;
                  this.setState({isPullDown:true});
                }else{
                  if(this.state.isPullDown){
                      this.isPullDown=false;
                      //this.param.pageNum=1;
                      this.state.isReload=true;
                      this.state.isNeedLoadData=true;
                      this.setState({isPullDown:false,isReload:true,
                        isNeedLoadData:true});
                  }                        
                }
                if((maxScrollY-y)>=60){
                  this.state.isPullUp=true;
                  this.setState({isPullUp:true});
                }else{
                  if(this.state.isPullUp){
                      this.state.isPullUp=false;
                      this.state.isNeedLoadData=true;
                      this.setState({isPullUp:false,isNeedLoadData:true});
                  }
                }
            });
        });
       
    }
    render() {
        return (
            <div className="SellerList">
                <div className="title">
                    <div className="line"></div>
                    <div className="text">商家列表</div>
                    <div className="line"></div>
                </div>
                <SellerFilter SellerListStore={this.props.SellerListStore} />
                {this.state.isPullDown && 
                    <div className="scroller-pullup">
                        <img src={img} alt="" className="image" />
                        <span className="pull-up-msg">下拉刷新</span>
                    </div>
                    }
                <div className="seller-list-wrapper" ref="sellerListWrapper">
                    <ul>
                        {this.props.SellerListStore.sellerList.map((Seller, i) => {
                            return <li key={i} className="seller-list-item">
                                <SellerListOption Seller={Seller} />
                            </li>
                        })}
                    </ul>
                    {this.state.isPullUp && <div ref="PullUp" className="scroller-pullup" >
                        <img  src={img} alt="" className="image" />
                        <span className="pull-up-msg">上拉刷新</span>
                    </div>}
                </div>
            </div>

        );
    }
}

export default SellerList;