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
                <div className='crocs-click' onClick={this.show}>
                    <div className='show montserrat'>crocs redesign</div>
                    <div className='hide'>THIS IS ONLY A PERSONAL PROJECT. I was not contracted by Crocs to do this.</div>
                </div>

                {this.state.modal ? (
                    <div className='modal-bg'>
                        <div className='modal-web'>
                            <h2 className='text-center montserrat'>
                                crocs redesign
                            </h2>

                            <div className='text-center modal-frame'>
                                <iframe className='artboard' src='https://xd.adobe.com/embed/c1d822e9-a4a2-472e-ae32-ae528cd03489/' frameBorder='0' allowFullScreen></iframe>
                            </div>

                            <div className='info'>
                                Click around to navigate. Any possible interactions will highlight blue when you click onto the artboard above.
                                <br/><br/>
                                Click <a href='https://xd.adobe.com/view/ebca570e-b6c9-4d5d-9f4c-a59af87a5212/' target='_blank'>HERE</a> for a slideshow view.
                                <br/><br/>
                                This web application was fun to wireframe and actually build out with some of my colleagues. Although the product doesn't look like the artboard slides, I learned so much from this process of collaborating with other individuals. Not everything can be implemented within a specific timeframe, and some things will be scratched completely because they may not align with a company vision. This is a valuable process that I have no hard feelings for.
                                <br/><br/>
                                There are still a few similarities between this mockup and the built-out product. The first is the landing view that includes both sign in and sign up components in one place, so users don't have to navigate between views to do either. The second is the navbar that is displayed once users are redirected internally, which features a "new post" button. This allows users to post at any point during a session. The final similarity is the filtering option for ski, snowboard and soft goods. The core filtering functionality is there with some added options in the built-out product.
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