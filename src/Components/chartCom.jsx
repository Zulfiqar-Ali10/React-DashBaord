import React from 'react'
import SlideBar from './slideBarCom'
import Navbar from './Navbar'

export default function Chart() {
  return (
  <>
  <div className="container-fluid page-body-wrapper">
  {/* partial:../../partials/_sidebar.html */}
 <Navbar/>
 <SlideBar/>
  {/* partial */}
  <div className="main-panel">
    <div className="content-wrapper">
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Line chart</h4>
              <canvas id="lineChart" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bar chart</h4>
              <canvas id="barChart" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Area chart</h4>
              <canvas id="areaChart" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Doughnut chart</h4>
              <div className="doughnutjs-wrapper d-flex justify-content-center">
                <canvas
                  id="doughnutChart"
                  style={{ height: "250px !important" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Pie chart</h4>
              <div className="doughnutjs-wrapper d-flex justify-content-center">
                <canvas id="pieChart" style={{ height: "250px !important" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Scatter chart</h4>
              <canvas id="scatterChart" />
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
