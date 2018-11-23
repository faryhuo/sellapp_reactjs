import React from 'react';

import 'component/SellerDetailHeader/SellerDetailHeader.styl'

import BulletinDetail from 'component/BulletinDetail/BulletinDetail.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { NavLink } from 'react-router-dom';
class SellerDetailHeader extends React.Component {
    constructor(props) {
        super(props);
        this.classMap = {
            0: "decrease",
            1: "discount",
            2: "guarantee",
            3: "invoice",
            4: "special"
        }
        this.state = {
            isShowBulletin: false
        }
        this.seller = this.props.store.data;
    }
    hideDetail() {
        this.setState({ isShowBulletin: false });
    }
    showDetail() {
        this.setState({ isShowBulletin: true });
    }

    componentWillMount() {
    }

 

    render() {
        return (
            <div className="SellerDetailHeader ">
                <NavLink to="/SellerList/home" >
                    <div className="back-btn" >
                        <i className="material-icons">chevron_left</i>
                    </div>
                </NavLink>
                <div className="content-wrapper">
                    <div className="avatar">
                        <img src={this.seller.icon} width="64" height="64" alt="" />
                    </div>
                    <div className="content">
                        <div className="title">
                            <span className="brand"></span>
                            <span className="name">{this.seller.name}</span>
                        </div>
                        <div className="description">
                            {this.seller.description}/{this.seller.deliveryTime}分钟送达时
                            </div>
                        {this.seller.supports ? <div className="supper">
                            <span className="icon" className={this.classMap[this.seller.supports[0].type]}></span>
                            <span className="text">{this.seller.supports[0].description}</span>
                        </div> : ""
                        }
                    </div>
                    {
                        this.seller.supports ? <div className="support-count" onClick={(e) => { this.showDetail(e) }} >
                            <span className="count">
                                {this.seller.supports.length}个
                            <i className="icon-keyboard_arrow_right"></i>
                            </span>
                        </div> : ""
                    }
                </div>
                <div className="bulletin-wrapper">
                    <span className="bulletin-title"></span><span className="bulletin-text">{this.seller.bulletin}</span>
                    <i className="icon-keyboard_arrow_right"></i>
                </div>
                <div className="background">
                    <img src={this.seller.avatar} width="100%" height="100%" />
                </div>
                <ReactCSSTransitionGroup
                    transitionName="slide-fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        this.state.isShowBulletin && <BulletinDetail seller={this.seller} hideDetail={this.hideDetail.bind(this)} classMap={this.classMap} />
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default SellerDetailHeader;