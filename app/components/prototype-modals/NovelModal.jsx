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