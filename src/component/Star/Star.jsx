import React from 'react';

import 'component/Star/Star.styl'

const LENGTH=5;
const CLS_ON='on';
const CLS_HALF='half';
const CLS_OFF='off';

class Star extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
        this.state.starType=this.starType();
        this.state.itemClasses=this.itemClasses();
    }
    componentWillMount(){
    }
    componentWillUpdate(){
       this.state.starType=this.starType();
       this.state.itemClasses=this.itemClasses();
    }

    starType(){
        return 'star-'+this.props.size;
    }
    itemClasses(){
        let result=[];
        let score=Math.floor(this.props.score*2)/2;
        let hasDecimal=score % 1 !==0;
        let integer=Math.floor(score);
        for(let i=0;i<integer;i++){
            result.push(CLS_ON);
        }
        if(hasDecimal){
            result.push(CLS_HALF);
        }                
        while(result.length<LENGTH){
            result.push(CLS_OFF);
        }
        return result;
    }



    render(){
        return (
            <div className={"Star "+this.state.starType}>
                    {this.state.itemClasses.map((itemClass,i) => {
                      return <span  key={i} className={"star-item "+itemClass}></span>
                    })}
             </div>
        );
    }
}

export default Star;