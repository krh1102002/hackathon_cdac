import React from 'react'
import Navbar from '../components/Navbar';

function Category(){
    return(
        <div className="container m-0">
            <h2>View and add categories</h2>
            <div className="container m-0 d-flex">
                <Navbar></Navbar>
                <div className='container row'>
                    <div>
                        <div className="form-floating mb-3">
                            <input type="text" id="newCategoryInput" className="form-control" placeholder='Category'/>
                            <label htmlFor="newCategoryInput">Category</label>
                        </div>
                        <button className="btn btn-success">Add</button>
                        <hr/>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Category</th>
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

export default Category
