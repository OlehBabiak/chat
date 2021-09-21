import React, {useContext} from 'react';
import Context from '../context/Context';
import User from "../User";
import {Link} from "react-router-dom";

function ChatList() {
    const {userArray, userSearch} = useContext(Context)
    return (
        <div>
            <ul>
                {userArray
                    .filter(value => value.name.toLowerCase()
                        .includes(userSearch.toLowerCase()))
                    .map(user =>
                        <li>
                            <Link to={`/:${user.id}`}>
                                <User
                                    key={user.id}
                                    user={user}
                                />
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    );
}

export default ChatList;