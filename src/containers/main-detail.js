import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmperorDetail extends Component {
  render() {
    if (!this.props.emperor) {
      return (
        <div className='col-md-8 col-ms-8'>
          <div className='detail-title'>詳細資訊</div>
          <div className='detail'>點擊左側欄位查看</div>
        </div>
      );
    }

    return (
      <div className='col-md-8 col-ms-8'>
        <div className='detail-title'>詳細資訊</div>
        <div className='detail' >
          <h3>帝王: {this.props.emperor.name}</h3>
          <hr color="#000" size="3" />
          <br />
          <div>年號: {this.props.emperor.year}</div>
          <div>諡號: {this.props.emperor.title}</div>
          <div>在位: {this.props.emperor.reign}</div>
          <div>陵寢: {this.props.emperor.mound}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    emperor: state.activeEmperor
  };
}

export default connect(mapStateToProps)(EmperorDetail);
