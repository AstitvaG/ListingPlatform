import React, { Component } from 'react';

class Subsciption extends Component {
    render() {
        let { data } = this.props;
        return (
            <div style={{
                height: '100vh',
                width: '100%',
                top: 0,
                bottom: 0,
                position: 'fixed',
                background: 'rgba(0,0,0,0.2)',
                zIndex: 100,

            }}>
                <div className='p-5' style={{
                    height: '40vh',
                    width: '40vw',
                    background: 'white',
                    borderRadius: '20px',
                    left: '30vw',
                    top: '20vh',
                    position: 'absolute',
                }}>
                    <h2>Subsciption</h2>
                    <h5>You have alread subscribed to this dataset.</h5>
                    <span style={{fontSize: '20px'}}>Validity: </span> <span style={{color: '#444444', fontSize: '20px'}}>{data.subscription_expiry}</span>
                    <div className='row justify-content-center'>
                        <button onClick={this.props.toggle}>Close</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Subsciption;
