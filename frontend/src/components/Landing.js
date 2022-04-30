import React, { Component } from "react";
import axios from "axios";
import "./css/Landing.css";
import { Link } from "react-router-dom";
export default class LandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			subscriptions: {
				id: {
					id: "",
					startDate: "",
					endDate: "",
					approvalStatus: "",
				},
			},
		};
	}

	componentDidMount() {
		this.setState({
			subscriptions: {
				"1": {
					id: "1",
					startDate: "2-10-22",
					endDate: "10-10-22",
					approvalStatus: "Approved",
				},
				"2": {
					id: "2",
					startDate: "2-10-22",
					endDate: "20-10-22",
					approvalStatus: "Approved",
				},
				"3": {
					id: "3",
					startDate: "2-10-22",
					endDate: "30-10-22",
					approvalStatus: "Approved",
				},
				"4": {
					id: "4",
					startDate: "",
					endDate: "",
					approvalStatus: "Pending",
				},
			},
		}, () => {

			sessionStorage.setItem("subscriptionData", JSON.stringify(this.state.subscriptions));
		});
		// TODO
		// axios.get(`${backend_url}/get_subscription_data/${this.state.dataset_slug}`).then(res => {
		//     this.setState({
		//         subscriptions: res.data,
		//         loading: false
		//     });
		// })
	}

	state = {

	}

	render() {
		return (

			<div align='center'>
				<div class="card-group" style={{ 'width': '60rem' }}>
					<div class="card mr-3 p-5" style={{ borderRadius: '20px', background: '#eeeeee' }}>
						<img class="card-img-top" src={require('./img/dataset.png')} alt="Card image cap" />
						<div class="card-body">
							<h2 class="card-title"><b>Datasets</b></h2>
							<p class="card-text">A curated list of some interesting datasets upladed by various people.
							</p>
							<Link to="/auth" class="btn btn-secondary" style={{ 'border-radius': '10px', fontSize: '20px' }}>Explore Datasets</Link>
						</div>
					</div>
					<div class="card ml-3 p-5" style={{ borderRadius: '20px', background: '#eeeeee' }}>
						<img class="card-img-top" src={require('./img/challenge.png')} alt="Card image cap" />
						<div class="card-body">
							<h2 class="card-title"><b>ML challenges</b></h2>
							<p class="card-text">A curated list of some interesting ML challenges. </p>
							<a href="#" class="btn btn-secondary" style={{ 'border-radius': '10px', fontSize: '20px' }}>Explore ML challenges</a>
						</div>
					</div>
				</div>
			</div>

		)
	}
}
