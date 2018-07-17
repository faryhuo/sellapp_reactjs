import React from 'react';
import 'component/SellerFilter/SellerFilter.styl';
import SellerListStore from 'store/SellerListStore.js';
import classNames from 'classnames';

import {observer} from 'mobx-react';

@observer
class SellerFilter extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    getItemClass(type){
       return classNames("menu-item",{"active":(this.props.SellerListStore.filterType===type)});
    }

    changeFilterType(type){
        return this.props.SellerListStore.changeFilterType(type);
    }

    componentWillMount(){
    }

    render(){
        return (
            <div className="SellerFiler">
             <ul className="menu">
                <li onClick={(e)=>{this.changeFilterType(SellerListStore.filterType.multiple)}} 
                    className={this.getItemClass(SellerListStore.filterType.multiple)} >
                    <div className="text">综合排序<i className="icon material-icons">expand_more</i></div>               
                </li>
                <li onClick={(e)=>{this.changeFilterType(SellerListStore.filterType.sellCount)}}
                   className={this.getItemClass(SellerListStore.filterType.sellCount)}  >
                    <div className="text">销量最高</div>
                </li>
                <li onClick={(e)=>{this.changeFilterType(SellerListStore.filterType.position)}}
                className={this.getItemClass(SellerListStore.filterType.position)}  >
                    <div className="text">距离最近</div>
                </li>
                <li onClick={(e)=>{this.changeFilterType(SellerListStore.filterType.other)}}
                className={this.getItemClass(SellerListStore.filterType.other)}  >
                    <div className="text">筛选<i className="icon material-icons">filter_list</i></div>
                </li>
            </ul>      
         </div>
        );
    }
}

export default SellerFilter;