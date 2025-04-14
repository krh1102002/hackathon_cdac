import React from 'react'
import Navbar from '../components/Navbar';

function SearchBlog(){
    return(
        <div className="container m-0">
            <h2>Search Blogs</h2>
            <div className="container m-0 d-flex">
                <Navbar></Navbar>
                <div className='container row'>
                    <div>
                        <div className="d-flex">
                            <input type="text" id="searchQuery" className="form-control me-3" placeholder='Enter blog title'/>
                            <button className="btn btn-primary">Search</button>
                        </div>
                        <hr />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBlog
