import * as React from 'react';

export default class extends React.Component {
    constructor() {
        super();
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            modal: false,
            loading: false,
        }
    }

    close() {
        this.setState({modal: false});
    }

    show() {
        this.setState({modal: true, loading: true});
    }

    render() {
        return (
            <div>
                <div className='novel-click' onClick={this.show}>
                    <div className='show novel'>novel+novel</div>
                    <div className='hide'>Web application idea/design for social networking between writers and publishers/agents.</div>
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal-web'>
                            <h2 className='text-center novel'>
                                novel+novel
                            </h2>

                            <div className='text-center modal-frame'>
                                <iframe width='775' height='450' src='https://xd.adobe.com/embed/15575dd3-62a3-42f3-9921-3d1aed19ea0a/' frameBorder='0' allowFullScreen></iframe>
                            </div>

                            <div className='info'>
                                Click around to navigate. Any possible interactions will highlight blue when you click onto the artboard above.
                                <br/><br/>
                                Click <a href='https://xd.adobe.com/view/15575dd3-62a3-42f3-9921-3d1aed19ea0a/' target='_blank'>HERE</a> for a slideshow view.
                                <br/><br/>
                                A lot still has to be fleshed out in this prototype, including the user flow for agents and publishers. This prototype isn't intended to behave like a normal web application. That being said, several feedback interactions must be built in to guide users throughout the application and to avoid mass amounts of confusion. This instruction and feedback would be activated for writers, agents and publishers that have recently registered.
                                <br/><br/>
                                The idea is to have users navigate via the blue circles and bold words. The circular buttons open and close modal extensions. Clicking on the bold words will either save the state of data in an extension, or direct users to a new section/portal. After login and signup, pen names are displayed in the center of the main "plus sign" modal. If users navigate to a new section, the title of that section is then listed in the center.
                            </div>                                

                            <button className='text-center' type='button' onClick={this.close}>
                                Close
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}