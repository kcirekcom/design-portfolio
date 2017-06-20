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
                                Click around to navigate. Any possible interactions will highlight blue when you click onto the artboard above. Scroll down on the landing page to view interactions linked to the orange classic clog image under the "Recommended Just For You" section.
                                <br/><br/>
                                Click <a href='https://xd.adobe.com/view/c1d822e9-a4a2-472e-ae32-ae528cd03489/' target='_blank'>HERE</a> for a slideshow view.
                                <br/><br/>
                                ***I WAS NOT CONTRACTED BY CROCS TO DO THIS.***
                                <br/><br/>
                                I just saw this as a fun opportunity to wireframe new features and reorganize some of the landing page content for this major retail website. The features include a toggleable navbar and a reimagined image slider. In this personal project, I prototyped the features and then built out the functionality for the image slider in the CODEPEN editor below. The image slider is enabled automatically and has clickable thumbnail images that appear in the center container when selected. The center container also has zoomable functionality. You can click on the "Edit on CODEPEN" link in the upper right of the editor for a better view.
                            </div>

                            <div className='text-center modal-frame'>
                                <iframe className='artboard' scrolling='no' title='slider + zoom' src='//codepen.io/kcire_kcom/embed/pwezOQ/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameBorder='no' allowTransparency='true' allowFullScreen='true'></iframe>      
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