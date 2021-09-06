import React, {useEffect, useRef, useState} from 'react'

function GetInputData(){
const [name, setName] =useState('')
const [email, setEmail] =useState('')
const [phone, setPhone] =useState('')
const [city,setCity] =useState('')
// const preName = useRef('')
// const preEmail = useRef('')
// const prePhone = useRef('')

// useEffect(() =>{
//     preName.current = name
//     preEmail.current = email
//     prePhone.current = phone
// }, [name,email,phone]);

    return(
        <div>
            <input value={name} onChange={data => setName(data.target.value)} placeholder="Enter Name..."/><br />
            <input value={email} onChange={data => setEmail(data.target.value)} placeholder="Enter Email..."/><br />
            <input value={phone} onChange={data => setPhone(data.target.value)} placeholder="Enter Phone..." /><br />

            <select value={city} onChange={data => setCity(data.target.value)}>
                <option>Delhi</option>
                <option>Faridabad</option>
                <option>Noida</option>
                <option>Gurgaon</option>
            </select>

            <h1>{name} <br /> {email} <br /> {phone} <br /> {city}</h1>
        </div>
    )
}

export default GetInputData;