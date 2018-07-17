import React from 'react';

import 'component/Header/header.styl'

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
    }
    render(){
        return (
            <div className="row header">
                <div className="col-md-12">
                </div>
            </div>
        );
    }
}

export default Header;