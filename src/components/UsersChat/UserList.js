import React, {useContext} from 'react';
import Context from '../context/Context';
import User from "./User";
import {Link} from "react-router-dom";


function UserList() {
    const {userArray, userSearch} = useContext(Context)
    // userArray.sort(( a, b ) => b.messages[b.messages.length-1].date.toLocaleString('en-En') -
    //     a.messages[a.messages.length-1].date.toLocaleString('en-En'))

    return (
        <>
            {userArray
                .filter(value => value.name.toLowerCase()
                    .includes(userSearch.toLowerCase()))
                .map(user =>
                    <Link to={`/:${user.id}`} key={user.id}>
                        <User
                            key={user.id}
                            user={user}
                        />
                    </Link>
                )
            }
        </>
    );
}

export default UserList;