import * as React from 'react';
import Navbar from './Navbar.jsx';
import AbbyModal from './prototype-modals/AbbyModal.jsx';
import CheckboardModal from './prototype-modals/CheckboardModal.jsx';
import GearshareModal from './prototype-modals/GearshareModal.jsx';
import NovelModal from './prototype-modals/NovelModal.jsx';
import CrocsRedesignModal from './prototype-modals/CrocsRedesignMockup.jsx';

export default class extends React.Component {

    render() {
        return (
            <div>
                <Navbar/>
                
                <h2 className='text-center'>
                    Animated Prototypes
                </h2>

                <AbbyModal/>
                <CheckboardModal/>
                <GearshareModal/>
                <NovelModal/>
                <CrocsRedesignModal/>
            </div>
        )
    }
}