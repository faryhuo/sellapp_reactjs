import React from 'react';

import 'component/RatingSelect/RatingSelect.styl'
import {observer} from 'mobx-react';

@observer
class RatingSelect extends React.Component{
    constructor(props){
        super(props);
        this.desc={
            all:'全部',
            positive:'满意',
            negative:'不满意'
        }
        this.RatingStore=this.props.store;
       
        this.positives=this.RatingStore.data.filter((rating)=>{
            return rating.rateType===0;
        });
        
        this.negatives =this.RatingStore.data.filter((rating)=>{
               return rating.rateType===1;
        });
        this.ratings=this.RatingStore.data;
        
    }
    componentWillMount(){
    }
    isOnlyContent(){
       this.RatingStore.setIsOnlyContent(!this.RatingStore.isOnlyContent);
    }
    render(){
        return (
            <div className="RatingSelect">
                <div className="rating-type border-1px">
                    <span onClick={(e)=>{this.RatingStore.setRatingType(2)}} 
                    className={"block positive "+(this.RatingStore.ratingType===2?"active":"")} 
                    >{this.desc.all}<span className="count">{this.ratings.length}</span></span>
                    <span onClick={(e)=>{this.RatingStore.setRatingType(0)}} 
                    className={"block positive "+(this.RatingStore.ratingType===0?"active":"")} 
                    >{this.desc.positive}<span className="count">{this.positives.length}</span></span>
                    <span onClick={(e)=>{this.RatingStore.setRatingType(1)}} 
                    className={"block negative "+(this.RatingStore.ratingType===1?"active":"")} 
                    >{this.desc.negative}<span className="count">{this.negatives.length}</span></span>           
                </div>
                <div onClick={(e)=>{this.isOnlyContent(e)}} className={"switch "+(this.RatingStore.isOnlyContent?"on":"")} >
                    <i className="icon-check_circle"></i>
                    <span className="text">只看有内容的评价</span>
                </div>            
            </div>
        );
    }
}

export default RatingSelect;