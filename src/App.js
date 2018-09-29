import React from 'react';
import MessageList from './components/MessageList';
import SendMsgForm from './components/SendMsgForm';
import ChannelList from './components/ChannelList';
import NewRoomForm from './components/NewRoomForm';

import Chatkit from '@pusher/chatkit';
import { instanceLocator } from './config';


class App extends React.Component {
    // chatkit
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager(
            {
            // connect to this chatkit instance:
            instanceLocator,
            userId: 'clai011',
            tokenProvider: new Chatkit.tokenProvider({ 
                // testing only
                url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/05a7b6d2-db7b-4e5e-bf5d-a355d0c4f14d/token';
            })
        }
        )
    }

    render() {
        return (
            <div className="app">
                <ChannelList />
                <MessageList />
                <SendMsgForm />
                <NewRoomForm />
            </div>
        );
    }
}

export default App