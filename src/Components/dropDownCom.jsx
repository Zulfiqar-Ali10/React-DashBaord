import React from 'react'
import Navbar from './NavbarCom'
import SlideBar from './slideBarCom'

export default function DropDown() {
  return (
<>
<div className="container-fluid page-body-wrapper">
  <Navbar/>
  <SlideBar/>
  {/* partial:../../partials/_sidebar.html */}
 
  {/* partial */}
  <div className="main-panel">
    <div className="content-wrapper">
      <div className="row">
        <div className="col-lg-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Dropdown menu</h4>
              <div className="row">
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton3"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton3"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-warning dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton4"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton4"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-light dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton8"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton8"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-success dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton5"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton5"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-info dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton6"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton6"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 dropdown-menu-static-demo">
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton7"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      {" "}
                      Dropdown{" "}
                    </button>
                    <div
                      className="dropdown-menu show"
                      aria-labelledby="dropdownMenuButton7"
                    >
                      <h6 className="dropdown-header">Settings</h6>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Split button dropdowns</h4>
              <p className="card-description">
                {" "}
                Wrap two buttons in <code>.btn-group</code> and add{" "}
                <code>.dropdown-toggle-split</code> to the toggling button{" "}
              </p>
              <div className="template-demo">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuSplitButton1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSplitButton1"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-danger">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuSplitButton2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSplitButton2"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-success">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-success dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuSplitButton3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSplitButton3"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-secondary">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuSplitButton4"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSplitButton4"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-info">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuSplitButton5"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSplitButton5"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-warning">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                    id="dropdownMenuSplitButton6"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSplitButton6"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Icon dropdowns</h4>
              <p className="card-description">
                {" "}
                Add icon tags instead of text{" "}
              </p>
              <div className="row">
                <div className="col-12">
                  <div className="template-demo d-flex justify-content-between flex-wrap">
                    <div className="dropdown">
                      <button
                        className="btn btn-warning dropdown-toggle"
                        type="button"
                        id="dropdownMenuIconButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-world" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton1"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-danger dropdown-toggle"
                        type="button"
                        id="dropdownMenuIconButton2"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-cup" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton2"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-info dropdown-toggle"
                        id="dropdownMenuIconButton3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-time" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton3"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="template-demo d-flex justify-content-between flex-wrap">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        id="dropdownMenuIconButton4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-heart" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton4"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle"
                        id="dropdownMenuIconButton5"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-power-off" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton5"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuIconButton6"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-lock" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton6"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="template-demo d-flex justify-content-between flex-wrap">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dark dropdown-toggle"
                        id="dropdownMenuIconButton7"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-user" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton7"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-info dropdown-toggle"
                        id="dropdownMenuIconButton8"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-bell" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton8"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-success dropdown-toggle"
                        id="dropdownMenuIconButton9"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ti-user" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuIconButton9"
                      >
                        <h6 className="dropdown-header">Settings</h6>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Separated link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Dropup variation</h4>
              <p className="card-description">
                {" "}
                Add class <code>.dropup</code>
              </p>
              <div className="template-demo">
                <div className="btn-group dropup">
                  <button type="button" className="btn btn-primary">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                    id="dropupMenuSplitButton1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropupMenuSplitButton1"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group dropup">
                  <button type="button" className="btn btn-danger">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                    id="dropupMenuSplitButton2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropupMenuSplitButton2"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group dropup">
                  <button type="button" className="btn btn-success">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-success dropdown-toggle dropdown-toggle-split"
                    id="dropupMenuSplitButton3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropupMenuSplitButton3"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group dropup">
                  <button type="button" className="btn btn-secondary">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                    id="dropupMenuSplitButton4"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropupMenuSplitButton4"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group dropup">
                  <button type="button" className="btn btn-info">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                    id="dropupMenuSplitButton5"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropupMenuSplitButton5"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="btn-group dropup">
                  <button type="button" className="btn btn-warning">
                    Dropdown
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                    id="dropupMenuSplitButton6"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropupMenuSplitButton6"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Dropdown sizes</h4>
              <p className="card-description">
                {" "}
                Add class{" "}
                <code>
                  .btn-{"{"}size{"}"}
                </code>{" "}
                to dropdown buttons{" "}
              </p>
              <div className="template-demo mt-5">
                <div className="dropdown">
                  <button
                    className="btn btn-danger btn-lg dropdown-toggle"
                    type="button"
                    id="dropdownMenuSizeButton1"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSizeButton1"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-danger dropdown-toggle"
                    type="button"
                    id="dropdownMenuSizeButton2"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSizeButton2"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-danger btn-sm dropdown-toggle"
                    type="button"
                    id="dropdownMenuSizeButton3"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    Dropdown{" "}
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuSizeButton3"
                  >
                    <h6 className="dropdown-header">Settings</h6>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* content-wrapper ends */}
    {/* partial:../../partials/_footer.html */}
    <footer className="footer">
      <div className="d-sm-flex justify-content-center justify-content-sm-between">
        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
          Premium{" "}
          <a href="https://www.bootstrapdash.com/" target="_blank">
            Bootstrap admin template
          </a>{" "}
          from BootstrapDash.
        </span>
        <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">
          Copyright © 2023. All rights reserved.
        </span>
      </div>
    </footer>
    {/* partial */}
  </div>
  {/* main-panel ends */}
</div>

</>
)
}
