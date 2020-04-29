import React, { Component } from 'react';
import StoreProvider from './StoreProvider';

class TimeStamp extends Component {
  render() {
    return <div>{this.props.timeStamp.toString()}</div>;
  }
}

function extraProps(store) {
  return {
    timeStamp: store.getState().timeStamp,
  };
}

export default StoreProvider(extraProps)(TimeStamp);
