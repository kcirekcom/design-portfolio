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
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal'>
                            <h2 className='text-center checkboard'>
                                the checkboard
                            </h2>

                            <div className='text-center modal-frame'>
                                <iframe width='350' height='450' src='https://xd.adobe.com/embed/dc1a78f8-80ad-4b3c-a922-b66fc7ad3f6f/' frameBorder='0' allowFullScreen></iframe>
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