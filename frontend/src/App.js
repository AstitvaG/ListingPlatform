import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Auth from './components/Auth'
import Listing from './components/Listing'
import Landing from './components/Landing'
import Details from './components/Details'
import Dashboard from './components/Dashboard'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {

	state = {
		userdata: null
	}

	componentDidMount = () => {
		let prevAuthDetails = sessionStorage.getItem("userdata_listing")
		this.setState({ userdata: JSON.parse(prevAuthDetails) })
	}

	render() {
		return (
			<Router>
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link to="/" className="navbar-brand">Home</Link>
						<div className="collapse navbar-collapse justify-content-between">
							<ul className="navbar-nav mr-auto">
								<li className="navbar-item">
									<Link to="/listing" className="nav-link">Dataset List</Link>
								</li>
								{/* <li className="navbar-item">
									<Link to="/details/dataset-slug" className="nav-link">Details</Link>
								</li> */}
								{this.state.userdata !== null && this.state.userdata.admin===true && <li className="navbar-item">
									<Link to="/admin-portal" className="nav-link">Admin Portal</Link>
								</li>}
							</ul>
							<ul className="navbar-nav ml-auto">
								{this.state.userdata === null && <li className="navbar-item">
									<Link to="/auth" className="nav-link">Login/Signup</Link>
								</li>}
								{this.state.userdata !== null && <li className="navbar-item">
									<Link to="/auth" className="nav-link">Hey, {this.state.userdata.name}{this.state.userdata.admin ? " (Admin)" : ""}!</Link>
								</li>}
								{this.state.userdata !== null && <li className="navbar-item ml-3">
									<Link to="/dashboard" className="nav-link">My Profile</Link>
								</li>}
								{this.state.userdata !== null && <li className="navbar-item ml-3">
									<Link onClick={() => {
										sessionStorage.removeItem("userdata_listing");
										window.location.reload()
									}} className="nav-link">Logout</Link>
								</li>}
							</ul>
						</div>
					</nav>

					<br />
					<Switch>
						<Route path="/" exact component={Landing} />
						<Route path="/auth" exact component={Auth} />
						<Route path="/listing" component={Listing} />
						<Route path="/details/:id" component={Details} />
						<Route path="/admin-portal" render={() => {
							return <div>
								<h1>Admin Portal</h1>
								<h3>Managed by other team</h3>
							</div>
						}} />
						<Route path="/upload" render={() => {
							return <div>
								<h1>Upload Portal</h1>
								<h3>Managed by other team</h3>
							</div>
						}} />
						<Route path="/dashboard" component={Dashboard} />
					</Switch>
				</div>
				<ToastContainer
					position="bottom-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</Router>
		);
	}
}

export default App;