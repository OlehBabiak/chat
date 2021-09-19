import React from 'react';
import ChatMessageTitle from "../ChatUsers/ChatMessageTitle";
import ChatMessages from "../ChatUsers/ChatMessages";
import ChatMessageForm from "../ChatUsers/ChatMessageForm";

function Chat() {
    return (
        <div>
            <ChatMessageTitle/>
            <ChatMessages/>
            <ChatMessageForm/>
        </div>
    );
}

export default Chat;