import React, { Component } from 'react';
import { connect } from 'react-redux';

class OrderList extends Component{
    // componentWillMount() {
    //     this.props.fetchPosts();
    // }
    /*List(){
        return this.props.ordereInfo.map((info) => {
            return (
                <tr key={info._id}>
                    <td>{info.name}</td>
                    <td>{info.amount}</td>
                    <td>{info.note}</td>
                </tr>
            )
        });
    }*/
    
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
                    {/*{this.List()}*/}
                </tbody>
            </table>
          </div>
      </div>
    );
  }
};

// function mapStateToProps(state) {
//   return {
//     orderInfos: state.orderInfos
//   };
// }

export default OrderList;