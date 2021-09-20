import React, {useContext} from 'react';
import Context from "../context/Context";
import BotText from "./BotText";
import UserText from "./UserText";

function ChatMessages() {
    const {
        userMessagesList,
    } = useContext(Context)

    return (
        <div>
            {userMessagesList.map(message =>
                    // message.type === 'user' ?
                    //     <UserText text={message.text}/> :
                    //     <BotText text={message.text}/>
                <div>{message.text}</div>

            )}
        </div>
    );
}

export default ChatMessages;