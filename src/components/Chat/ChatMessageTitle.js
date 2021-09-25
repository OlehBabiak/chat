import React, {useContext} from 'react';
import Context from "../context/Context";
import {useParams} from 'react-router-dom'
import {ChatTitle} from "./ChatStyled";
import {UserImageWrapper} from "../UsersChat/UserStyled";

function ChatMessageTitle() {
    const {id} = useParams()
    const {userArray} = useContext(Context)

    return (
        <>
            {
                userArray.filter(value => value.id.toString() === id.slice(1)).map(user =>
                    <ChatTitle key={user.id}>
                        <UserImageWrapper
                            src={user.avatar}/>
                        <p>{user.name}</p>
                    </ChatTitle>)
            }
        </>
    );
}

export default ChatMessageTitle;