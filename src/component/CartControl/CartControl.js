import React from 'react';

import 'component/CartControl/CartControl.styl'
import {observer} from 'mobx-react';

@observer
class CartControl extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }

    getCount(){
        for(let i=0;i<this.props.store.selectedFoods.length;i++){
            if(this.props.cart.name==this.props.store.selectedFoods[i].name){
                return this.props.store.selectedFoods[i].count;
            }
        }
        return 0;
    }

    render(){
        return (
            <div className="CartControl">
                {this.getCount()>0 &&
                <div className="cart-decrease"  onClick={(e)=>{this.props.store.decreaseFood(this.props.cart);}}>
                    <i className="inner icon-remove_circle_outline"></i>
                </div> 
                }
                {
                this.getCount()>0 &&                   
                <div className="cart-count">
                    {this.getCount()}
                </div>
                }
                <div className="cart-add" onClick={(e)=>{this.props.store.addFood(this.props.cart);}}>
                    <i className="icon-add_circle"></i>
                </div>       
            </div>
        );
    }
}

export default CartControl;