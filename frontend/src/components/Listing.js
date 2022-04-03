import React, {Component} from 'react';
import axios from 'axios';

export default class Listings extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            datasets: [
                {
                    id: '',
                    name: '',
                    description: ''
                }
            ]
        }
    }
    
    componentDidMount() {
        this.setState({
            datasets: [
                {
                    id: '1',
                    name: 'DATASET1',
                    description: 'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant'
                },
                {
                    id: '2',
                    name: 'DATASET2',
                    description: 'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant'
                }
            ]
        });
         // TODO
        // axios.get(`${backend_url}/get_details/${this.state.dataset_slug}`).then(res => {
        //     this.setState({
        //         data: res.data,
        //         loading: false
        //     });
        // })
    }

    onUpload(e) {
        e.preventDefault();
        //send request to upload team.
    }

    render() {
        return (
            <div>
            <div className='d-flex justify-content-around row'>
                    <div className="card" style={{ height: '15rem'}}>
                        <div className="card-header" style={{textAlign: 'center'}}>
                            Exlpore
                        </div>
                        <ul className="list-group list-group-flush d-flex justify-content-around col">
                            <li className="list-group-item" style={{textAlign: 'center'}}>
                                <a href="#">Filter</a>
                            </li>

                            <li className="list-group-item" style={{textAlign: 'center'}}>
                                <a href="#">Sortby</a>
                            </li> 
                            <li className="list-group-item" style={{textAlign: 'center'}}>
                                <a href="#" onClick={e => this.onUpload()}>Upload new dataset</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                    { 
                        this.state.datasets.map((datasetId, i) => {
                            return (
                                    <div style={{padding:'1rem'}}>
                                        <div className="card" style={{flex:1, width:'70rem'}}>
                                            <div className="card-header" style={{flex:1, padding: '100x'}}> 
                                                <div className='d-flex row'>
                                                    <h5 style={{flex: 1, padding: '0.5rem'}} >{datasetId.name}</h5>
                                                    <div className="d-flex flex-row-reverse">
                                                        <a href="#" className="btn btn-primary" >View details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text">{datasetId.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                    </div>
            </div>
            </div>

        )
    }
}