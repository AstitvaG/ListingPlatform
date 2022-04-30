import React, { Component } from 'react';
import axios from 'axios';
import './css/Landing.css'
import { Link } from 'react-router-dom'
export default class LandingPage extends Component {

	constructor(props) {
		super(props);

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
							<Link to="/auth" class="btn btn-success" style={{ 'border-radius': '10px', fontSize: '20px' }}>Explore Datasets</Link>
						</div>
					</div>
					<div class="card ml-3 p-5" style={{ borderRadius: '20px', background: '#eeeeee' }}>
						<img class="card-img-top" src={require('./img/challenge.png')} alt="Card image cap" />
						<div class="card-body">
							<h2 class="card-title"><b>ML challenges</b></h2>
							<p class="card-text">A curated list of some interesting ML challenges. </p>
							<a href="#" class="btn btn-success" style={{ 'border-radius': '10px', fontSize: '20px' }}>Explore ML challenges</a>
						</div>
					</div>
				</div>
			</div>

		)
	}
}