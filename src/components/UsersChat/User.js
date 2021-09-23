import React from 'react';
import {DateWrapper, DialogSubTitle, DialogTitle, UserImageWrapper, UserNameWrapper, UserWrapper} from "./UserStyled";

function User(props) {
    return (
        <UserWrapper>
            <UserImageWrapper src='https://s.ws.pho.to/img/index/ai/source.jpg' alt='avatar'/>
            <div>
                <DialogTitle>
                    <UserNameWrapper>{props.user.name}</UserNameWrapper>
                    <DateWrapper>{'21/07/21 21:45 PM'}</DateWrapper>
                </DialogTitle>
                <DialogSubTitle><span>{'Some message text fdggfgdgf fdgfdgdfgd ggdfgdfgdgdf dgdfgdfgdgd dfgdgdgdghghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'}</span></DialogSubTitle>
            </div>
        </UserWrapper>
    );
}

export default User;