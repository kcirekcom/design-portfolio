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
                <h3 className='text-center mrspapers'>
                    MRS papers
                </h3>

                <img className='click-img' onClick={this.show} src={require('../../assets/websites/MRS/MRS-chapters.png')} alt='MRS chapter view'/>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <span className='x' onClick={this.close}>
                            &#x2715;
                        </span>

                        <div className='modal-web'>
                            <button className='top' type='button' onClick={this.close}>
                                Close
                            </button>

                            <h2 className='text-center mrspapers'>
                                MRS papers
                            </h2>

                            <div className='img-section'>
                                <img className='img' src={require('../../assets/websites/MRS/MRS-home.png')} alt='MRS home view'/>
                                <img className='img' src={require('../../assets/websites/MRS/MRS-chapters.png')} alt='MRS chapter view'/>
                                <img className='img' src={require('../../assets/websites/MRS/MRS-admin-login.png')} alt='MRS admin login view'/>
                                <img className='img' src={require('../../assets/websites/MRS/MRS-admin-1.png')} alt='MRS first admin view'/>
                                <img className='img' src={require('../../assets/websites/MRS/MRS-admin-2.png')} alt='MRS second admin view'/>
                            </div>

                            <div className='info'>
                                <span>Click <a href='http://www.mrspapers.com' target='_blank'>HERE</a> to view this website.</span>
                                
                                <span>This application is a self-publishing platform. It delivers transactions to an API that I built, which allows the user to create and modify a manuscript by adding, updating and deleting chapters. This site has the scalability to include many users, but it is currently deployed for personal use only.</span>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}