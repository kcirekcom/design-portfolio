import * as React from 'react';
import Navbar from './Navbar.jsx';

export default class extends React.Component {
    render() {
        

        return (
            <div>
                <Navbar/>
                
                <h2 className='text-center'>
                    Data Visualizations
                </h2>

                <div className='text-center'>
                    <embed className='iframe' width='560' height='315' src='app/assets/BP Oil Stats 2015.pdf' type='application/pdf'/>
                    <embed className='iframe' width='560' height='315' src='app/assets/Cy Young Data II.pdf' type='application/pdf'/>
                    <embed className='iframe' width='560' height='315' src='app/assets/Pioneering Psychology.pdf' type='application/pdf'/>
                    <embed className='iframe' width='560' height='315' src='app/assets/Top HS CA.pdf' type='application/pdf'/>
                    
                    <iframe className='iframe' width='560' height='315' src='https://www.youtube.com/embed/wpE_EevJBmg' frameBorder='0' allowFullScreen></iframe>
                    <iframe className='iframe' width='560' height='315' src='https://www.youtube.com/embed/V3voeljivNs' frameBorder='0' allowFullScreen></iframe>
                </div>

            </div>
        )
    }
}