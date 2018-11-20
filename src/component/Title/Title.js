import React from 'react';

import 'component/Title/Title.styl'

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
       // document.title = "Place Bond Order";
    }
    render(){
        return (
            <div className="Title">
                <h1 className="title">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default Header;