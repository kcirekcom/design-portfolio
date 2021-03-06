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
                <h3 className='text-center fremont'>
                    FREMONT PATROLLER
                </h3>

                <img className='click-img' onClick={this.show} src={require('../../assets/websites/Fremont/Fremont-top.png')} alt='Fremont Patroller top of page view'/>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <span className='x' onClick={this.close}>
                            &#x2715;
                        </span>

                        <div className='modal-web'>
                            <div className='modal-header-web'>
                                <button className='top' type='button' onClick={this.close}>
                                    Close
                                </button>

                                <h2 className='text-center fremont'>
                                    FREMONT PATROLLER
                                </h2>
                            </div>

                            <div className='img-section-fre'>
                                <img className='img' src={require('../../assets/websites/Fremont/Fremont-top.png')} alt='Fremont Patroller top of page view'/>
                                <img className='img' src={require('../../assets/websites/Fremont/Fremont-about.png')} alt='Fremont Patroller about section'/>
                                <img className='img' src={require('../../assets/websites/Fremont/Fremont-data-1.png')} alt='Fremont Patroller data section first view'/>
                                <img className='img' src={require('../../assets/websites/Fremont/Fremont-data-2.png')} alt='Fremont Patroller data section second view'/>
                                <img className='img' src={require('../../assets/websites/Fremont/Fremont-data-3.png')} alt='Fremont Patroller data section third view'/>
                                <img className='img' src={require('../../assets/websites/Fremont/Fremont-history.png')} alt='Fremont Patroller history section'/>
                            </div>

                            <div className='info-dev'>
                                <span>Click <a href='http://fremont-bike-patroller.herokuapp.com' target='_blank'>HERE</a> to view this website.</span>
                                
                                <span>This application provides daily estimates of bike traffic at the Fremont Bridge. Individuals can check the traffic for each day from the past three years, or choose a date range. This application uses seattle.gov’s Socrata (SODA) API.</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}