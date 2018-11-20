import React from 'react';
import PropTypes from 'prop-types';
import 'component/BulletinDetail/BulletinDetail.styl'
import Star from 'component/Star/Star.js';

class BulletinDetail extends React.Component{
    constructor(props){
        super(props);
        this.seller=this.props.seller;
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className="BulletinDetail">
                <div className="bulletin-detail-wrapper clearfix">
                    <div className="bulletin-detail-main">
                         <h1 className="name">{this.seller.name}</h1>
                         <div className="star-wrapper">
                             <Star size="48" score={this.seller.score}></Star>
                         </div>
                         <div className="title">
                             <div className="line"></div>
                             <div className="text">优惠信息</div>
                             <div className="line"></div>
                         </div>
                         {this.seller.supports && 
                         <ul className="supports">
                           {this.seller.supports.map((item,index)=>{
                            return <li key={index} className="support-item" >
                                 <span className={"icon "+this.props.classMap[item.type]}></span>
                                 <span className="text">{item.description}</span>
                             </li>
                            })}
                         </ul>
                         }
                         <div className="title">
                             <div className="line"></div>
                             <div className="text">商家公告</div>
                             <div className="line"></div>
                         </div>
                         <div className="bulletin">
                             <p className="content">
                                 {this.seller.bulletin}
                             </p>
                         </div>
     
                    </div>
                </div>
                <div className="bulletin-detail-close" onClick={(e)=>{this.props.hideDetail(e)}}>
                    <i className="icon-close"></i>
                </div>
            </div>
        );
    }
}

BulletinDetail.propTypes = {
    seller: PropTypes.object.isRequired,
    classMap:PropTypes.object.isRequired,
    hideDetail:PropTypes.func.isRequired
};
export default BulletinDetail;