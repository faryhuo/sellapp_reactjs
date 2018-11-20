import React from 'react';

import 'component/CategoryMenu/CategoryMenu.styl';
import { Carousel, WingBlank } from 'antd-mobile';

class CategoryMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorList: ["#e97874", "#a1c1f9", "#a9dc6a", "#f3b25c", "#f7d06b", "#f3b25c", "#84aef9", "#7fd1df"]
        };
    }
    componentWillMount() {
    }

    render() {
        return (
            <div className="CategoryMenu">
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        <div  className="menu-wrapper">
                            <ul>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[0] }}>
                                        <i className="material-icons">room_service</i>
                                    </div>
                                    <div className="text">美食</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[1] }}>
                                        <i className="material-icons">shopping_cart</i>
                                    </div>
                                    <div className="text" >美团超市</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[2] }}>
                                        <i className="material-icons">spa</i>
                                    </div>
                                    <div className="text">生鲜果蔬</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[3] }}>
                                        <i className="material-icons">free_breakfast</i>
                                    </div>
                                    <div className="text">下午茶</div>
                                </li>
                            </ul>
                            <div className="row-split"></div>
                            <ul>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[4] }}>
                                        <i className="material-icons">airport_shuttle</i>
                                    </div>
                                    <div className="text">外卖专送</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[5] }}>
                                        <i className="material-icons">account_balance</i>
                                    </div>
                                    <div className="text">正餐优选</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[6] }}>
                                        <i className="material-icons">restaurant</i>
                                    </div>
                                    <div className="text">快餐小吃</div>
                                </li>
                                <li className="menu-item last">
                                    <div className="icon" style={{ background: this.state.colorList[7] }}>
                                        <i className="material-icons">more</i>
                                    </div>
                                    <div className="text">全部商家</div>
                                </li>
                            </ul>

                        </div>
                       
                        <div  className="menu-wrapper">
                            <ul>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[0] }}>
                                        <i className="material-icons">room_service</i>
                                    </div>
                                    <div className="text">美食</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[1] }}>
                                        <i className="material-icons">shopping_cart</i>
                                    </div>
                                    <div className="text" >美团超市</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[2] }}>
                                        <i className="material-icons">spa</i>
                                    </div>
                                    <div className="text">生鲜果蔬</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[3] }}>
                                        <i className="material-icons">free_breakfast</i>
                                    </div>
                                    <div className="text">下午茶</div>
                                </li>
                            </ul>
                            <div className="row-split"></div>
                            <ul>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[4] }}>
                                        <i className="material-icons">airport_shuttle</i>
                                    </div>
                                    <div className="text">外卖专送</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[5] }}>
                                        <i className="material-icons">account_balance</i>
                                    </div>
                                    <div className="text">正餐优选</div>
                                </li>
                                <li className="menu-item">
                                    <div className="icon" style={{ background: this.state.colorList[6] }}>
                                        <i className="material-icons">restaurant</i>
                                    </div>
                                    <div className="text">快餐小吃</div>
                                </li>
                                <li className="menu-item last">
                                    <div className="icon" style={{ background: this.state.colorList[7] }}>
                                        <i className="material-icons">more</i>
                                    </div>
                                    <div className="text">全部商家</div>
                                </li>
                            </ul>

                        </div>
  
                    </Carousel>
                </WingBlank>

            </div>
        );
    }
}

export default CategoryMenu;