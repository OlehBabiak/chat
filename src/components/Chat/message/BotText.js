import React from 'react';
import MessageDate from ".//MessageDate"

function BotText(props) {
    console.log(props)
    return (
        <div>
            <div>Bot: {props.msg.text}</div>
            <MessageDate date={props.msg.date}/>
        </div>
    );
}

export default BotText;