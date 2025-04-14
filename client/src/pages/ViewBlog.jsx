import React from 'react'
import Navbar from '../components/Navbar';

function ViewBlog(){
    return(
        <div className="container m-0">
            <h2>View Blogs</h2>
            <div className="container m-0 d-flex">
                <Navbar></Navbar>
                <div className='row container'>
                    <div id="blogTitle">Blog title</div>
                    <hr/>
                    <div id="blogContent">Blog Content</div>
                </div>
            </div>
        </div>
    )
}

export default ViewBlog
