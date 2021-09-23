import React, {useState} from 'react';
import Context from "./Context";



function ContextProvider({children}) {

    const [userMessagesList, setUserMessegesList] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [error, setError] = useState();
    const [userSearch, setUserSearch] = useState('');
    const userArray = [
        {id:1, avatar: '', name: 'Alice Freman', messages: []},
        {id:2, name: 'Josefina', messages: []},
        {id:3, name: 'Velasquez', messages: []},
        {id:4, name: 'Barrera', messages: []},
        {id:5, name: 'Victoria', messages: []},
        {id:6, name: 'Cabanitos', messages: []}]


    const cleanSearchField = () => {
        setUserSearch('')
    }

    const searchChangeHandler = (e) => {
        setUserSearch(e.target.value)
    }

    const fetchData = async () => {
            try {
                const resp = await fetch('https://api.chucknorris.io/jokes/random')
                if (!resp.ok) {
                    throw  Error('Unfortunately, could not fetch data...')
                } else {
                    const json = await resp.json()
                    const {value} = json
                    setUserMessegesList(userMessagesList =>[...userMessagesList, {text: value, type: 'bot', date: new Date()}])
            }
            }catch (err) {
                setError(err.message)
            }
        }

    return (
        <Context.Provider value={{
            userMessagesList,
            setUserMessegesList,
            fetchData,
            setUserMessage,
            userMessage,
            userArray,
            searchChangeHandler,
            userSearch,
            cleanSearchField
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;