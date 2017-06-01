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
                <div className='gearshare-click' onClick={this.show}>
                    <div className='show gearshare'>GEARSHARE</div>
                    <div className='hide'>Original design concept for the GearShare web application I contributed to.</div>
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal-web'>
                            <h2 className='text-center gearshare'>
                                GEARSHARE
                            </h2>

                            <div className='text-center iframe'>
                                <iframe width='775' height='450' src='https://xd.adobe.com/embed/ebca570e-b6c9-4d5d-9f4c-a59af87a5212/' frameBorder='0' allowFullScreen></iframe>
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