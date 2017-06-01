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
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal'>
                            <h2 className='text-center abby'>
                                ABBY
                            </h2>

                            <div className='text-center iframe'>
                                <iframe width='350' height='450' src='https://xd.adobe.com/embed/b6524554-a2bb-41d2-afe1-194e32511713/' frameBorder='0' allowFullScreen></iframe>
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