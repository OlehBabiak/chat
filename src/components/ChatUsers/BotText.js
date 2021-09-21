import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";
import MessageDate from "../ChatUsers/MessageDate"

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