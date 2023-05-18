import React, { useContext, useEffect, useState } from 'react';
import { UserOther } from '../authContextApi/AuthProvider';

const MyToys = () => {
    const [myToy,setMyToy]=useState([]);
    const {user}=useContext(UserOther)



    useEffect(()=>{
        fetch(`https://b7a11-toy-marketplace-server-side-mdasif61.vercel.app/mytoys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyToy(data)
        })
    },[user.email])

    return (
        <div>
            <h1>This is My Toys :{myToy.length}</h1>
        </div>
    );
};

export default MyToys;