import React, {useState} from 'react';
import Context from "./Context";



function ContextProvider({children}) {

    const [userMessagesList, setUserMessegesList] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [error, setError] = useState();
    const [userSearch, setUserSearch] = useState('');
    const [userArray, setUserArray] = useState({arr : [
        {id:1, avatar: 'https://s.ws.pho.to/img/index/ai/source.jpg', name: 'Alice Freman', messages: []},
        {id:2, avatar: 'https://www.photographygoals.com/wp-content/uploads/2019/10/Rya-July2019-3893-Edit_800x533.jpg',  name: 'Josefina', messages: []},
        {id:3, avatar: 'https://reductress.com/wp-content/uploads/2016/10/woman-outside-serious-820x500.jpg',  name: 'Velasquez', messages: []},
        {id:4, avatar: 'https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg&ga=GA1.2.496117354.1630540800', name: 'Barrera', messages: []},
        {id:5, avatar: 'https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D1%81-%D0%BF%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B8-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%8B-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D1%8B-125031765.jpg', name: 'Victoria', messages: []},
        {id:6, avatar: 'https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B2-%D1%87%D0%B5%D1%80%D0%BD%D0%BE%D0%BC-%D0%BA%D0%BE%D1%81%D1%82%D1%8E%D0%BC%D0%B5-%D1%81-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D1%80%D1%83%D0%B1%D0%B0%D1%88%D0%BA%D0%BE%D0%B9-125019349.jpg', name: 'Cabanitos', messages: []}
    ]})
    console.log(userArray)

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
                    setUserMessegesList(userMessagesList => [...userMessagesList, {text: value, type: 'bot', date: new Date()}])
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