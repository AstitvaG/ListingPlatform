import React, {Component} from 'react';
import axios from 'axios';
import './css/Landing.css'
import {Link} from 'react-router-dom'
export default class LandingPage extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      datasetUploads: [
        {
          id: "1",
          name: "DATASET1",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        },
        {
          id: "2",
          name: "DATASET2",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        },
      ],
      datasetSubscriptions: [
        {
          id: "1",
          name: "DATASET1",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        },
        {
          id: "2",
          name: "DATASET2",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        },
        {
          id: "3",
          name: "DATASET3",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        },
      ],
      subscriptions: {
        
        "1":
        {
          startDate: "2-10-22",
          endDate: "10-10-22",
        },
        "2":
        {
          startDate: "2-10-22",
          endDate: "20-10-22",
        },
        "3":
        {
          startDate: "2-10-22",
          endDate: "30-10-22",
        },
      },
    };
  }

   render() {
    return (
      <div>
        <div className="d-flex justify-content-around row">
          <div>
          <div className="d-flex justify-content-around h3 row">
          My Uploads
          </div>
            {this.state.datasetUploads.map((datasetId, i) => {
              return (
                <div style={{ padding: "1rem" }}>
                  <div
                    className="card"
                    style={{ flex: 1, width: "30rem", borderRadius: "20px" }}
                  >
                    <div
                      className="card-header"
                      style={{
                        flex: 1,
                        backgroundColor: "#dddddd",
                        padding: "100x",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex row">
                        <h5 style={{ flex: 1, padding: "0.5rem" }}>
                          {datasetId.name}
                        </h5>
                        <div className="d-flex flex-row-reverse">
                          <Link
                            to={`/details/${datasetId.name}`}
                            className="btn btn-secondary"
                            style={{
                              borderRadius: "20px",
                              left: "10px",
                              textAlign: "center",
                            }}
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{datasetId.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>



          <div>
            <div className="d-flex justify-content-around h3 row">
            My Subscriptions
            </div>

            {this.state.datasetSubscriptions.map((datasetId, i) => {
              return (
                <div style={{ padding: "1rem" }}>
                  <div
                    className="card"
                    style={{ flex: 1, width: "30rem", borderRadius: "20px" }}
                  >
                    <div
                      className="card-header"
                      style={{
                        flex: 1,
                        backgroundColor: "#dddddd",
                        padding: "100x",
                        borderRadius: "20px",
                      }}
                    >
                      <div className="d-flex row">
                        <h5 style={{ flex: 1, padding: "0.5rem" }}>
                          {datasetId.name}
                        </h5>
                        <div className="d-flex flex-row-reverse">
                          <Link
                            to={`/details/${datasetId.name}`}
                            className="btn btn-secondary"
                            style={{
                              borderRadius: "20px",
                              left: "10px",
                              textAlign: "center",
                            }}
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{datasetId.description}</p>
                      <hr/>
                      <p className="card-text">Subscription ends on:  {this.state.subscriptions[datasetId.id].endDate}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>



        </div>
      </div>
    );
  }
}
