import React from 'react'
import Navbar from '../components/Navbar';


function AddOrEditBlog(){
    return(
        <div className="container m-0">
            <h2>Add blog and edit blog both will redirect here</h2>
            <div className="container m-0 d-flex">
                <Navbar></Navbar>
                <div className='container row'>
                    <div>
                        <div className="form-floating mb-3">
                            <input type="text" id="blogTitle" className="form-control" placeholder='Blog Title'/>
                            <label htmlFor="blogTitle">Blog Title</label>
                        </div>
                        <hr/>
                        <textarea className='form-control mb-3' rows={8} id="blogContent" placeholder='This is your blog body'></textarea>
                        <select name="" id="selectCategory" className="form-control mb-3">
                            <option value="" selected>--Select Category--</option>
                            <option value="">Category 1</option>
                            <option value="">Category 2</option>
                            <option value="">Category 3</option>
                            <option value="">Category 4</option>
                            <option value="">Category 5</option>
                        </select>
                        <button className="btn btn-success me-3">Create</button>
                        <button className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOrEditBlog
