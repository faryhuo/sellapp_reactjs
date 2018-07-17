import React from 'react';

import 'component/RatingContent/RatingContent.styl'
import { observer } from 'mobx-react';
import Star from 'component/Star/Star.jsx';

import * as DateOperator from '@/common/js/date.js';

@observer
class RatingContent extends React.Component {
    constructor(props) {
        super(props);
        this.ratingStore=this.props.store;
    }
    componentWillMount() {
    }
    formatDate(time) {
        let date = new Date(time);
        return DateOperator.formatDate(date, 'yyyy/MM/dd hh:mm');
    }

    render() {
        return (
            <div className="rating-wrapper">
            <ul>
                {this.ratingStore.ratingContent.map((rating, index) => {
                    return <li key={index} className="rating-item border-1px">
                        <div className="avatar">
                            <img src={rating.avatar} width="28" height="28" alt="" />
                        </div>
                        <div className="content">
                            <h1 className="name">{rating.username}</h1>
                            <div className="star-wrapper">
                                <Star size="24" score={rating.score} ></Star>
                                <span className="delivery">{rating.deliveryTime}</span>
                            </div>
                            <div className="text">{rating.text}</div>
                            {rating.recommend && 
                            <div className="recommend">
                                <i className="icon-thumb_up"></i>
                                {rating.recommend.map((recommend, recommendIndex) => {
                                    <span key={recommendIndex} className="item">{recommend}</span>
                                })}
                            </div>
                            }
                            <div className="time">{this.formatDate(rating.rateTime)}</div>
                        </div>
                    </li>
                })}
            </ul>
        </div >
        );
    }
}

export default RatingContent;