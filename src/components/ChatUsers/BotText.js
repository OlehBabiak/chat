import React, {useContext, useEffect} from 'react';
import Context from "../context/Context";

function BotText({text}) {
    return (
        <div>
            {text}
        </div>
    );
}

export default BotText;