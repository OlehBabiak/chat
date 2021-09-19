import React, {useContext, useEffect, useState} from 'react';
import Context from "../context/Context";

function ChatMessageForm() {

    const {
        userMessagesList,
        setUserMessegesList,
        userMessage,
        setUserMessage,
        fetchData
    } = useContext(Context)

    const titleChangeHandler = (e) => {
        setUserMessage(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setUserMessegesList([...userMessagesList, userMessage])
        setUserMessage('')
    }

    useEffect(() => {
        fetchData()
        setUserMessage('')
    }, [userMessagesList]);

    return (
        <div>
            <form onSubmit={submitHandler}>
                <textarea
                    value={userMessage}
                    onChange={titleChangeHandler}/>
                {<button type='submit'>Send</button>}
            </form>
        </div>
    );
}

export default ChatMessageForm;