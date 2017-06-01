import * as React from 'react';
import Navbar from './Navbar.jsx';
import MrsModal from './development-modals/MrsModal.jsx';
import GearshareWebModal from './development-modals/GearshareWebModal.jsx';
import FremontModal from './development-modals/FremontModal.jsx';

export default class extends React.Component {
    render() {
        

        return (
           <div>
                <Navbar/>
                
                <h2 className='text-center'>
                    Software Development
                </h2>

                <MrsModal/>
                <GearshareWebModal/>
                <FremontModal/>
            </div>
        )
    }
}