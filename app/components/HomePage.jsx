import * as React from 'react';
import Navbar from './Navbar.jsx';

export default class extends React.Component {
    render() {
        

        return (
            <div>
                <Navbar/>

                <div className='about-info'>
                    I am a JavaScript developer with full stack capabilities and a graphic designer. I enjoy working with design software and web technologies to develop tools that enhance the user experience of creative platforms and interfaces. I have a certificate in advanced software development in full-stack JavaScript along with a B.A. degree in psychology.
                    <br/><br/>
                    As a graphic designer, I can offer a solid understanding of design principles in order to build sensible UI components and features for an application. With my education in psychology, I can collaborate with others on psychological theory, research and data that would help in the UX development of any application. I enjoy analyzing data and behavior to drive the authentic experience of a user. Through that research, I can produce creative solutions that can enhance the overall user experience.
                    <br/><br/>
                </div>
            </div>
        )
    }
}