import React, {useContext} from 'react';
import Context from "../context/Context";
import BotText from "./message/BotText";
import UserText from "./message/UserText";
import {MessageField} from "./ChatStyled";

function ChatMessages() {

    const {
        userMessagesList,
    } = useContext(Context)

    return (
        <>
            <MessageField>
                {userMessagesList.map(message =>
                    message.type === 'user' ?
                        <UserText msg={message}/> :
                        <BotText msg={message}/>
                )}
            </MessageField>
        </>

    );
}

export default ChatMessages;