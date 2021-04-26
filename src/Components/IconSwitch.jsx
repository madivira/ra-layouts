import React from 'react';

function IconSwitch (prop){

    return(
        <div>
            <i onClick={prop.onSwitch} className={'material-icons icons'}>{prop.icon}</i>
        </div>
    )
}

export default IconSwitch;