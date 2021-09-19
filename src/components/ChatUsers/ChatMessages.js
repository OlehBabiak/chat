import React, {useContext} from 'react';
import Context from "../context/Context";

function ChatMessages() {
    const {
        userMessagesList,
    } = useContext(Context)


    console.log(userMessagesList)
    return (
        <div>
            <ul>
                {userMessagesList.map(message =>
                        <li>{message}</li>)
                }
            </ul>
        </div>
    );
}

export default ChatMessages;