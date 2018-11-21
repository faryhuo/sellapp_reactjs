import React from 'react';

import 'component/SellerSearch/SellerSearch.styl'
import SellerListStore from 'store/SellerListStore.js';

import {observer} from 'mobx-react';

@observer
class SellerSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            position:"珠海"
        }
    }
    componentWillMount(){
    }
    componentDidMount(){
        
    let geolocation = new BMap.Geolocation();
    let geoc = new BMap.Geocoder();    
    let self=this;


    geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            let pt = r.point;
            console.log(r)
            geoc.getLocation(pt, function(rs){
                console.log(rs)
                let addComp = rs.addressComponents;
			    //alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
                let position=addComp.street?addComp.street:addComp.district;
                if(!position){
                    position=addComp.city?addComp.city:addComp.province;
                }
                self.setState({position:position});
            });   
        } else {
            alert('failed' + this.getStatus());
        }
    }, {
        enableHighAccuracy: true
    })
    }

    search(event){
        if(event.key==="Enter"){
           return this.props.SellerListStore.changeFilterType(SellerListStore.filterType.name);
        }
    }

    render(){
        return (
                <div className="SellerSearch">
                    <div className="position">
                        <div className="icon">
                        <i className="material-icons">place</i>
                        </div>
                        <div className="text">{this.state.position}</div>
                        <div className="icon">
                        <i className="material-icons">keyboard_arrow_right</i>
                        </div>
                    </div>
                    <div className="search">
                        <div className="icon"
                         onClick={(e)=>this.props.SellerListStore.changeFilterType(SellerListStore.filterType.name)}>
                        <i className="material-icons">search</i>
                        </div>
                        <div className="input">
                            <input type="text" name="filterByName"  onKeyPress={(e)=>{this.search(e)}}/>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SellerSearch;