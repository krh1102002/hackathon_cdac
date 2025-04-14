import React from 'react'
import Navbar from '../components/Navbar';

function MenuBoard() {
    return(
        <div className='container m-0'>
            <h2>Menu Board</h2>
            <div className="container m-0 d-flex">
                <Navbar></Navbar>
                <div>
                    <h2>Content</h2>
                </div>
            </div>
        </div>
    )
}

export default MenuBoard
