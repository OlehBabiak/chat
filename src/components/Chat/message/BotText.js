import React from 'react';
import MessageDate from ".//MessageDate"
import {BotTextWrapper, DateWrapper} from "../ChatStyled";

function BotText(props) {
    console.log(props)
    return (
        <div>
            <BotTextWrapper>
                <div>{props.msg.text}</div>
                <DateWrapper>
                    <MessageDate date={props.msg.date}/>
                </DateWrapper>
            </BotTextWrapper>
        </div>
    );
}

export default BotText;