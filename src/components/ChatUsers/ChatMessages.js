import React, {useContext} from 'react';
import Context from "../context/Context";
import BotText from "./BotText";
import UserText from "./UserText";
import ChatMessageForm from "./ChatMessageForm";
import {useParams} from "react-router-dom";

function ChatMessages() {
    const {id} = useParams()

    const {
        userMessagesList,
    } = useContext(Context)

    return (
        <>
            <div style={{height: '200px', width: '200px', background: "yellow"}}>
                {userMessagesList.map(message =>
                    message.type === 'user' ?
                        <UserText msg={message}/> :
                        <BotText msg={message}/>
                )}
            </div>
            <ChatMessageForm/>
        </>

    );
}

export default ChatMessages;