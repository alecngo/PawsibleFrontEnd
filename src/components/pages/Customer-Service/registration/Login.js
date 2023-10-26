import React from 'react';

const LoginForm = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Login</h5>
              <form action="#">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <div className="form-group text-center">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="form-group text-center">
                  Don't have an account? <a href="#">Sign up now</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
