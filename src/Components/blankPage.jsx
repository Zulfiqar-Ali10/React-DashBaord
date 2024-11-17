import React from 'react'

import SlideBar from './slideBarCom'
import Navbar from './Navbar'


export default function Blank() {
  return (
   <>

<div className="container-fluid page-body-wrapper">
  {/* partial:../../partials/_sidebar.html */}
<Navbar/>
<SlideBar/>
  {/* partial */}
  <div className="main-panel">
    <div className="content-wrapper"></div>
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
