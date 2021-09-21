import React from 'react';

function MessageDate(props) {
    const time = props.date.toLocaleString('en-En');
    return    (<div>
        <div>{time}</div>
    </div>)
}

export default MessageDate;