import React, { useEffect, useState } from 'react';
import '../Css/AllToy.css'

const AllToy = () => {

    const [allToys,setAllToys]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/alltoys')
        .then(res=>res.json())
        .then(data=>{
            setAllToys(data)
        })
    },[])

    return (
        <div className='my-10 min-h-[calc(100vh-146px)]'>
            <h1 className='text-2xl font-bold text-center mb-5'>All Toys</h1>
            <table className='w-full table text-center'>
                <thead>
                    <tr>
                        <td>Seller Name</td>
                        <td>Toy Name</td>
                        <td>Category</td>
                        <td>Price</td>
                        <td>Available Quantity</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map(toy=><tr key={toy._id}>
                            <td>{toy.sellerName}</td>
                            <td className='font-bold'>{toy.name}</td>
                            <td>{toy.category}</td>
                            <td className='font-bold'>${toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                <button className='btn'>View Details</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToy;