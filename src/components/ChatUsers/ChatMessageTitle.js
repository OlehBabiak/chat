import React, {useContext} from 'react';
import Context from "../context/Context";
import {useParams} from 'react-router-dom'

function ChatMessageTitle() {
    const {id} = useParams()

    const {userArray} = useContext(Context)

    return (
        <div>
            {
                userArray.filter(value => value.id.toString() === id.slice(1)).map(user => <p>{user.name}</p>)
            }
        </div>
    );
}

export default ChatMessageTitle;