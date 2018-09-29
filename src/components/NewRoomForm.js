import React, { Component } from 'react';

export default class NewRoomForm extends Component {
  render() {
    return (
      <div className="newroomform">
        { this.props.children }
      </div>
    )
  }
}
