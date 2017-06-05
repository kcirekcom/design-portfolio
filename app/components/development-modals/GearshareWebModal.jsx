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
                <h3 className='text-center gearshare'>
                    GEARSHARE
                </h3>

                <img className='click-img' onClick={this.show} src={require('../../assets/websites/GS/GS-landing.png')} alt='GEARSHARE landing view'/>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal-web'>
                            <h2 className='text-center gearshare'>
                                GEARSHARE
                            </h2>

                            <div className='img-section'>
                                <img className='img' src={require('../../assets/websites/GS/GS-landing.png')} alt='GEARSHARE landing view'/>
                                <img className='img' src={require('../../assets/websites/GS/GS-landing-2.png')} alt='GEARSHARE landing view with sign in and sign up'/>
                                <img className='img' src={require('../../assets/websites/GS/GS-home.png')} alt='GEARSHARE home view'/>
                                <img className='img' src={require('../../assets/websites/GS/GS-profile.png')} alt='GEARSHARE profile view'/>
                                <img className='img' src={require('../../assets/websites/GS/GS-bin.png')} alt='GEARSHARE bin component view'/>
                            </div>

                            <div className='info'>
                                Click <a href='https://gear-share-staging.herokuapp.com' target='_blank'>HERE</a> to view this website.
                                <br/><br/>
                                This application is a marketplace for outdoor winter gear available for rent. The purpose of this application is to connect travelers, beginners, and adventurers with local gear enthusiasts. Developed with the MEAN stack.
                            </div>

                            <button type='button' onClick={this.close}>
                                Close
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}