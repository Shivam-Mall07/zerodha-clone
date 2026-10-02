import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        {/* Left Side: Illustration / Branding */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/signup.png"
            alt="Signup Illustration"
            className="img-fluid"
            style={{ maxHeight: '350px' }}
          />
          <h2 className="mt-4 fw-bold">Start Investing Today</h2>
          <p className="text-muted fs-6">
            Join thousands of traders using our seamless ecosystem for stocks, derivatives, and mutual funds.
          </p>
        </div>

        {/* Right Side: Signup Form */}
        <div className="col-md-5 offset-md-1">
          <div className="card shadow-sm border-0 p-4">
            <h3 className="card-title fw-bold mb-3">Signup</h3>
            <p className="text-muted mb-4 fs-7">Track your portfolio with zero brokerage fees.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John Doe"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="d-grid gap-2 mt-4">
                <button type="submit" className="btn btn-primary btn-lg fs-6">
                  Continue
                </button>
              </div>
            </form>

            <p className="text-center text-muted mt-4 mb-0 fs-7">
              Already have an account? <a href="/login" className="text-decoration-none">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;