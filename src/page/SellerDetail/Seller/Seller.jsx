import React from 'react';

import './Seller.styl';
import classNames from 'classNames';
import Star from 'component/Star/Star.jsx';
import Split from 'component/Split/Split.jsx';
import BScroll from 'better-scroll';

class Seller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descType: {
                0: "decrease",
                1: "discount",
                2: "guarantee",
                3: "invoice",
                4: "special"
            },
            favoriteText: "收藏"
        }

    }
    initScroll() {
        if (!this.scroll) {
            this.scroll = new BScroll(this.refs.seller, { useTransition: false, click: true });
        } else {
            this.scroll.refresh();
        }
    }
    initPicScroll() {
        let seller = this.props.store.data;
        if (seller.pics) {
            let picWidth = 120;
            let margin = 6;
            let width = (picWidth + margin) * seller.pics.length - margin;
            this.refs.picList.style.width = width + "px";
            if (!this.picScroll) {
                this.picScroll = new BScroll(this.refs.picWrapper, {
                    useTransition: false, scrollX: true,
                    eventPassthrough: 'vertical'
                });
            } else {
                this.picScroll.refresh();
            }
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        this.initScroll();
        this.initPicScroll();
    }
    componentWillUpdate() {
    }
    render() {
        let seller = this.props.store.data;
        console.log(seller)
        return (
            <div className="SellerInfo">
                <div className="seller" ref="seller">
                    <div className="seller-content">
                        <div className="overview">
                            <h1 className="title">{seller.name}</h1>
                            <div className="desc border-1px">
                                <Star size="36" score={seller.score} style={{display:"inline"}}></Star>
                                <span className="text">({seller.ratingCount})</span>
                                <span className="text">月售{seller.sellCount}单</span>
                            </div>
                            <ul className="remark">
                                <li className="block">
                                    <h2>起送价</h2>
                                    <div className="content">
                                        <span className="stress">{seller.minPrice}</span>元
                        </div>
                                </li>
                                <li className="block">
                                    <h2>商家配送</h2>
                                    <div className="content">
                                        <span className="stress">{seller.deliveryPrice}</span>元
                        </div>
                                </li>
                                <li className="block">
                                    <h2>评价配送时间</h2>
                                    <div className="content">
                                        <span className="stress">{seller.deliveryTime}</span>分钟
                        </div>
                                </li>
                            </ul>
                            <div className="favorite" >
                                <i className="icon-favorite"></i>
                                <span className="text">{this.state.favoriteText}</span>
                            </div>
                        </div>
                        <Split />
                        <div className="bulletin">
                            <h1 className="title">公告</h1>
                            <div className="content-wrapper border-1px">
                                <p className="content">{seller.bulletin}</p>
                            </div>
                            {
                                seller.supports &&
                                <ul className="supports">
                                    {
                                        seller.supports.map((item) => {
                                            return <li className="support-item border-1px" >
                                                <span className={classNames("icon", this.state.descType[item.type])}></span>
                                                <span className="text">{item.description}</span>
                                            </li>;
                                        })
                                    }
                                </ul>
                            }
                        </div >

                        <Split />
                        <div className="pics">
                            <h1 className="title">商家实景</h1>
                            <div className="pic-wrapper" ref="picWrapper">
                                <ul className="pic-list" ref="picList">
                                    {
                                        seller.pics.map((pic) => {
                                            return <li className="pic-item">
                                                <img src={pic} width="120" height="90" alt="" />
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        {seller.infos && <Split />}
                        {seller.infos &&
                            <div className="info">
                                <h1 className="title">商家信息</h1>
                                <ul>
                                    {
                                        seller.infos.map((info) => {
                                            return <li className="info-item">
                                                {info}
                                            </li>;
                                        })
                                    }

                                </ul>
                            </div>
                        }
                    </div >

                </div >
            </div >
        );
    }
}

export default Seller;