import * as React from 'react';
import {useContext} from "react";
import Context from "../context/Context";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import {InputMessages} from "./ChatStyled";
import {useParams} from "react-router-dom";


function ChatMessageForm() {
    const {id} = useParams()
    const {
        userMessage,
        setUserMessage,
        fetchData,
        setUserArray,
        addMessageFunction,
        userArray,
        upContactsWithNewMsgFunction
    } = useContext(Context)

    const titleChangeHandler = (e) => {
        setUserMessage(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setUserArray(addMessageFunction(userArray, userMessage, id, 'user'))
        setUserArray(upContactsWithNewMsgFunction(id, userArray))
        setUserMessage("")
        setTimeout(() => fetchData(id), 2000)
    }

    return (
        <InputMessages>
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%'}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Type your message..."
                    onChange={titleChangeHandler}
                    value={userMessage}
                />
                <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                {userMessage.length > 0 && <IconButton onClick={submitHandler} sx={{p: '10px'}} aria-label="search">
                    <SendIcon/>
                </IconButton>}
            </Paper>
        </InputMessages>
    );
}

export default ChatMessageForm;