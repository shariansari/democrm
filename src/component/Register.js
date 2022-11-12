import React from 'react'
import Form from "react-bootstrap/Form";
import { NavLink } from 'react-router-dom';


function Register() {
  return (
    <div className="container doCenter">

      <Form>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <p className="log">
                    <span style={{ color: "Purple" }}>Si</span>
                    <span style={{ color: "blue" }}>gn</span>
                    <span style={{ color: "green" }}>Up</span>
                  </p>
                  {/* Email input */}
                  <div className="form-outline mb-2">
                    <input
                      type="text"
                     
                      className="form-control form-control-lg"
                      placeholder="Enter Your Name"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Full Name
                    </label>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-2">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="password"
                    
                      className="form-control form-control-lg"
                      placeholder="Confirm password"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                       Repeat Password
                    </label>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                  </div>
                  <div className="text-center text-lg-start mt-0 pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg col-12 mb-0"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    >
                      Sign Up
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Alreadey have an Account ?{" "}
                      <NavLink to="/" className="link-danger">
                        Login
                      </NavLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Form>
    </div>
    
  )
}

export default Register