import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { NavLink } from 'react-router-dom';

function Homepage() {
    const Navigate =useNavigate()
    const [inputval, setInputval] = useState({
        
          email: "",
        password: "",
      });
    
    
      const getData = (e) => {
        const {name,value} =e.target;
        // console.log(name,value,"shariq")
        setInputval(()=>{
          return{
            ...inputval,[name]:value
          }

        })
      };
        const addData=(e)=>{
          e.preventDefault();
          const getuserArr=localStorage.getItem("usercrm");
          console.log(getuserArr)
          const {email,password} =inputval;
    
          if(!email ||!password){
            toast.error("fields cant be empty",{
              position:"top-center"
            })
          }
          else if(!email.includes("@")){
            toast.error("Please Enter Valid email",{
              position:"top-center"
            })
          }
          
          else if ( password.length<5){
            toast.error("Password Should not be less than five",{
              position:"top-center"
            })
          }
          else{
        
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((element) => {
                    return element.email === email && element.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    // console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    Navigate("/main")
                }
            }
        }
    
          
        }
     
  return (
    <div>
        <div className="doColor">
      <div className="container doCenter">
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
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 doShadow">
                <form>
                  <p className="log">
                    <span style={{ color: "Black" }}>L</span>
                    <span style={{ color: "blue" }}>og</span>
                    <span style={{ color: "green" }}>in</span>
                  </p>
                  {/* Email input */}
                  <div className="form-outline mb-2">
                    <input
                      type="email"
                      name="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      onChange={getData}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-2">
                    <input
                      name="password"
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      onChange={getData}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                 
                  <div className="d-flex justify-content-between align-items-center"></div>
                  <div className="text-center text-lg-start mt-0 pt-2">
                    <button
                      className="btn btn-primary btn-lg col-12 mb-0"
                      style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      type="Submit"
                      onClick={addData}
                    >
                       Login
                     
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account ?{" "}
                      <NavLink to="/" className="link-danger">
                        Register
                      </NavLink>
                    </p>
                    <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer/>
        </section>
      </div>
    </div>
    </div>
  )
}

export default Homepage