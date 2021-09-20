import React, {useState} from 'react';
import Context from "./Context";



function ContextProvider({children}) {

    const [userMessagesList, setUserMessegesList] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [error, setError] = useState();



    const fetchData = async () => {
            try {
                const resp = await fetch('https://api.chucknorris.io/jokes/random')
                if (!resp.ok) {
                    throw  Error('Unfortunately, could not fetch data...')
                } else {
                    const json = await resp.json()
                    const {value} = json
                    setUserMessegesList([...userMessagesList, {text: value, type: 'bot', date: new Date()}])
            }
            }catch (err) {
                setError(err.message)
            }
        }

    console.log(userMessage)
    console.log(userMessagesList)
    return (
        <Context.Provider value={{
            userMessagesList,
            setUserMessegesList,
            fetchData,
            setUserMessage,
            userMessage
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;