import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Chat from "./Chat/Chat";

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/:id" component={Chat} exact/>
            </Switch>
        </>
    );
}

export default Routes;