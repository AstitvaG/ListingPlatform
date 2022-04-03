import React, { Component } from 'react';

class Description extends Component {
    render() {
        let { data } = this.props;
        return (
            <div>
                <div>
                    <div className='descr-head'>About</div>
                    {data.description.split('\n').map((val, index) => <p key={index} style={{ textJustify: true, fontSize: '18px', color: '#444444' }}>{val}</p>)}
                </div>
                <br />
                <div>
                    <div className='descr-head'>Use Cases</div>
                    <ol>
                        {data.use_cases.map((item, i) => <li key={i} style={{fontSize: '18px', color: '#444444'}}>{item}</li>)}
                    </ol>
                </div>
                <br />
                <div>
                    <div className='descr-head'>Citations</div>
                    <ol>

                        {data.citations.map((item, i) =>
                            <li key={i}>
                                <div style={{fontSize: '18px', color: 'black'}}>Paper: {item[0]}</div>
                                <div style={{fontSize: '18px', color: '#444444'}}>Author(s): {item[1]}</div>
                            </li>)}
                    </ol>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default Description;
