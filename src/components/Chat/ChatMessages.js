import React, {useContext} from 'react';
import Context from "../context/Context";
import BotText from "./message/BotText";
import UserText from "./message/UserText";

function ChatMessages() {

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
        </>

    );
}

export default ChatMessages;