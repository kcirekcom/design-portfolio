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
                <div className='abby-click' onClick={this.show}>
                    <div className='show abby'>ABBY</div>
                    <div className='hide'>Mobile application idea/design for rating mobile interface mockups and reporting A/B testing results.</div>
                    <div className='glare'/>
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <span className='x' onClick={this.close}>
                            &#x2715;
                        </span>

                        <div className='modal'>
                            <div className='modal-header'>
                                <button className='top' type='button' onClick={this.close}>
                                    Close
                                </button>

                                <h2 className='text-center abby'>
                                    ABBY
                                </h2>
                            </div>

                            <div className='text-center modal-frame-mobile'>
                                <iframe className='artboard-mobile' src='https://xd.adobe.com/embed/b6524554-a2bb-41d2-afe1-194e32511713/' frameBorder='0' allowFullScreen></iframe>
                            </div>

                            <div className='info'>
                                <span>Click around to navigate. Any possible interactions will highlight blue when you click onto the artboard above.</span>
                                
                                <span>Click <a href='https://xd.adobe.com/view/b6524554-a2bb-41d2-afe1-194e32511713/' target='_blank'>HERE</a> for a slideshow view.</span>
                                
                                <span>Users are initially welcomed by ABBY and her accommodating greeting. This landing view provides users with three main options to move forward, including a login and signup option. The third option is a code input intended for users that are invited by companies to rate interface mockups.</span>
                                
                                <span>FOR USER TESTERS: After inputting a code, users are directed to a terms and conditions screen. Scrolling to the bottom of this screen populates accept and reject buttons. If accepted, users are guided comfortably through the testing features and input sections.</span>
                                
                                <span>FOR COMPANY USERS: After successful login and/or signup, this application displays a tab bar that navigates three main views. The first view is an interface designed for uploading the interface mockups. The second view displays any data and results from that company's A/B tests. The third view is designed to be a tool that generates codes for user testers and tracks their completion status. There is also a settings icon in the top right corner of the title header for users to access helpful tools and information at any point during a session.</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}