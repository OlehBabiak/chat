import React from 'react';
import ChatMessageTitle from "./ChatMessageTitle";
import ChatMessages from "./ChatMessages";
import ChatMessageForm from "./ChatMessageForm";

function Chat() {
    return (
        <div>
            <div>
                <ChatMessageTitle/>
            </div>
            <div>
                <ChatMessages/>
            </div>
            <div>
                <ChatMessageForm/>
            </div>
        </div>
    );
}

export default Chat;