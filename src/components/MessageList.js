import React, { Component } from 'react';

const DATA = [
  {
    senderID: 'connie',
    txt: 'Hi'
  }, 
  {
    senderID: 'sunny',
    txt: 'Hello'
  }
];

export default class MessageList extends Component {
  render() {
    return (
      <div className="messagelist">
        { 
          DATA.map((message, index)=>{
            return (
              <div className="message" key={index}>
                <div className="message-username">{message.senderID}: </div>
                <div className="message-text">{message.txt}</div>
              </div>
            )
          })
         }
      </div>
    )
  }
}
