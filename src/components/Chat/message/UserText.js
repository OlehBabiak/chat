import React from 'react';
import {UserTextContainer, UserTextWrapper, DateWrapper} from "../ChatStyled";
import MessageDate from "./MessageDate";

function UserText({msg}) {
    return (
        <UserTextContainer>
            <UserTextWrapper>
                <div>{msg.text}</div>
                <DateWrapper>
                    <MessageDate date={msg.date}/>
                </DateWrapper>
            </UserTextWrapper>
        </UserTextContainer>
    );
}

export default UserText;