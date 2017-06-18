import React, { Component } from 'react';
import { Link } from 'react-router';

import Form from '../containers/order-form';
import List from '../containers/order-list';

export default class Order extends Component{
    render(){
        return(
            <div className='order-side row'>
                <Form />
                <List />
                <Link to='/' className='back'>回到主頁</Link>
            </div>
        );
    }
}