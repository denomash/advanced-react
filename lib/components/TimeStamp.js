import React, { Component } from 'react';
import StoreProvider from './StoreProvider';

class TimeStamp extends Component {
  static timeDisplay = (timeStamp) =>
    timeStamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  render() {
    return <div>{this.props.timeStamp}</div>;
  }
}

function extraProps(store) {
  return {
    timeStamp: TimeStamp.timeDisplay(store.getState().timeStamp),
  };
}

export default StoreProvider(extraProps)(TimeStamp);
