import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import BotText from "./message/BotText";
import UserText from "./message/UserText";
import {MessageField} from "./ChatStyled";
import {useParams} from "react-router-dom";

function ChatMessages() {
    const {id} = useParams()
    const {
        userArray,
    } = useContext(Context)

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(userArray))
    }, [userArray]);


    return (
        <>
            <MessageField>
                {userArray.map(user =>
                    user.id.toString() === id.slice(1) &&
                    user.messages.map(message =>
                        message.type === 'user' ?
                            <UserText key={message.date} msg={message}/> :
                            <BotText key={message.date}  msg={message}/>
                    )
                )}
            </MessageField>
        </>
    );
}

export default ChatMessages;