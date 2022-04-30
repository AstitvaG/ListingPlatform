import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Auth from './components/Auth'
import Listing from './components/Listing'
import Landing from './components/Landing'
import Details from './components/Details'
import Dashboard from './components/Dashboard'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<Router>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link to="/" className="navbar-brand">Home</Link>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/dashboard" className="nav-link">Dashboard</Link>
							</li>
							<li className="navbar-item">
								<Link to="/listing" className="nav-link">Dataset List</Link>
							</li>
							<li className="navbar-item">
								<Link to="/details/dataset-slug" className="nav-link">Details</Link>
							</li>
							<li className="navbar-item">
								<Link to="/auth" className="nav-link">Login/Signup</Link>
							</li>
							<li className="navbar-item">
								<Link to="/auth" className="nav-link">Logout</Link>
							</li>
						</ul>
					</div>
				</nav>

				<br />
				<Switch>
					<Route path="/" exact component={Landing} />
					<Route path="/auth" exact component={Auth} />
					<Route path="/listing" component={Listing} />
					<Route path="/details/:id" component={Details} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
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

export default App;
