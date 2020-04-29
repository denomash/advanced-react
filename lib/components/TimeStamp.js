import React, { Component } from 'react';
import StoreProvider from './StoreProvider';

class TimeStamp extends Component {
  timeDisplay = (timeStamp) =>
    timeStamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

  shouldComponentUpdate(nextProps, nextState) {
    const currentTimeDisplay = this.timeDisplay(this.props.timeStamp);

    const nextTimeDisplay = this.timeDisplay(nextProps.timeStamp);


    return currentTimeDisplay !== nextTimeDisplay;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Updating Timestamp');
  }

  render() {
    return <div>{this.timeDisplay(this.props.timeStamp)}</div>;
  }
}

function extraProps(store) {
  return {
    timeStamp: store.getState().timeStamp,
  };
}

export default StoreProvider(extraProps)(TimeStamp);
