import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

class OrderList extends Component{
    constructor(props){
        super(props);
        $.ajax({
            type: "get",
            url: "/form"
        }).done((orderinfos) => {
            this.props.fetchPosts(orderinfos.infos);
        });
    }

    List(){
        return this.props.orderInfos.map((info) => {
            return (
                <tr key={info._id}>
                    <td>*</td>
                    <td>{info.name}</td>
                    <td>{info.amount}</td>
                    <td>{info.note}</td>
                </tr>
            )
        });
    }
    
  render(){
    return (
      <div className='col-md-8 col-ms-8'>
          <div className='list'>
            <h1>訂購者</h1>
            <hr />

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>名字</th>
                        <th>數量</th>
                        <th>備註</th>
                    </tr>
                </thead>
                <tbody>
                    {this.List()}
                </tbody>
            </table>
          </div>
      </div>
    );
  }
};

function mapStateToProps(state){
    return{
        orderInfos: state.orderInfos
    };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
// export default OrderList;