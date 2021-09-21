import React from 'react';
import ChatMessageTitle from "../ChatUsers/ChatMessageTitle";
import ChatMessages from "../ChatUsers/ChatMessages";

function Chat() {
    return (
        <div>
            <ChatMessageTitle/>
            <ChatMessages/>
        </div>
    );
}

export default Chat;