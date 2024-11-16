import React from 'react'
import Navbar from './NavbarCom'
import SlideBar from './slideBarCom'

export default function TypoGraphy() {
    return (
        <>

<div className="container-fluid page-body-wrapper">
 
 <Navbar/>
 <SlideBar/>
  {/* partial */}
  <div className="main-panel">
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Headings</h4>
              <p className="card-description">
                {" "}
                Add tags <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> or
                class <code>.h1</code> to <code>.h6</code>
              </p>
              <div className="template-demo">
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Headings with secondary text</h4>
              <p className="card-description">
                {" "}
                Add faded secondary text to headings{" "}
              </p>
              <div className="template-demo">
                <h1>
                  {" "}
                  h1. Heading{" "}
                  <small className="text-muted"> Secondary text </small>
                </h1>
                <h2>
                  {" "}
                  h2. Heading{" "}
                  <small className="text-muted"> Secondary text </small>
                </h2>
                <h3>
                  {" "}
                  h3. Heading{" "}
                  <small className="text-muted"> Secondary text </small>
                </h3>
                <h4>
                  {" "}
                  h4. Heading{" "}
                  <small className="text-muted"> Secondary text </small>
                </h4>
                <h5>
                  {" "}
                  h5. Heading{" "}
                  <small className="text-muted"> Secondary text </small>
                </h5>
                <h6>
                  {" "}
                  h6. Heading{" "}
                  <small className="text-muted"> Secondary text </small>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Display headings</h4>
              <p className="card-description">
                {" "}
                Add class <code>.display1</code> to <code>.display-4</code>
              </p>
              <div className="template-demo">
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Paragraph</h4>
                  <p className="card-description">
                    {" "}
                    Write text in <code>&lt;p&gt;</code> tag{" "}
                  </p>
                  <p>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley not only five
                    centuries,{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Icon size</h4>
                  <p className="card-description">
                    {" "}
                    Add class <code>.icon-lg</code>, <code>.icon-md</code>,{" "}
                    <code>.icon-sm</code>
                  </p>
                  <div className="row">
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <i className="ti-package icon-lg text-warning" />
                        <p className="mb-0 ms-1"> Icon-lg </p>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <i className="ti-package icon-md text-success" />
                        <p className="mb-0 ms-1"> Icon-md </p>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <i className="ti-package icon-sm text-danger" />
                        <p className="mb-0 ms-1"> Icon-sm </p>
                      </div>
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
              <h4 className="card-title">Blockquotes</h4>
              <p className="card-description">
                {" "}
                Wrap content inside
                <code>&lt;blockquote class="blockquote"&gt;</code>
              </p>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
            </div>
            <div className="card-body">
              <blockquote className="blockquote blockquote-primary">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Address</h4>
              <p className="card-description">
                {" "}
                Use <code>&lt;address&gt;</code> tag{" "}
              </p>
              <div className="row">
                <div className="col-md-6">
                  <address>
                    <p className="fw-bold">Star Admin2 inc.</p>
                    <p> 695 lsom Ave, </p>
                    <p> Suite 00 </p>
                    <p> San Francisco, CA 94107 </p>
                  </address>
                </div>
                <div className="col-md-6">
                  <address className="text-primary">
                    <p className="fw-bold"> E-mail </p>
                    <p className="mb-2"> johndoe@examplemeail.com </p>
                    <p className="fw-bold"> Web Address </p>
                    <p> www.starAdminPro.com </p>
                  </address>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h4 className="card-title">Lead</h4>
              <p className="card-description">
                {" "}
                Use class <code>.lead</code>
              </p>
              <p className="lead">
                {" "}
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Text colors</h4>
              <p className="card-description">
                {" "}
                Use class <code>.text-primary</code>,{" "}
                <code>.text-secondary</code> etc. for text in theme colors{" "}
              </p>
              <div className="row">
                <div className="col-md-6">
                  <p className="text-primary">.text-primary</p>
                  <p className="text-success">.text-success</p>
                  <p className="text-danger">.text-danger</p>
                  <p className="text-warning">.text-warning</p>
                  <p className="text-info">.text-info</p>
                </div>
                <div className="col-md-6">
                  <p className="text-light bg-dark pl-1">.text-light</p>
                  <p className="text-secondary">.text-secondary</p>
                  <p className="text-dark">.text-dark</p>
                  <p className="text-muted">.text-muted</p>
                  <p className="text-white bg-dark pl-1">.text-white</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Top aligned media</h4>
              <div className="media">
                <i className="ti-world icon-md text-info d-flex align-self-start me-3" />
                <div className="media-body">
                  <p className="card-text">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Center aligned media</h4>
              <div className="media">
                <i className="ti-world icon-md text-info d-flex align-self-center me-3" />
                <div className="media-body">
                  <p className="card-text">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bottom aligned media</h4>
              <div className="media">
                <i className="ti-world icon-md text-info d-flex align-self-end me-3" />
                <div className="media-body">
                  <p className="card-text">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Highlighted Text</h4>
              <p className="card-description">
                {" "}
                Wrap the text in <code>&lt;mark&gt;</code> to highlight text{" "}
              </p>
              <p>
                {" "}
                It is a long{" "}
                <mark className="bg-warning text-white">established</mark> fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List Unordered</h4>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Bold text</h4>
              <p className="card-description">
                {" "}
                Use class<code>.fw-bold</code>
              </p>
              <p>
                {" "}
                It is a long <span className="fw-bold">
                  established fact
                </span>{" "}
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List Ordered</h4>
              <ol>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit&gt;</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-primary">Underline</h4>
              <p className="card-description">
                {" "}
                Wrap in <code>&lt;u&gt;</code> tag for underline{" "}
              </p>
              <p>
                <u>
                  lorem ipsum dolor sit amet, consectetur mod tempor incididunt
                  ut labore et dolore magna aliqua.
                </u>
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-danger">Lowercase</h4>
              <p className="card-description">
                {" "}
                Use class <code>.text-lowercase</code>
              </p>
              <p className="text-lowercase">
                {" "}
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut
                labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-warning">Uppercase</h4>
              <p className="card-description">
                {" "}
                Use class <code>.text-uppercase</code>
              </p>
              <p className="text-uppercase">
                {" "}
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut
                labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Mute</h4>
              <p className="card-description">
                {" "}
                Use class <code>.text-muted</code>
              </p>
              <p className="text-muted">
                {" "}
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut
                labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-success">Strike</h4>
              <p className="card-description">
                {" "}
                Wrap content in <code>&lt;del&gt;</code> tag{" "}
              </p>
              <p>
                <del>
                  {" "}
                  lorem ipsum dolor sit amet, consectetur mod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </del>
              </p>
            </div>
            <div className="card-body">
              <h4 className="card-title text-info">Capitalized</h4>
              <p className="card-description">
                {" "}
                Use class <code>.text-capitalize</code>
              </p>
              <p className="text-capitalize">
                {" "}
                lorem ipsum dolor sit amet, consectetur mod tempor incididunt ut
                labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List with icon</h4>
              <p className="card-description">
                Add class <code>.list-ticked</code> to <code>&lt;ul&gt;</code>
              </p>
              <ul className="list-ticked">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit&gt;</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List with icon</h4>
              <p className="card-description">
                Add class <code>.list-arrow</code> to <code>&lt;ul&gt;</code>
              </p>
              <ul className="list-arrow">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit&gt;</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List with icon</h4>
              <p className="card-description">
                Add class <code>.list-star</code> to <code>&lt;ul&gt;</code>
              </p>
              <ul className="list-star">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li>Nulla volutpat aliquam velit&gt;</li>
              </ul>
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
