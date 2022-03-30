import React from 'react'


//custom style
import "../authStyle/auth.style.css";

//images
import rectangle from "../../../assets/img/bg.svg"
import lock from "../../../assets/img/lock.png";
import twitter from "../../../assets/img/twitter-social.svg"
import near from "../../../assets/img/Near.svg";
import google from "../../../assets/img/Google.svg";
import or from "../../../assets/img/- OR -.svg";


// forms handling
import { Formik } from 'formik';
import { loginSchema } from "../utils/"

// form inputs
import { TextField } from '../components/TextField';


//router links
import { Link } from 'react-router-dom';



const Login = () => {



  const onLogin = (event, values) => {
    event.preventDefault();
    //get userdata
    const userData = {
      email: values.email,
      password: values.password
    };

    console.log(userData);

  }

  return (

    <div className='background-container'>
      <div className='container auth-container'>
        <div className='row justify-content-center'>
          <div className="card custom-card px-0" >
            <div className="card-body p-0">
              <div className='container p-0'>
                <div className="row justify-content-center" >
                  <div className='col-md-4 background-lock '>
                    <div className='position-relative'>
                      <img src={rectangle} alt="rectangle" />
                      <img className='lock-image' src={lock} alt="lock" />
                    </div>
                  </div>
                  <div className='col-md-8 create-account flex-column align-items-center d-flex justify-content-center'>
                    <div className='heading-auth d-flex flex-column align-items-center'>
                      <h2 className='mb-4'>Login to your Account </h2>
                      <div className='social-media-auth d-flex '>
                        <div><a href=""><img src={twitter} alt="twitter" /></a></div>
                        <div><a href=""><img src={google} alt="google" /></a></div>
                        <div><a href=""><img src={near} alt="near" /></a></div>
                      </div>
                      <div className='or mt-3'>
                        <div><img src={or} alt="or" /></div>
                      </div>
                    </div>
                    <div className='auth-form-container container'>
                      <div className="row justify-content-center">
                        <div className="col-8">
                          <Formik
                            initialValues={{
                              email: "",
                              password: "",
                            }}
                            validationSchema={loginSchema}
                            onSubmit={(values, e) => {
                              console.log(values);
                            }}
                          >
                            {({
                              values,
                              isValid,
                              dirty
                            }) => (
                              <form noValidate className='mb-4'>
                                <TextField
                                  placeholder="Email"
                                  name="email"
                                  type="email" />
                                <TextField
                                  placeholder="Password"
                                  name="password"
                                  type="password" />

                                <button disabled={!(isValid && dirty)} className='btn btn-primary primary-button mt-4 w-100' onClick={(event) => onLogin(event, values)}>Login </button>
                              </form>

                            )}
                          </Formik>
                          <div className='to-login-container text-center'>
                            <p>no account? <span className='primary-text '> <Link to={"/Auth/Register"}>Create an account</Link></span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Login