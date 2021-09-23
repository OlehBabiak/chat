import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {useContext} from "react";
import Context from "../context/Context";
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

export default function SearchField() {

    const {
        searchChangeHandler,
        userSearch,
        cleanSearchField
    } = useContext(Context)

    return (
        <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search or start new chat"
                onChange={searchChangeHandler}
                value={userSearch}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={cleanSearchField} sx={{ p: '10px' }} aria-label="search">
                <ClearSharpIcon />
            </IconButton>
        </Paper>
    );
}