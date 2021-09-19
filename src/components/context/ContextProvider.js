import React, {useState} from 'react';
import Context from "./Context";



function ContextProvider({children}) {

    const [userMessagesList, setUserMessegesList] = useState([]);
    const [botMessagesList, setBotMessegesList] = useState([]);
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
                    setUserMessage(value)
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
            userMessage
        }}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;