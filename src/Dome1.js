import React, {useState} from 'react';

function Dome1(){
const [item, setItem] = useState(true);

    return (
        <div>
            <div className={item ? "circle_m" : "rectangle"}></div>
            <button onClick={()=> setItem(!item)}> Click Me </button>
        </div>
    );
};

export default Dome1;