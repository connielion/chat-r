import React, { Component } from 'react';

export default class SendMsgForm extends Component {
  render() {
    return (
      <div className="sendmsgform">
        { this.props.children }
      </div>
    )
  }
}
