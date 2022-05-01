import React, { Component } from 'react';
import axios from 'axios';
import './css/Details.css'
import Description from './Tabs/Description';
import Metadata from './Tabs/Metadata';
import Versions from './Tabs/Versions';
import Visualization from './Tabs/Visualization';
import Subsciption from './Subscription';

export default class UsersList extends Component {

    state = {
        dataset_slug: this.props.match.params.id,
        loading: true,
        data: {
            name: 'Temp Dataset',
            slug: 'temp-dataset',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna erat, dictum et condimentum ac, pharetra ac justo. Nunc molestie non risus eu cursus. Praesent egestas eros id interdum faucibus. In ullamcorper, neque et ultrices semper, nisi metus laoreet orci, aliquet efficitur lacus orci quis purus. Proin vehicula lectus quis faucibus aliquam. Suspendisse potenti. Praesent condimentum odio et urna ornare, sed gravida lacus congue. Aliquam accumsan mattis sem nec malesuada. Curabitur blandit neque vel dapibus tempor. Vestibulum in fringilla elit, at pulvinar est. Morbi tempus rutrum tellus cursus rutrum. Maecenas et magna ut felis gravida tincidunt nec eu enim. Suspendisse ut dui tellus.\n\nIn lacinia eleifend ipsum non efficitur. Aliquam efficitur nulla in justo ultricies, vitae sagittis enim tristique. Donec ullamcorper mauris nec mauris pharetra, in tincidunt nunc aliquet. Duis laoreet dui in dolor pellentesque viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu iaculis odio. Suspendisse potenti. Nulla luctus tempor mi vehicula sagittis. Nulla nulla est, elementum ac convallis id, porttitor ut libero. Duis tincidunt lobortis arcu et dapibus. Curabitur auctor finibus est, sed facilisis nunc rhoncus quis. Cras pulvinar varius posuere. Maecenas porta tempus tristique.\n\nNulla vehicula erat eu quam tristique, eget aliquam diam auctor. Fusce eu pulvinar quam. Suspendisse ac lobortis nisi. Fusce sagittis orci libero, at mollis augue elementum quis. Nam vitae mauris id ante venenatis dictum vel et mauris. Curabitur sed nisl vitae sapien imperdiet pulvinar sed in turpis. Pellentesque eget interdum turpis. Nunc non rhoncus diam. Morbi consequat porta ante sit amet commodo. Pellentesque vel elit ultrices, consectetur nisi sed, molestie massa. Pellentesque efficitur egestas sollicitudin. Vivamus magna lacus, tempus in fringilla id, sollicitudin viverra sapien. Cras nec nibh magna.\n\nCurabitur in ligula condimentum lacus vestibulum eleifend non id nisi. Fusce blandit lectus id neque vulputate, ut viverra risus suscipit. Quisque pretium non sem et dignissim. Nullam vitae tincidunt metus. Integer euismod lobortis arcu. Vivamus iaculis est eget faucibus aliquam. Nunc convallis tellus nec felis porttitor, sit amet volutpat tellus tristique. Maecenas eros magna, mollis sit amet congue tempus, mollis in neque.',
            subscribed: false,
            subscription_expiry: 0,
            upload_date: 'March 10th, 2022',
            uploaded_by: 'Temp Person',
            download_size: '100MB',
            data_type: 'JSON/CSV',
            use_cases: ['Temp Usecase 1', 'Temp Usecase 2', 'Temp Usecase 3'],
            citations: [['Temp paper 1', 'Temp person 1'], ['Temp paper 2', 'Temp person 2'], ['Temp paper 3', 'Temp person 3']]
        },
        activeTab: 0,
        showSubscriptionModal: false,
    }

    componentDidMount() {
        let prevAuthDetails = sessionStorage.getItem("userdata_listing")
        if (prevAuthDetails === null) {
            window.history.pushState({}, '', `/auth`)
            window.location.reload()
        }
        else {
            this.setState({ loading: false })
        }
    }

