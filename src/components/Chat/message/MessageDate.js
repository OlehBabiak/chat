import React from 'react';

function MessageDate(props) {
    const time = props ? props.date.toLocaleString('en-En') : 'No Date';
    return (
            <>{time}</>
    )
}

export default MessageDate;