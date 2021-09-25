import React, {useState} from 'react';
import Context from "./Context";
import {InitialUserArray} from "../constants"
import url from "../notification/u_edomlenie-9.mp3"

function ContextProvider({children}) {

    const getLocalItem = () => {
        const list = localStorage.getItem('users')
        if (list) {
            return JSON.parse(localStorage.getItem('users'))
        } else {
            return InitialUserArray
        }
    }

    const [userMessage, setUserMessage] = useState('');
    const [error, setError] = useState();
    const [userSearch, setUserSearch] = useState('');
    const [userArray, setUserArray] = useState(getLocalItem())

    const cleanSearchField = () => {
        setUserSearch('')
    }

    const searchChangeHandler = (e) => {
        setUserSearch(e.target.value)
    }

    const [audio] = useState(new Audio(url))

    const addMessageFunction = (state, value, id, userStatus) => {
        const arrCopy = [...state];
        const user = arrCopy.find(user => user.id.toString() === id.slice(1))
        user.messages.push({text: value, type: userStatus, date: new Date()})
        return arrCopy
    }

    const upContactsWithNewMsgFunction = (n, state) => {
        const arrCopy = [...state];
        arrCopy.unshift(...arrCopy.splice(n,1))
        return arrCopy
    }

    const fetchData = async (id) => {
        const ContactWithNewMsgNumber = parseInt(id.slice(1)) - 1
        console.log(typeof (xxx))
        try {
            const resp = await fetch('https://api.chucknorris.io/jokes/random')
            if (!resp.ok) {
                throw  Error('Unfortunately, could not fetch data...')
            } else {
                const json = await resp.json()
                const {value} = json
                setUserArray(addMessageFunction(userArray, value, id, 'bot'))
                audio.play()
                setUserArray(upContactsWithNewMsgFunction(ContactWithNewMsgNumber, userArray))
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <Context.Provider value={{
            fetchData,
            searchChangeHandler,
            cleanSearchField,
            addMessageFunction,
            upContactsWithNewMsgFunction,
            getLocalItem,
            setUserMessage,
            userMessage,
            userArray,
            userSearch,
            setUserArray,
            error
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;