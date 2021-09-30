import React from 'react';
import {InitialUserArray} from "../constants"
import url from "../notification/u_edomlenie-9.mp3";

const getLocalItem = () => {
    const list = localStorage.getItem('users')
    if (list) {
        return JSON.parse(list)
    } else {
        return InitialUserArray
    }
}

export const initialState = {
    userMessage: '',
    userSearch: '',
    userArray: getLocalItem(),
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER_MESSAGE':
            return {...state, userMessage:e.target.value};
        case 'SET_USER_SEARCH':
            return
        case 'SET_USER_ARRAY':
            return
        default: return state
    }
}