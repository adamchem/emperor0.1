import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderBook, postOrder } from '../actions/index';
import { bindActionCreators } from 'redux';

class Form extends Component{

  render(){
    return (
      <div className='col-md-4 col-ms-4'>
        <div className='form'>
          <h1>訂單</h1>
          <hr />

          <form>
            <label for='name'>大名: &nbsp;</label>
            <input type='text' name='name' placeholder='周星馳?'/>
            <br />
            <label for='number'>數量: &nbsp;</label>
            <input type='number' name='number' min="0" max="10" />
            <br />
            <label for='note'>備註: &nbsp;</label>
            <input type='text' name='note'/>
            <br /><br />
            <button type="submit" className='btn btn-primary' onClick={() => {
              var book = 0;
              book = $('input[name="number"]').val();
              this.props.orderBook(book);
              this.props.postOrder({
                'name': $('input[name="name"]').val(),
                'amount':$('input[name="number"]').val(),
                'note': $('input[name="note"]').val()
              })
              }}>訂購</button>
          </form>

          <hr />
          <span>剩餘數量: {1000 - this.props.ordered}</span>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state){
    return{
        ordered: state.ordered
    }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ orderBook: orderBook, postOrder: postOrder },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);