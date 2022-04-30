import React, { Component } from 'react';
import axios from 'axios';
import './css/Auth.css';
import { toast } from 'react-toastify';


export default class CreateUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      logging: true,
      admin: false,
    }
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  onChangeAdmin = (event) => {
    console.log(event.target.checked)
    this.setState({ admin: event.target.checked });
  }

  pagetoast = (txt) => {
    toast.dark(txt, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();




    if (this.state.logging) {
      const newUser = {
        email: this.state.email,
        password: this.state.password
      }

      //sending credentials
      axios.post('http://localhost:4000/login', newUser)
        .then(res => {
          if (res.data?.success === true) {
            sessionStorage.setItem("userdata_listing", JSON.stringify(res.data.authInfo))
            this.pagetoast("Logged in successfully 🏆")
          }
          else {
            sessionStorage.removeItem("userdata_listing")
            this.pagetoast("Login failed ⚠️")
          }
        });

      this.setState({
        email: '',
        password: '',
      });
    }

    else {
      const newUser = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        admin: this.state.admin,
      }

      //sending credentials
      axios.post('http://localhost:4000/register', newUser)
        .then(res => {
          if (res.data?.success === true) {
            if (res.data?.success === true) {
              sessionStorage.setItem("userdata_listing", JSON.stringify(res.data.authInfo))
              this.pagetoast("Register successfull 🎯")
            }
            else {
              sessionStorage.removeItem("userdata_listing")
              this.pagetoast("Registeration failed ⚠️")
            }
          }
        });

      this.setState({
        email: '',
        password: '',
      });
    }

  }

  componentDidMount = () => {
    let prevAuthDetails = sessionStorage.getItem("userdata_listing")
    if (prevAuthDetails !== null) {
      this.pagetoast("Already logged in ✅")
    }
    sessionStorage.removeItem("userdata_listing")
  }

  render() {
    return (
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt=""></img>
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={this.onSubmit}>
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">{this.state.logging ? "Sign in" : "Create your account"}</p>
                </div>


                <div class="form-outline mb-4">
                  <label class="form-label" >Email address</label>
                  <input type="email" class="form-control form-control-lg"
                    placeholder="Enter your email address" value={this.state.email} onChange={this.onChangeEmail} />
                </div>

                {!this.state.logging && <div class="form-outline mb-4">
                  <label class="form-label" >Full Name</label>
                  <input type="text" class="form-control form-control-lg"
                    placeholder="Enter your name" value={this.state.name} onChange={this.onChangeName} />
                </div>}

                <div class="form-outline mb-3">
                  <label class="form-label" >Password</label>
                  <input type="password" class="form-control form-control-lg"
                    placeholder="Enter password" value={this.state.password} onChange={this.onChangePassword} />
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    {!this.state.logging &&
                      <>
                        <input class="form-check-input me-2" type="checkbox" checked={this.state.admin} onChange={this.onChangeAdmin} />
                        <label class="form-check-label" >
                          Register as Admin
                        </label>
                      </>
                    }
                  </div>
                  <a href="#!" class="text-body">Forgot password?</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" class="btn btn-primary btn-lg" style={{ 'padding-left': '2.5rem', 'padding-right': '2.5rem' }}>{this.state.logging ? "Login" : "Register"}</button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">{this.state.logging ? "Don't have an account?" : "Do you have an account ?"} <a onClick={() => this.setState({ logging: !this.state.logging })} class="link-danger">{this.state.logging ? "Register" : "Log In"}</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div class="text-white mb-3 mb-md-0">
            Copyright © 2022. All rights reserved.
          </div>

          <div>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    )
  }
}