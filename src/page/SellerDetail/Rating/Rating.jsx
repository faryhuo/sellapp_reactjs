import React from 'react';
import PropTypes from 'prop-types';

import './Rating.styl'
import RatingSelect from 'component/RatingSelect/RatingSelect.jsx';
import RatingContent from 'component/RatingContent/RatingContent.jsx';

import Split from 'component/Split/Split.jsx';
import Star from 'component/Star/Star.jsx';
import RatingStore from 'store/RatingStore.js'

import * as DateOperator from '@/common/js/date.js';
import BScroll from 'better-scroll';

let ratingStore = new RatingStore();
import { observer } from 'mobx-react';

@observer
class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.seller = this.props.store.data;
    }


    componentWillMount() {
    }

    componentDidMount() {
        this.initScroll();
    }
    componentWillUnmount() {
        if (this.scroll){
            this.scroll.destroy();
            this.scroll=null;
        }
    }
    
    componentWillUpdate() {
    }
    initScroll() {
        setTimeout(() => {
            if (!this.scroll) {
                this.scroll = new BScroll(this.refs.ratings, { useTransition: true, click: true });
            } else {
                this.scroll.refresh();
            }
        }, 0)
    }
    render() {
        return (
            <div className="Rating" ref="ratings">
                <div className="ratings-content">
                    <div className="overview">
                        <div className="overview-left">
                            <div className="score">{this.seller.score}</div>
                            <div className="title">综合评分</div>
                            <div className="rank">高于周边商家{this.seller.rankRate}</div>
                        </div>
                        <div className="overview-right">
                            <div className="score-wrapper">
                                <span className="title">服务态度</span>
                                <Star score={this.seller.serviceScore} size="36"></Star>
                                <span className="score">{this.seller.serviceScore}</span>
                            </div>
                            <div className="score-wrapper">
                                <span className="title">商品评分</span>
                                <Star score={this.seller.foodScore} size="36"></Star>
                                <span className="score">{this.seller.foodScore}</span>
                            </div>
                            <div className="delivery-wrapper">
                                <span className="title">送达时间</span>
                                <span className="delivery">{this.seller.deliveryTime} 分钟</span>
                            </div>
                        </div>
                    </div>
                    <Split></Split>
                    <RatingSelect store={ratingStore}></RatingSelect>
                    <RatingContent store={ratingStore}/>
                </div>
            </div>
        )
    }
}
Rating.propTypes = {
    store: PropTypes.object.isRequired
};
export default Rating;