import React from 'react'

export default function Login() {
  return (
  <>
  <div className="container-scroller">
  <div className="container-fluid page-body-wrapper full-page-wrapper">
    <div className="content-wrapper d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img src="/images/logo.svg" alt="logo" />
            </div>
            <h4>Hello! let's get started</h4>
            <h6 className="fw-light">Sign in to continue.</h6>
            <form className="pt-3">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mt-3 d-grid gap-2">
                <a
                  className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn"
                  href="../../index.html"
                >
                  SIGN IN
                </a>
              </div>
              <div className="my-2 d-flex justify-content-between align-items-center">
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" /> Keep
                    me signed in{" "}
                  </label>
                </div>
                <a href="#" className="auth-link text-black">
                  Forgot password?
                </a>
              </div>
              <div className="mb-2 d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-block btn-facebook auth-form-btn"
                >
                  <i className="ti-facebook me-2" />
                  Connect using facebook{" "}
                </button>
              </div>
              <div className="text-center mt-4 fw-light">
                {" "}
                Don't have an account?{" "}
                <a href="register.html" className="text-primary">
                  Create
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>

  </>    
)
}
