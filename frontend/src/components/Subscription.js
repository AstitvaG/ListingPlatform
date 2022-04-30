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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center"
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
                    <br/>
                    <br/>
                    <h2>Subsciption</h2>
                    <h5>Status: {data.approvalStatus ?? "Not subscribed"}</h5>
                    <h5>Start Date: {data.startDate ?? "Not subscribed"}</h5>
                    <h5>End Date: {data.endDate ?? "Not subscribed"}</h5>
                    <br/>
                    <div className='row justify-content-center'>
                        <button onClick={this.props.toggle} className="details-tab active btnx">Close</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Subsciption;
