import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

class Form extends Component{
  onSubmit(){
    var data = {
      'name': $('input[name="name"]').val(),
      'amount':$('input[name="number"]').val(),
      'note': $('input[name="note"]').val()
    }
    
    if($('input[name="name"]').val()!==''){
      $.ajax({
        type: "post",
        url: "/form",
        data: data,
        dataType:'JSON'
      }).done((orderinfos) => {
        this.props.fetchPosts(orderinfos.infos);
      });
    }else{
      alert('please fill the name')
    }

    $('input[name="name"]').val('');
    $('input[name="number"]').val(0);
    $('input[name="note"]').val('');
  }

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
            <button type="button" className='btn btn-primary' 
              onClick={this.onSubmit.bind(this)}>訂購</button>
          </form>

          <hr />
          <span></span>
        </div>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts: fetchPosts },dispatch);
}

export default connect(mapDispatchToProps)(Form);