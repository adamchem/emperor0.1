import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectEmperor } from '../actions/index';
import { bindActionCreators } from 'redux';

class EmperorList extends Component {
  renderList() {
    return this.props.emperors.map((emperor) => {
      return (
        <li
          key={emperor.name}
          onClick={() => {this.props.selectEmperor(emperor);}}
          className="list-group-item ">
          {emperor.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div className='col-md-4 col-sm-4'>
        <div className='list-title'>目錄</div>
        <ul className="emperor-list list-group">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    emperors: state.emperors
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed to all of our reducers
  return bindActionCreators({ selectEmperor: selectEmperor }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmperorList);
