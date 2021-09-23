import React from 'react';

import SearchFilter from "./SearchField";
import SearchField from "./SearchField";
import {UserImageWrapper} from "./UserStyled";

function ChatSearch() {

    return (
        <>
            <UserImageWrapper
                src='https://image.shutterstock.com/image-vector/empty-photo-male-profile-gray-260nw-538707310.jpg'
                alt='avatar'/>
            <SearchField/>
        </>
    );
}

export default ChatSearch;