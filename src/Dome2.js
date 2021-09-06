import React, {useRef} from 'react'

function Dome2(){
const myName = useRef(null);

const getData = () =>{
    console.log(myName.current.value);   
}
    return(
        <div>
            <input type="text" placeholder="Enter Name..." ref={myName}/>
            <button onClick={getData}> Submit </button>

        </div>
    )
}

export default Dome2;