import React from 'react'
import { Route, Link } from 'react-router-dom';
import MainContainer from '../MainContainer'
import '../MainContainer.css';

function Homepage() {
    return (
        <div className='home'>
            <nav className='navy'>
                <Link to='/maincomp' className='comicbar'> COMIC LIST BY YEAR </Link>
            </nav>

                <Route path='/maincomp' component={MainContainer}></Route>
        </div>
    )
}

export default Homepage