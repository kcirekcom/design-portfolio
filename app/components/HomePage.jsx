import * as React from 'react';
import Navbar from './Navbar.jsx';

export default class extends React.Component {
    render() {
        

        return (
            <div>
                <Navbar/>
                
                <h2 className='text-center'>
                    About
                </h2>

                <div className='about-info'>
                    <p>This is me</p>
                </div>
            </div>
        )
    }
}