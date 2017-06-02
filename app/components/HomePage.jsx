import * as React from 'react';
import Navbar from './Navbar.jsx';

export default class extends React.Component {
    render() {
        

        return (
            <div>
                <Navbar/>

                <div className='about-info'>
                    I am a graphic designer and JavaScript developer with full stack capabilities. I have a certificate in advanced software development in full-stack JavaScript along with a B.A. degree in psychology. I enjoy working with design software and web technologies to develop tools that enhance the user experience of creative platforms and interfaces.
                    <br/><br/>
                    As a graphic designer, I can offer a solid understanding of design principles in order to build sensible UI components and features for an application. With my education in psychology, I can also collaborate with others on theories and trends that will improve the UX development of any application. I enjoy researching data and behavior to deliver an enhanced user experience.
                    <br/><br/>
                    <ul className='social'>
                        <li><a href='https://github.com/kcirekcom' target='_blank' className='icon-github'/></li>
                        <li><a href='https://www.linkedin.com/in/erick-mock' target='_blank' className='icon-linkedin'/></li>
                        <li><a href='mailto:erick.f.mock@gmail.com?Subject=Collaboration' className='icon-envelop'/></li>
                    </ul>
                </div>
            </div>
        )
    }
}