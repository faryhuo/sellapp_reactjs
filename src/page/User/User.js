import React from 'react';

import 'page/User/User.styl';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            User:{
                userName:"Fary",
                phoneNum:"137****8197"
              },
              servicePhone:"101-097-77",
              startServiceTime:"9:00",
              endServiceTime:"23:00"
        }
        document.title = "User Information";
    }
    componentWillMount(){
    }
    componentWillReceiveProps(){
    }
    componentDidMount(){
    }

    render(){
        let User=this.props.store;
        return (
            <div className="User">
            <header className="header">
              <h1 className="title">我的</h1>
            </header>
            <div className="userInfo">
              <div className="icon"></div>
              <div className="info">
                <div className="username">{this.state.User.userName}</div>
                <div className="phoneNum">{this.state.User.phoneNum}</div>
              </div>
            </div>
            <div className="money border-1px"><i className="icon material-icons">attach_money</i>
            <div className="text">美团红包</div></div>
            <div className="collectGoodsPosition border-1px"><i className="icon material-icons">place</i>
             <div className="text">我的收货地址</div></div>
            <div className="servicePhone"><i className="icon material-icons">phone</i>
                 <div className="text">客服电话：{this.state.servicePhone}</div>
                <span className="serviceTime">服务时间：{this.state.startServiceTime}-{this.state.endServiceTime}</span>
             </div>
     
             <div className="logout">
               <div className="text">
                 退出账号
               </div>
             </div>
        </div>
        );
    }
}

export default User;