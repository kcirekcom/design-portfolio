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
                <div className='checkboard-click' onClick={this.show}>
                    <div className='show checkboard'>the checkboard</div>
                    <div className='hide'>Mobile application idea/design for goal setting and personal accountability.</div>
                    <div className='glare'/>
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal'>
                            <button className='top' type='button' onClick={this.close}>
                                Close
                            </button>

                            <h2 className='text-center checkboard'>
                                the checkboard
                            </h2>

                            <div className='text-center modal-frame-mobile'>
                                <iframe className='artboard-mobile' src='https://xd.adobe.com/embed/dc1a78f8-80ad-4b3c-a922-b66fc7ad3f6f/' frameBorder='0' allowFullScreen></iframe>
                            </div>

                            <div className='info'>
                                <span>Click around to navigate. Any possible interactions will highlight blue when you click onto the artboard above.</span>
                                
                                <span>Click <a href='https://xd.adobe.com/view/dc1a78f8-80ad-4b3c-a922-b66fc7ad3f6f/' target='_blank'>HERE</a> for a slideshow view.</span>
                                
                                <span>This mobile prototype has a basic landing view with signup and login buttons. Both of the signup and login screens can navigate back to the landing view by clicking on either the main title or logo icon.</span>
                                
                                <span>If users sign up, they are greeted by an introduction modal personalized with their name. Currently, this is the only feedback interaction, but I intend on building more to guide users through the process of sharing their goals.</span>
                                
                                <span>Personal and starred goals sections are listed under the goal sharing section. Users have the option to mark their goals as completed by clicking on the checkmark icon to the right of each goal. Users can navigate the application via the tab bar that 1) fills in the clicked icon and 2) rotates that icon to the center of the bar. This is meant to help users identify exactly which view they are looking at. The best part about this prototype is the vertical search bar displayed in the search view. It provides users with options to search a keyword or click on category icons, which are the same set of icons that must be selected before sharing a goal.</span>
                            </div>

                            <button className='bottom' type='button' onClick={this.close}>
                                Close
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}