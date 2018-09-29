import React, { Component } from 'react';

export default class ChannelList extends Component {
  render() {
    return (
      <div className="channellist">
        { this.props.children }
      </div>
    )
  }
}
