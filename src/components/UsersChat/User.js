import React from 'react';
import {
    DateWrapper,
    DialogSubTitle,
    DialogTitle,
    UserContentWrapper,
    UserImageWrapper,
    UserNameWrapper,
    UserWrapper
} from "./UserStyled";
import MessageDate from "../Chat/message/MessageDate";

const User = (props) => {
    let message = props.user.messages
    let mes = ''
    let txt = ''
    for (let i = 0; i < message.length; i++) {
        mes = message[message.length - 1].date;
        txt = message[message.length - 1].text
    }

    return (
        <UserWrapper>
            <UserImageWrapper src={props.user.avatar} alt='avatar'/>
            <UserContentWrapper>
                <DialogTitle>
                    <UserNameWrapper>{props.user.name}</UserNameWrapper>
                    <DateWrapper>
                        <MessageDate date={mes}/>
                    </DateWrapper>
                </DialogTitle>
                <DialogSubTitle><span>{txt}</span></DialogSubTitle>
            </UserContentWrapper>
        </UserWrapper>
    );
}

export default User;