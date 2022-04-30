import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class Listings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      datasets: Object.entries({
        id: {
          id: "",
          name: "",
          description: "",
          tags: [],
          versions: "",
          uploadBy: "",
          uploadDate: "", //DDMMYYYY
          dataType: "", //csv,json
        },
      }),
      displayDataset: Object.entries({
        id: {
          id: "",
          name: "",
          description: "",
          tags: [],
          versions: "",
          uploadBy: "",
          uploadDate: "", //DDMMYYYY
          dataType: "", //csv,json
        },
      }),
    };
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
    let datasets = {
      1: {
        id: "1",
        name: "DATASET1",
        description:
          'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        tags: ["Medical"],
        versions: "",
        uploadBy: "",
        uploadDate: "02032009", //DDMMYYYY
        dataType: "csv", //csv,json
      },
      2: {
        id: "2",
        name: "DATASET2",
        description:
          'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        tags: ["Non-Medical"],
        versions: "",
        uploadBy: "",
        uploadDate: "22032009", //DDMMYYYY
        dataType: "json", //csv,json
      },
      3: {
        id: "3",
        name: "DATASET3",
        description:
          'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        tags: ["Non-Medical"],
        versions: "",
        uploadBy: "",
        uploadDate: "22102019", //DDMMYYYY
        dataType: "json", //csv,json
      },
      4: {
        id: "4",
        name: "DATASET4",
        description:
          'Alternate bind version (for css-modules If you are using css-modules, or a similar approach to abstract class "names" and the real className values that are actually output to the DOM, you may want to use the bind variant',
        tags: ["Medical"],
        versions: "",
        uploadBy: "",
        uploadDate: "04102022", //DDMMYYYY
        dataType: "json", //csv,json
      },
    };
    // TODO
    // axios.get(`${backend_url}/get_details/${this.state.dataset_slug}`).then(res => {
    //     this.setState({
    //         displayDataset: res.data,
    //         datasets: res.data,
    //         loading: false
    //     });
    // })
    this.setState({
      displayDataset: Object.entries(datasets),
      datasets: Object.entries(datasets),
    });
  }

  onUpload(e) {
    //send request to upload team.
  }

  filterByTags(tagName) {
    console.log(tagName);
    const newItem = this.state.datasets.filter((newVal) => {
      return newVal[1].tags.includes(tagName);
      // comparing category for displaying data
    });
    this.setState({ displayDataset: newItem });
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
            <div
              className="flex justify-content-around row"
              style={{
                backgroundColor: "#dddddd",
                borderRadius: "20px",
                width: "18rem",
                height: "10rem",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Contribute
              </div>

              <div className="side-props-dt">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => this.onUpload()}
                >
                  Upload new Dataset
                </button>
              </div>
            </div>

            <br />
            <br />

            <div
              className="flex justify-content-around row"
              style={{
                backgroundColor: "#dddddd",
                borderRadius: "20px",
                width: "18rem",
                height: "20rem",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                Exlpore More
              </div>

              <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="Filter by Tags"
                style={{ borderRadius: "20px" }}
              >
                <Dropdown.Item onClick={() => this.filterByTags("Medical")}>
                  Medical
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.filterByTags("Non-Medical")}>
                  Non-Medical
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.filterByTags("etc")}>
                  Something else
                </Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="Sort By Upload Date"
                style={{ borderRadius: "20px" }}
              >
                <Dropdown.Item
                  onClick={() => this.sortUploadDate("Increasing")}
                >
                  Newer To Older
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.sortUploadDate("Decreasing")}
                >
                  Older To Newer
                </Dropdown.Item>
              </DropdownButton>

              <DropdownButton
                variant="secondary"
                menuVariant="dark"
                title="Sort By Download Size"
                style={{ borderRadius: "20px" }}
              >
                <Dropdown.Item
                  onClick={() => this.sortDownloadSize("Increasing")}
                >
                  Increasing
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => this.sortDownloadSize("Decreasing")}
                >
                  Decreasing
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </div>

          <div>
            {this.state.displayDataset.map((datasetId, i) => {
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
                          {datasetId[1].name}
                        </h5>
                        <div className="d-flex flex-row-reverse">
                          <Link
                            to={`/details/${datasetId[1].name}`}
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
                      <p className="card-text">{datasetId[1].description}</p>
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
