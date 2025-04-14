import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import Navbar from '../components/Navbar';
import { loadAllBlogs } from '../services/blogs';


function AllBlogs(){
    const [blogs , setBlogs] = useState([])

    const getAllBlogs = async () =>{
        const result = await loadAllBlogs()
        console.log(result)
        if(result.status == 'success'){
            console.log(result.data)
            setBlogs(result.data)
        }
        else{
            toast.error(result.error)
        }
    }

    useEffect(() => {
        getAllBlogs()
    } , [])

    return(
        <div className='container m-0'>
            <h2>All Blogs</h2>
            <div className="container m-0 d-flex">
                <Navbar></Navbar>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog , index) =>{
                                return(<tr>
                                    <td>{index + 1}</td>
                                    <td>{blog['title']}</td>
                                    <td>{blog['Category Title']}</td>
                                    <td>
                                        Edit and delete icons here
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs
