import React, {useContext} from 'react';
import Context from "../context/Context";
import {useParams} from 'react-router-dom'
import {ChatTitle} from "./ChatStyled";
import {UserImageWrapper} from "../UsersChat/UserStyled";

function ChatMessageTitle() {
    const {id} = useParams()
    const {userArray} = useContext(Context)
    const checkedUser = userArray.find(value => value.id.toString() === id.slice(1))

    return (
        <>
            <ChatTitle key={checkedUser.id}>
                <UserImageWrapper
                    src={checkedUser.avatar}/>
                <p>{checkedUser.name}</p>
            </ChatTitle>
        </>
    );
}

export default ChatMessageTitle;