import React, { useContext, useEffect, useState } from 'react';
import { UserOther } from '../authContextApi/AuthProvider';

const MyToys = () => {
    const [myToy,setMyToy]=useState([]);
    const {user}=useContext(UserOther)

    useEffect(()=>{
        fetch(`http://localhost:5000/mytoys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[user])

    return (
        <div>
            <h1>This is My Toys</h1>
        </div>
    );
};

export default MyToys;