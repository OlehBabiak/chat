import React from 'react';
import MessageDate from ".//MessageDate"
import {UserTextContainer, UserTextWrapper, DateWrapper} from "../ChatStyled";

function UserText(props) {
    return (
        <UserTextContainer>
            <UserTextWrapper>
                <div>{props.msg.text}</div>
                <DateWrapper>
                    <MessageDate date={props.msg.date}/>
                </DateWrapper>
            </UserTextWrapper>
        </UserTextContainer>
    );
}

export default UserText;