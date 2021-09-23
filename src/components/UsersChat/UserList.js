import React, {useContext} from 'react';
import Context from '../context/Context';
import User from "./User";
import {Link} from "react-router-dom";

function UserList() {
    const {userArray, userSearch} = useContext(Context)
    return (
        <div>
                {userArray
                    .filter(value => value.name.toLowerCase()
                        .includes(userSearch.toLowerCase()))
                    .map(user =>
                            <Link to={`/:${user.id}`}>
                                <User
                                    key={user.id}
                                    user={user}
                                />
                            </Link>
                       )
                }
        </div>
    );
}

export default UserList;