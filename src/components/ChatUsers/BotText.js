import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";

function BotText(props) {
    const {
        userMessagesList,
        fetchData
    } = useContext(Context)

    useEffect(() => {
        fetchData()
    }, [userMessagesList]);

    return (
        <div>
            {userMessagesList.map((message)=> message.answer)}
        </div>
    );
}

export default BotText;