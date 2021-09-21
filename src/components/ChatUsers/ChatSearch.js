import React, {useContext} from 'react';
import Context from '../context/Context'

function ChatSearch() {

    const {
        searchChangeHandler
    } = useContext(Context)
    
    return (
        <div>
            <input
                onChange={searchChangeHandler}
            />
        </div>
    );
}

export default ChatSearch;