import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Chat from "./Chat/Chat";

function Routes(props) {
    return (
        <>
            <Switch>
                <Route path="/:id" component={Chat}/>
            </Switch>
        </>
    );
}

export default Routes;