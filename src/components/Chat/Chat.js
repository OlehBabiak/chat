import React from 'react';
import ChatMessageTitle from "./ChatMessageTitle";
import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";

function Chat() {
    return (
        <>
            <ChatMessageTitle/>
            <ChatMessages/>
            <ChatMessageForm/>
        </>
    );
}

export default Chat;