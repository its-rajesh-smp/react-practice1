import React from 'react';
import "./Container.css"

function Container(props) {
    return ( 

        <div className='ContainerDiv'>
            {props.children}
        </div>

     );
}

export default Container;