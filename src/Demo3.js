import React, {  } from 'react';
import PassData from './PassData';

function Demo3(){
    function getData(){
        alert("Hello Ajay");
    }
    return (
        <div>
            <PassData data={getData}/>
        </div>
    )
}

export default Demo3;