    changeTab = (newTab) => {
        this.setState({ activeTab: newTab })
    }

    toggleSubsciptionModal = () => {
        this.setState({ showSubscriptionModal: !this.state.showSubscriptionModal })
    }


    ////////////////////////////////////////////////////////////////////////
    onDownload(datasetName, datasetVersion, datasetCreatorName, requestingUser, secretToken) {
        //from team 3
        let url = "dataversedownloadmanager://opendownloader?";
        if (datasetName !== null && datasetName !== undefined)
            url += ("datasetName=" + datasetName);
        url += "&";

        if (datasetVersion !== null && datasetVersion !== undefined)
            url += ("datasetVersion=" + datasetVersion);
        url += "&";

        if (datasetCreatorName !== null && datasetCreatorName !== undefined)
            url += ("datasetCreatorName=" + datasetCreatorName);
        url += "&";

        if (requestingUser !== null && requestingUser !== undefined)
            url += ("requestingUser=" + requestingUser);
        url += "&";

        if (secretToken !== null && secretToken !== undefined)
            url += ("secretToken=" + secretToken);


        const a = document.createElement('a');
        a.href = url;
        a.click();

    }
    /////////////////////////////////////////////////////////////////////////////////////


    render() {
        let { data } = this.state;
        if (this.state.loading) {
            return <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 100, alignItems: 'center', justifyContent: 'center', alignContent: 'center', display: 'flex', background: 'rgba(0,0,0,0.1)' }}>
                <div class="spinner-grow m-1 text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-secondary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-light" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
                <div class="spinner-grow m-1 text-dark" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        }
        return (
            <div>
                {this.state.showSubscriptionModal && <Subsciption data={data} toggle={this.toggleSubsciptionModal} />}

                <div className='mx-5'>
                    <div id="title-row" className='d-flex justify-content-between row'>
                        <div id="dataset-name">
                            <h1>{data.name}</h1>
                        </div>
                        <div className='row'>
                            <div id="subsciption-button" className='mx-2'>
                                <button type="button" onClick={this.toggleSubsciptionModal} className='details-tab active btnx'>{data.subscribed ? "Subscibed" : "Subscibe"}</button>
                            </div>
                            <div id="download-button" className='mx-2'>
                                <button type="button" className='details-tab active btnx'>Download Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex row'>
                        <div style={{ flex: 2 }}>
                            <div id='details-tabs' className='row'>
                                <button onClick={() => this.changeTab(0)} className={`details-tab ${this.state.activeTab === 0 ? 'active' : ''}`}>Desciption</button>
                                <button onClick={() => this.changeTab(1)} className={`details-tab ${this.state.activeTab === 1 ? 'active' : ''}`}>Metadata</button>
                                <button onClick={() => this.changeTab(2)} className={`details-tab ${this.state.activeTab === 2 ? 'active' : ''}`}>Versions</button>
                                <button onClick={() => this.changeTab(3)} className={`details-tab ${this.state.activeTab === 3 ? 'active' : ''}`}>Visualizations</button>
                            </div>
                            {
                                {
                                    0: <Description data={data} />,
                                    1: <Metadata />,
                                    2: <Versions />,
                                    3: <Visualization />
                                }[this.state.activeTab]
                            }
                        </div>
                        <div style={{ flex: 1 }}>
                            <div className="m-5 p-4" style={{ backgroundColor: '#dddddd', borderRadius: '20px' }}>
                                <div style={{ fontSize: '30px' }}>Properties</div>
                                <div className='side-props-dt'>
                                    <div>Upload Date</div>
                                    <div>{data.upload_date}</div>
                                </div>
                                <div className='side-props-dt'>
                                    <div>Upload By</div>
                                    <div>{data.uploaded_by}</div>
                                </div>
                                <div className='side-props-dt'>
                                    <div>Download Size</div>
                                    <div>{data.download_size}</div>
                                </div>
                                <div className='side-props-dt'>
                                    <div>Data Type</div>
                                    <div>{data.data_type}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}