import React, { useState } from 'react';
import { SearchResult } from './ComponentMixing'

const SearchImages = () => {
    const [img, setImg] = useState("");

    const InputEvent = (event) =>{
        const data = event.target.value;
        setImg(data);
        console.log(data);
    }
    return (
        <div>
            <input 
            type="text" 
            placeholder="Search Anything..." 
            value={img}
            onChange={InputEvent}
            />

            <SearchResult name={img} />
        </div>
    )
}

export default SearchImages;
