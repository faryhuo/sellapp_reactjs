import React from 'react';

import 'component/SellerList/SellerList.styl';


import SellerFilter from 'component/SellerFilter/SellerFilter.jsx';
import SellerListOption from 'component/SellerListOption/SellerListOption.jsx';

import {observer} from 'mobx-react';

@observer
class SellerList extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className="SellerList">
                    <div className="title">
                            <div className="line"></div>
                            <div className="text">商家列表</div>
                            <div className="line"></div>
                    </div>
                    <SellerFilter SellerListStore={this.props.SellerListStore}/>
                    <div className="seller-list-wrapper" ref="sellerListWrapper">
                        <ul>
                            {this.props.SellerListStore.sellerList.map((Seller,i)=>{
                              return  <li key={i} className="seller-list-item">
                                 <SellerListOption Seller={Seller}/>
                               </li>
                            })}
                        </ul>
                    </div>
            </div>
                
        );
    }
}

export default SellerList;