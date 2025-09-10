// import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const SignIn = () => {


    const {signInUser}=useContext(AuthContext);

    const handleSignIn=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        alert("success");

        signInUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error);
        })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      {/* lottie animation here */}
        {/* <Lottie className='lg:w-[200px] w-[150px]' animationData={register} loop={true}></Lottie> */}

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign In</h1>
        <form onSubmit={handleSignIn}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
        </div>
    );
};

export default SignIn;