import React, { Component } from 'react';
import axios from 'axios';
import './css/Dashboard.css'
import { Link } from 'react-router-dom'
export default class ProfilePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      datasets: {
        "1": {
          id: "1",
          name: "DATASET1",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
          tags: ["Medical"],
          versions: "",
          uploadBy: "",
          uploadDate: "20191201", //yyyymmdd
          dataType: "csv", //csv,json,
          downloadSize: "1",//in GB

        },
        "2": {
          id: "2",
          name: "DATASET2",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
          tags: ["Non-Medical"],
          versions: "",
          uploadBy: "",
          uploadDate: "20031209",  //YYYYmmdd
          dataType: "json", //csv,json,
          downloadSize: "20",//in GB

        },
        "3": {
          id: "3",
          name: "DATASET3",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
          tags: ["Non-Medical"],
          versions: "",
          uploadBy: "",
          uploadDate: "20190122", //YYYYmmdd
          dataType: "json", //csv,json,
          downloadSize: "55",//in GB

        },
        "4": {
          id: "4",
          name: "DATASET4",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
          tags: ["Medical"],
          versions: "",
          uploadBy: "",
          uploadDate: "20191112", //yyyymmdd
          dataType: "json", //csv,json,
          downloadSize: "0",//in GB

        },
        "5": {
          id: "5",
          name: "DATASET5",
          description:
            'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
          tags: [],
          versions: "",
          uploadBy: "",
          uploadDate: "20221112", //yyyymmdd
          dataType: "json", //csv,json,
          downloadSize: "10",//in GB

        },
      },
      uploads: [
        "1", "2",
      ],
      subscriptions: {

        "1":
        {
          id: "1",
          startDate: "2-10-22",
          endDate: "10-10-22",
          approvalStatus: "Approved"
        },
        "2":
        {
          id: "2",
          startDate: "2-10-22",
          endDate: "20-10-22",
          approvalStatus: "Approved"

        },
        "3":
        {
          id: "3",
          startDate: "2-10-22",
          endDate: "30-10-22",
          approvalStatus: "Approved"

        },
        "4":
        {
          id: "4",
          startDate: "",
          endDate: "",
          approvalStatus: "Pending"

        },
      },
    };
  }
  componentDidMount = () => {
    let prevAuthDetails = sessionStorage.getItem("userdata_listing")
    if (prevAuthDetails === null) {
      window.history.pushState({}, '', `/auth`)
      window.location.reload()
    }
    else {
      this.setState({ loading: false })
    }
  }

  render() {
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
        <div className="d-flex justify-content-around row">
          <div>
            <div className="d-flex justify-content-around h3 row">
              My Uploads
            </div>
            {this.state.uploads.map((datasetId, i) => {
              return (
                <div style={{ padding: "1rem" }}>
                  {console.log("ghvfhd", datasetId)}
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
                          {this.state.datasets[datasetId].name}
                        </h5>
                        <div className="d-flex flex-row-reverse">
                          <Link
                            to={`/details/${this.state.datasets[datasetId].id}`}
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
                      <p className="card-text">{this.state.datasets[datasetId].description}</p>
                      <hr />
                      <p> Uploaded on:  {this.state.datasets[datasetId].uploadDate}
                      </p>
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
            {Object.entries(this.state.subscriptions).map((datasetId, i) => {
              // {this.state.subscriptions.map((datasetId, i) => {
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
                          {this.state.datasets[datasetId[1].id].name}
                        </h5>
                        <div className="d-flex flex-row-reverse">
                          <Link
                            to={`/details/${this.state.datasets[datasetId[1].id].id}`}
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
                      <p className="card-text">{this.state.datasets[datasetId[1].id].description}</p>
                      <hr />
                      {
                        datasetId[1].id != undefined
                        &&
                        datasetId[1].startDate === ""
                        &&
                        <p className="card-text">Subscription Pending!</p>
                      }
                      {
                        datasetId[1].id != undefined
                        &&
                        datasetId[1].startDate != ""
                        &&
                        <p className="card-text">Subscription ends on: {datasetId[1].endDate}</p>
                      }
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