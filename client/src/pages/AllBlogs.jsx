import React from 'react'
import Navbar from '../components/Navbar';


function AllBlogs(){
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
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs
