import React from 'react';
import MessageDate from ".//MessageDate"

function UserText(props) {
    console.log(props)
    return (
        <div>
            <div>User: {props.msg.text}</div>
            <MessageDate date={props.msg.date}/>
        </div>
    );
}

export default UserText;