import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='border border-3 border-top-0 border-start-0 border-bottom-0 me-5 pe-0 col-2'>
            <ul className='me-2'>
                <li><Link to={'/my_blogs'}>My Blogs</Link></li>
                <li><Link to={'/all_blogs'}>All Blogs</Link></li>
                <li><Link to={'/categories'}>Add Category</Link></li>
                <li><Link to={'/categories'}>Show Category</Link></li>
                <li><Link to={'/blog'}>Add Blog</Link></li>
                <li><Link to={'/search_blog'}>Search Blog</Link></li>
                <li><Link>Logout</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
