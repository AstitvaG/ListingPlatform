import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datasets: [
        {
          id: "",
          name: "",
          description: "",
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({
      datasets: [
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
        <div className="d-flex justify-content-around row">
          <div>
            <div
              className="flex justify-content-around row"
              style={{
                backgroundColor: "#dddddd",
                borderRadius: "20px",
                width: "18rem",
                height: '14rem'
              }}
            >
              <div style={{ fontSize: "30px", textAlign: "center", padding:'2rem' }}>
                Exlpore More
              </div>
              <div className="side-props-dt">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{borderRadius:'20px'}}
                >
                  Filter Datasets
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
               
                </div>
              </div>
              <div className="side-props-dt">
              <button
                  className="btn btn-secondary"
                  type="button"
                 
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{borderRadius:'20px'}}
                  onClick={(e) => this.onUpload()}

                >
                  Upload new Dataset

                </button>
              </div>
            </div>
          </div>

          <div>
            {this.state.datasets.map((datasetId, i) => {
              return (
                <div style={{ padding: "1rem" }}>
                  <div
                    className="card"
                    style={{ flex: 1, width: "60rem", borderRadius: "20px" }}
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
        </div>
      </div>
    );
  }
}
