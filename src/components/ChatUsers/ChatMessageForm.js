import React, {useContext} from 'react';
import Context from "../context/Context";

function ChatMessageForm() {

    const {
        userMessagesList,
        setUserMessegesList,
        userMessage,
        setUserMessage,
        fetchData,
    } = useContext(Context)

    const titleChangeHandler = (e) => {
        setUserMessage(e.target.value)
    }
    

    const submitHandler = (event) => {
        event.preventDefault()
        setUserMessegesList([...userMessagesList, {text: userMessage, type: 'user', date: new Date()}])
        setUserMessage("")
        setTimeout(() => fetchData(), 5000)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <textarea
                    value={userMessage}
                    onChange={titleChangeHandler}/>
                {userMessage.length > 0 && <button type='submit'>Send</button>}
            </form>
        </div>
    );
}

export default ChatMessageForm;