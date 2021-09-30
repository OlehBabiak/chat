import React from 'react';

function MessageDate({date}) {
    const time = date? date.toLocaleString('en-En') : 'No Date';
    return (
            <>{time}</>
    )
}

export default MessageDate;