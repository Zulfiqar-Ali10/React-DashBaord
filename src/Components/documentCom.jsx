import React from 'react'
import { Link } from 'react-router-dom'

export default function Document() {
  return (
   <>
   <div className="container-fluid documentation">
  <div className="row">
    <div className="col-md-3 col-xl-2 left-sidebar">
      <div className="logo-wrapper">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
      </div>
      <h5 className="left-menu-title">Documentation</h5>
      <ul className="left-menu">
        <li>
          <a href="#introduction"> Introduction </a>
        </li>
        <li>
          <a href="#getting-started"> Getting started </a>
          <ul>
            <li>
              <a href="#f-structure">Folder Structure</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#options"> Options </a>
        </li>
        <li>
          <a href="#customization"> Customization </a>
          <ul className="list-arrow">
            <li>
              <a href="#build">Build</a>
            </li>
            <li>
              <a href="#sass">Sass</a>
            </li>
            <li>
              <a href="#inject">Inject</a>
            </li>
            <li>
              <a href="#bundleVendors">BundleVendors</a>
            </li>
          </ul>
        </li>
      </ul>
      <h5 className="left-menu-title">Components</h5>
      <ul className="left-menu">
        <li>
          <a href="#basic-ui"> Basic UI Elements </a>
        </li>
        <li>
          <a href="#basic-ui-2"> Basic UI Elements-2 </a>
        </li>
        <li>
          <a href="#advanced-ui"> Advanced UI Elements </a>
        </li>
        <li>
          <a href="#media"> Media </a>
        </li>
        <li>
          <a href="#tables"> Tables </a>
        </li>
        <li>
          <a href="#charts"> Charts </a>
        </li>
        <li>
          <a href="#maps"> Maps </a>
        </li>
        <li>
          <a href="#forms"> Forms </a>
        </li>
        <li>
          <a href="#additional-form"> Additional Form Elements </a>
        </li>
        <li>
          <a href="#icons"> Icons </a>
        </li>
        <li>
          <a href="#file-upload"> File upload </a>
        </li>
        <li>
          <a href="#form-picker"> Form Picker </a>
        </li>
        <li>
          <a href="#editors"> Editors </a>
        </li>
      </ul>
      <h5 className="left-menu-title">
        <a className="text-body" href="#credits">
          {" "}
          Credits{" "}
        </a>
      </h5>
      <a
        className="d-block mt-4 text-muted"
        target="_blank"
        href="../index.html"
      >
        Go to Home
      </a>
    </div>
    <div className="col-md-9 col-xl-10 main-panel bg-white">
      <div className="main-panel-wrapper">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="mt-2 text-center font-weight-light text-muted text-uppercase">
              Documentation
            </h2>
          </div>
          <div className="col-12 grid-margin" id="introduction">
            <div className="card">
              <div className="card-body">
                <h3 className="mb-4">Introduction</h3>
                <p>
                  Star Admin 2 Pro is a responsive HTML template that is based
                  on the CSS framework <strong>Bootstrap 5</strong>, and it is
                  built with Sass. Sass compiler makes it easier to code and
                  customize. All Bootstrap components have been modified to fit
                  the style of Star Admin 2 Pro and provide a consistent look
                  throughout the template. Read the documentation of{" "}
                  <a href="https://getbootstrap.com/" target="_blank">
                    Bootstrap
                  </a>{" "}
                  or{" "}
                  <a href="https://sass-lang.com/guide/" target="_blank">
                    Sass
                  </a>{" "}
                  if you want to learn more.
                </p>
                <p>
                  Before you start working with the template, go through the
                  pages that are bundled with the theme. Most of the template
                  example pages contain quick tips on how to create or use a
                  component, which can be really helpful when you need to create
                  something on the fly.
                </p>
                <div className="alert alert-info" role="alert">
                  <p className="d-inline text-danger">
                    <strong>Note</strong>: We are trying our best to document
                    how to use the template. If you think that something is
                    missing from the documentation, please tell us about it. If
                    you have any questions or issues regarding this theme please
                    email us at{" "}
                    <a
                      className="d-inline text-info"
                      href="mailto:support@bootstrapdash.com"
                    >
                      support@bootstrapdash.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin" id="getting-started">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Getting started</h3>
                  <p>
                    You can directly use the compiled and ready-to-use the
                    version of the template. But in case you plan to customize
                    the template extensively the template allows you to do so.
                  </p>
                  <p>
                    Within the download you'll find the following directories
                    and files, logically grouping common assets and providing
                    both compiled and minified variations:
                  </p>
                  <hr />
                  <h4 className="my-4" id="f-structure">
                    Folder Structure
                  </h4>
                  <details className="mt-4" open="">
                    <summary>
                      <i className="fa fa-folder-open-o text-body me-1" />{" "}
                      <strong>Template Name</strong>
                    </summary>
                    <ul className="list-py-1 list-unstyled ps-4">
                      <li>
                        <details open="">
                          <summary>
                            <i className="fa fa-folder-open-o text-body me-1" />
                            <strong>dist</strong> -{" "}
                            <span className="text-body">
                              contains the distribution files generated from src
                            </span>
                          </summary>
                          <ul className="list-unstyled ps-4">
                            <li>
                              <details open="">
                                <summary>
                                  <i className="fa fa-folder-open-o text-body me-1" />
                                  <strong>themes</strong>
                                </summary>
                                <ul>
                                  <li>
                                    <i className="fa fa-folder-open-o text-body me-1" />
                                    <strong>assets</strong> -{" "}
                                    <span className="text-body">
                                      common assets for all templates
                                    </span>
                                  </li>
                                  <li>
                                    <i className="fa fa-folder-open-o text-body me-1" />
                                    <strong>theme_1</strong>
                                  </li>
                                  <li>
                                    <i className="fa fa-folder-open-o text-body me-1" />
                                    <strong>theme_2</strong>
                                  </li>
                                </ul>
                              </details>
                            </li>
                          </ul>
                          <li>
                            <i className="fa fa-html5 me-1" />{" "}
                            <span>index.html</span>
                          </li>
                        </details>
                      </li>
                    </ul>
                    <ul className="list-py-1 list-unstyled ps-4">
                      <li>
                        <i className="fa fa-folder-open-o text-body me-1" />
                        <strong>docs</strong> -{" "}
                        <span className="text-body">
                          contains the html,css &amp; js files for the
                          documentation
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-folder-open-o text-body me-1" />
                        <strong>node_modules</strong> -{" "}
                        <span className="text-body">
                          packages installed using npm
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-file-code-o me-1" /> package.json
                      </li>
                    </ul>
                    <ul className="list-py-1 list-unstyled ps-4">
                      <details open="">
                        <summary>
                          <i className="fa fa-folder-open-o text-body me-1" />
                          <strong>src</strong>
                        </summary>
                        <ul className="list-py-1 list-unstyled ps-4">
                          <details open="">
                            <summary>
                              <i className="fa fa-folder-open-o text-body me-1" />
                              <strong>assets</strong>
                            </summary>
                            <ul>
                              <li>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>css</strong> -{" "}
                                <span className="text-body">
                                  contains the css files compiled from scss
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>fonts</strong>
                              </li>
                              <li>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>images</strong>
                              </li>
                              <li>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>js</strong> -{" "}
                                <span className="text-body">
                                  js files for core functionality
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>scss</strong> -{" "}
                                <span className="text-body">
                                  sass files containing the styles
                                </span>
                              </li>
                              <li>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>vendors</strong> -{" "}
                                <span className="text-body">
                                  all the necessary files copied from
                                  node_modules
                                </span>
                              </li>
                            </ul>
                          </details>
                        </ul>
                        <li>
                          <i className="fa fa-folder-open-o text-body me-1" />
                          <strong>gulp-task</strong> -{" "}
                          <span className="text-body">
                            js files containing specific gulp tasks
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-file-code-o me-1" /> gulpfile.js -{" "}
                          <span className="text-body">
                            main gulpfile used to run the tasks
                          </span>
                        </li>
                        <li>
                          <i className="fa fa-html5 me-1" /> index.html
                        </li>
                        <details open="">
                          <summary>
                            <i className="fa fa-folder-open-o text-body me-1" />
                            <strong>themes</strong> -{" "}
                            <span className="text-body">
                              contains all the templates
                            </span>
                          </summary>
                          <ul className="list-py-1 list-unstyled ps-4">
                            <details open="">
                              <summary>
                                <i className="fa fa-folder-open-o text-body me-1" />
                                <strong>theme_1</strong>
                              </summary>
                              <ul className="list-py-1 list-unstyled ps-4">
                                <li>
                                  <i className="fa fa-folder-open-o text-body me-1" />
                                  <strong> pages </strong>
                                </li>
                                <li>
                                  <i className="fa fa-folder-open-o text-body me-1" />
                                  <strong> partials </strong>
                                </li>
                                <li>
                                  <i className="fa fa-html5 me-1" /> index.html
                                </li>
                              </ul>
                            </details>
                          </ul>
                        </details>
                      </details>
                    </ul>
                  </details>
                  <p className="mt-1">
                    Note: The root folder denoted further in this documentation
                    refers to the 'template' folder inside the downloaded folder
                  </p>
                  <div
                    className="alert alert-success mt-4 d-flex align-items-center"
                    role="alert"
                  >
                    <i className="ti-info-alt" />
                    <p>
                      We have bundled up the vendor files needed for demo
                      purpose into a folder 'vendors', you may not need all
                      those vendors in your application. If you want to make any
                      change in the vendor package files, you need to change the
                      src path for related tasks in the file gulpfile.js and run
                      the task <code>bundleVendors</code> to rebuild the vendor
                      files.
                    </p>
                  </div>
                  <hr className="mt-5" />
                  <h4 className="mt-4 mb-4">Installation</h4>
                  <p className="mt-2">
                    <strong>Step 1: </strong>To begin, please download and
                    install{" "}
                    <a href="https://nodejs.org/en/download" target="_blank">
                      Node.js
                    </a>
                    . If you have already installed it, please proceed to step
                    2.
                  </p>
                  <p className="mt-2">
                    <strong>Step 2: </strong>Install gulp-cli globally by
                    running <code>npm install -g gulp-cli</code>
                    command. If it's already installed, skip to step 3
                  </p>
                  <p className="mt-2">
                    <strong>Step 3: </strong>To get started, go to the root
                    directory of the project and run the command{" "}
                    <code>npm install</code>. This will install the necessary
                    dependencies for the project to run smoothly.
                  </p>
                  <p className="mt-2">
                    <strong>Step 4: </strong>After installing the required
                    dependencies, run <code>cd src</code> to navigate to the src
                    folder and execute the <code>gulp serve</code> command.
                  </p>
                  <div
                    className="alert alert-warning mt-4 text-warning"
                    role="alert"
                  >
                    <i className="ti-info-alt" /> It is important to run{" "}
                    <code>gulp serve</code> command from the directory where the
                    gulpfile.js is located.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin" id="options">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Options</h3>
                  <p>
                    {" "}
                    We have provided a bunch of layout options for you with a
                    single class change! You can use the following classes for
                    each layout.{" "}
                  </p>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr className="">
                          <th>Layout</th>
                          <th>Class</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Compact menu</td>
                          <td>sidebar-mini</td>
                        </tr>
                        <tr>
                          <td>Icon menu</td>
                          <td>sidebar-icon-only</td>
                        </tr>
                        <tr>
                          <td>Sidebar Hidden (togglable)</td>
                          <td>sidebar-toggle-display, sidebar-hidden</td>
                        </tr>
                        <tr>
                          <td>Sidebar Overlay</td>
                          <td>sidebar-absolute, sidebar-hidden</td>
                        </tr>
                        <tr>
                          <td>Horizontal menu 1</td>
                          <td>
                            horizontal-menu (However, horizontal-menu has
                            different HTML structure. Refer
                            pages/layout/horizontal-menu.html)
                          </td>
                        </tr>
                        <tr>
                          <td>Horizontal menu 2</td>
                          <td>
                            horizontal-menu-2 (However, horizontal-menu-2 has
                            different HTML structure. Refer
                            pages/layout/horizontal-menu-2.html)
                          </td>
                        </tr>
                        <tr>
                          <td>Boxed layout</td>
                          <td>boxed-layout</td>
                        </tr>
                        <tr>
                          <td>RTL layout</td>
                          <td>rtl</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin" id="customization">
              <div className="card">
                <div className="card-body">
                  {/* doc starts here */}
                  <h3 className="my-4"> Customization</h3>
                  <hr className="hr" />
                  <p>
                    Bootstrapdash offers a flexible foundation for your web
                    projects. This documentation guides you through the
                    customization process, ensuring a seamless experience
                    without modifying the core template files.
                  </p>
                  <div className="alert alert-warning" role="alert">
                    <p className="text-warning">
                      <strong>NOTE:</strong> All major customization should be
                      carried out in the
                      <strong>'src'</strong> file. To avoid overrides of your
                      custom styles, file loss, or any other conflicts during
                      the customization, do not modify the source files of the
                      templates directly; instead, add new files for your
                      customizations.
                    </p>
                  </div>
                  <hr className="hr" id="build" />
                  <h4 className="my-4">Build</h4>
                  <p>
                    The command <code>gulp build</code> is used to generate the
                    dist folder. Any changes made to the src should be followed
                    by a build command. Suppose you change or create HTML, Sass
                    or JS files, you have to run the command to ensure that the
                    changes are reflected in the dist folder.
                  </p>
                  <hr className="hr" id="sass" />
                  <h4 className="my-4">Sass</h4>
                  <p className="mt-2">
                    <strong>Step 1: </strong>Create a folder named <strong />
                    custom in the{" "}
                    <strong className="text-success">assets/scss</strong>{" "}
                    directory.
                  </p>
                  <p className="mt-2">
                    <strong>Step 2: </strong>Create new Sass files, preferably
                    <strong>“_custom-variables.scss”</strong> and{" "}
                    <strong>“_custom.scss”</strong> and write your styles in
                    them.
                  </p>
                  <div className="alert alert-warning" role="alert">
                    <p className="text-warning">
                      {" "}
                      <strong>NOTE:</strong> Do not name your custom scss files
                      <strong>“_style.scss”</strong> as it will lead to the
                      creation of a new CSS folder.{" "}
                    </p>
                  </div>
                  <p />
                  <p className="mt-2">
                    <strong>Step 3: </strong>You can find Sass files for the
                    different layouts in the same scss directory. Now navigate
                    to your preferred layout styles{" "}
                    <strong>"_style.scss"</strong> file and import the{" "}
                    <strong>_custom-variables.scss</strong> and{" "}
                    <strong>_custom.scss</strong>.
                  </p>
                  <p className="mt-2">
                    <strong>Step 4: </strong>Import the variables in the section
                    named{" "}
                    <strong className="text-secondary">
                      /* === Import template variables === */
                    </strong>{" "}
                    and the styles at the end of the file.
                  </p>
                  <p className="mt-2">
                    <strong>Step 5: </strong>Now run the script{" "}
                    <code>gulp sass</code> and your custom styles will be
                    generated.
                  </p>
                  <hr className="hr" id="inject" />
                  <h4 className="my-4">Inject</h4>
                  <p className="mt-2">
                    <strong>Step 1: </strong>You can find the common components
                    in their respective partials folder (e.g., navbar, sidebar).
                  </p>
                  <p className="mt-2">
                    <strong>Step 2: </strong>Make changes to these HTML files
                    and inject them into all pages using
                    <code>gulp inject</code>.
                  </p>
                  <p className="mt-2">
                    <strong>Step 3: </strong>Rebuild the dist folder with{" "}
                    <code>gulp build</code>.
                  </p>
                  <hr className="hr" id="bundleVendors" />
                  <h4 className="my-4">BundleVendors</h4>
                  <p>
                    When you need to add new 3rd party packages to the template
                    or update an existing one, you can do so using the script{" "}
                    <code>gulp bundleVendors</code>. This code cleans the
                    existing vendors folder and replaces it with newly updated
                    files.{" "}
                  </p>
                  <p>
                    For example: Suppose you want to add a new 3rd party package
                    to your template, you can install them to the project using
                    the command <code>npm install</code>. Your installed package
                    can now be found in the <strong>node_modules</strong>. Now
                    you can import the package as a whole or just the necessary
                    files required for the template to your vendor files located
                    in the assets folder of your project src directory.
                  </p>
                  <p className="mt-2">
                    <strong>Step 1: </strong>Go to the gulp{" "}
                    <strong>“vendors.js”</strong> file located in the
                    <strong>“gulp-tasks”</strong> folder in the src.
                  </p>
                  <p className="mt-2">
                    <strong>Step 2: </strong>Add the path to the package files
                    needed from the
                    <strong>node_modules</strong> as a new gulp task like the
                    one given below.
                  </p>
                  <p>
                    <strong className="text-success">
                      1.buildOptionalVendorScripts.
                    </strong>
                    (for js files){" "}
                    <textarea
                      className="multiple-codes"
                      defaultValue={
                        "var ascript72 = gulp.src(['../node_modules/jstree/dist/jstree.min.js'])\n                              .pipe(gulp.dest(['./assets/vendors/jstree']));\n                            "
                      }
                    />
                  </p>
                  <p>
                    <strong className="text-success">
                      2.buildOptionalVendorStyles.
                    </strong>
                    (for css files)
                  </p>
                  <textarea
                    className="multiple-codes"
                    defaultValue={
                      "var aStyle3 = gulp.src(['../node_modules/font-awesome/css/font-awesome.min.css'])\n                              .pipe(gulp.dest('./assets/vendors/font-awesome/css'));\n                          "
                    }
                  />
                  <p />
                  <p className="mt-2">
                    <strong>Step 3: </strong>Add the newly created variable to
                    the return statement given in the respective tasks.
                  </p>
                  <p className="mt-2">
                    <strong>Step 4: </strong>Now run the gulp command{" "}
                    <code>gulp bundleVendors</code> to add these to the vendors
                    folder in your asset.
                  </p>
                  <hr className="hr" />
                  <h4 className="my-4">Conclusion</h4>
                  <p>
                    With these customization steps, you have the flexibility to
                    tailor Bootstrapdash to meet your specific project
                    requirements. Remember to follow best practices and avoid
                    modifying core template files to ensure smooth updates in
                    the future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  {/* New Docs Starts Here */}
                  <h3 className="mb-4">Components</h3>
                  <hr className="hr" id="basic-ui" />
                  <h4 className="my-4">Basic UI Elements</h4>
                  <div className="demo-tabs">
                    {/* Tabs Starts */}
                    <div data-pws-tab="Button" data-pws-tab-name="Button">
                      <h5 className="mb-2 mt-4">Gradient color</h5>
                      <div className="fluid-container py-4">
                        <button
                          type="button"
                          className="btn btn-gradient-primary"
                        >
                          Primary
                        </button>
                        <button
                          type="button"
                          className="btn btn-gradient-secondary"
                        >
                          Secondary
                        </button>
                        <button
                          type="button"
                          className="btn btn-gradient-success"
                        >
                          Success
                        </button>
                        <button type="button" className="btn btn-gradient-info">
                          Info
                        </button>
                        <button
                          type="button"
                          className="btn btn-gradient-warning"
                        >
                          Warning
                        </button>
                        <button
                          type="button"
                          className="btn btn-gradient-danger"
                        >
                          Danger
                        </button>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '      <div class="row">\n        <button type="button" class="btn btn-gradient-primary">Primary</button>\n        <button type="button" class="btn btn-gradient-secondary">Secondary</button>\n        <button type="button" class="btn btn-gradient-success">Success</button>\n        <button type="button" class="btn btn-gradient-info">Info</button>\n        <button type="button" class="btn btn-gradient-warning">Warning</button>\n        <button type="button" class="btn btn-gradient-danger">Danger</button>\n      </div>\n                                        '
                        }
                      />
                      <h5 className="mb-2 mt-4">Button with single color</h5>
                      <div className="fluid-container py-4">
                        <button type="button" className="btn btn-primary">
                          Primary
                        </button>
                        <button type="button" className="btn btn-secondary">
                          Secondary
                        </button>
                        <button type="button" className="btn btn-success">
                          Success
                        </button>
                        <button type="button" className="btn btn-info">
                          Info
                        </button>
                        <button type="button" className="btn btn-warning">
                          Warning
                        </button>
                        <button type="button" className="btn btn-danger">
                          Danger
                        </button>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="row">\n      <button type="button" class="btn btn-primary">Primary</button>\n      <button type="button" class="btn btn-secondary">Secondary</button>\n      <button type="button" class="btn btn-success">Success</button>\n      <button type="button" class="btn btn-info">Info</button>\n      <button type="button" class="btn btn-warning">Warning</button>\n      <button type="button" class="btn btn-danger">Danger</button>\n    </div>\n                                      '
                        }
                      />
                      <h5 className="mb-2 mt-4">Outlined</h5>
                      <div className="fluid-container py-4">
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Primary
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Secondary
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Success
                        </button>
                        <button type="button" className="btn btn-outline-info">
                          Info
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-warning"
                        >
                          Warning
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          Danger
                        </button>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="row">\n      <button type="button" class="btn btn-outline-primary">Primary</button>\n      <button type="button" class="btn btn-outline-secondary">Secondary</button>\n      <button type="button" class="btn btn-outline-success">Success</button>\n      <button type="button" class="btn btn-outline-info">Info</button>\n      <button type="button" class="btn btn-outline-warning">Warning</button>\n      <button type="button" class="btn btn-outline-danger">Danger</button>\n    </div>\n                                      '
                        }
                      />
                      <h5 className="mb-2 mt-4">Sizes</h5>
                      <div className="fluid-container py-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                        >
                          Large
                        </button>
                        <button type="button" className="btn btn-primary">
                          Medium
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          Small
                        </button>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="row">\n      <button type="button" class="btn btn-primary btn-lg">Small</button>\n      <button type="button" class="btn btn-secondary">Medium</button>\n      <button type="button" class="btn btn-success btn-sm">Large</button>\n    </div>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="Accordions"
                      data-pws-tab-name="Accordions"
                    >
                      <h5 className="mb-2 mt-4">Bootstrap Accordion</h5>
                      <div className="fluid-container py-4">
                        <div
                          className="accordion"
                          id="accordion"
                          role="tablist"
                          aria-multiselectable="true"
                        >
                          <div className="card">
                            <div
                              className="card-header"
                              role="tab"
                              id="headingOne"
                            >
                              <h5 className="mb-0">
                                <a
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#accordion"
                                  href="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  {" "}
                                  Collapsible Group Item #1{" "}
                                </a>
                              </h5>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse show"
                              role="tabpanel"
                              aria-labelledby="headingOne"
                            >
                              <div className="card-body">
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident. Ad
                                vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.{" "}
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              role="tab"
                              id="headingTwo"
                            >
                              <h5 className="mb-0">
                                <a
                                  className="collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#accordion"
                                  href="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  {" "}
                                  Collapsible Group Item #2{" "}
                                </a>
                              </h5>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="headingTwo"
                            >
                              <div className="card-body">
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident. Ad
                                vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.{" "}
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div
                              className="card-header"
                              role="tab"
                              id="headingThree"
                            >
                              <h5 className="mb-0">
                                <a
                                  className="collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-parent="#accordion"
                                  href="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  Collapsible Group Item #3{" "}
                                </a>
                              </h5>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="headingThree"
                            >
                              <div className="card-body">
                                {" "}
                                Anim pariatur cliche reprehenderit, enim eiusmod
                                high life accusamus terry richardson ad squid. 3
                                wolf moon officia aute, non cupidatat skateboard
                                dolor brunch. Food truck quinoa nesciunt laborum
                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                put a bird on it squid single-origin coffee
                                nulla assumenda shoreditch et. Nihil anim
                                keffiyeh helvetica, craft beer labore wes
                                anderson cred nesciunt sapiente ea proident. Ad
                                vegan excepteur butcher vice lomo. Leggings
                                occaecat craft beer farm-to-table, raw denim
                                aesthetic synth nesciunt you probably haven't
                                heard of them accusamus labore sustainable VHS.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="accordion" class="accordion" role="tablist" aria-multiselectable="true">\n      <div class="card">\n        <div class="card-header" role="tab" id="headingOne">\n          <h5 class="mb-0">\n            <a data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">\n            Collapsible Group Item #1\n            </a>\n          </h5>\n        </div>\n    \n        <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">\n          <div class="card-body">\n              ....\n          </div>\n        </div>\n      </div>\n      <div class="card">\n        <div class="card-header" role="tab" id="headingTwo">\n          <h5 class="mb-0">\n            <a class="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\n            Collapsible Group Item #2\n            </a>\n          </h5>\n        </div>\n        <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">\n          <div class="card-body">\n              ....\n          </div>\n        </div>\n      </div>\n      <div class="card">\n        <div class="card-header" role="tab" id="headingThree">\n          <h5 class="mb-0">\n            <a class="collapsed" data-bs-toggle="collapse" data-bs-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">\n            Collapsible Group Item #3\n            </a>\n          </h5>\n        </div>\n        <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">\n          <div class="card-body">\n              ....\n          </div>\n        </div>\n      </div>\n    </div>\n                                    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="Dropdown" data-pws-tab-name="Dropdown">
                      <h5 className="mb-2 mt-4">Bootstrap Dropdown</h5>
                      <div className="fluid-container py-4">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-success dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-warning dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-danger dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="btn-group">\n      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    <div class="btn-group">\n      <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n      <a class="dropdown-item" href="#">Action</a>\n      <a class="dropdown-item" href="#">Another action</a>\n      <a class="dropdown-item" href="#">Something else here</a>\n      <div class="dropdown-divider"></div>\n      <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    \n    <div class="btn-group">\n      <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    \n    <div class="btn-group">\n      <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    \n    <div class="btn-group">\n      <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n                                      '
                        }
                      />
                      <h5 className="mb-2 mt-4">Dropdown Outlined</h5>
                      <div className="fluid-container py-4">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-outline-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-outline-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-outline-success dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-outline-warning dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                          <button
                            type="button"
                            className="btn btn-outline-danger dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {" "}
                            Action{" "}
                          </button>
                          <div className="dropdown-menu">
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
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="btn-group">\n      <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    <div class="btn-group">\n      <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n      <a class="dropdown-item" href="#">Action</a>\n      <a class="dropdown-item" href="#">Another action</a>\n      <a class="dropdown-item" href="#">Something else here</a>\n      <div class="dropdown-divider"></div>\n      <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    \n    <div class="btn-group">\n      <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    \n    <div class="btn-group">\n      <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n    \n    <div class="btn-group">\n      <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      Action\n      </button>\n      <div class="dropdown-menu">\n        <a class="dropdown-item" href="#">Action</a>\n        <a class="dropdown-item" href="#">Another action</a>\n        <a class="dropdown-item" href="#">Something else here</a>\n        <div class="dropdown-divider"></div>\n        <a class="dropdown-item" href="#">Separated link</a>\n      </div>\n    </div>\n                                    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="Tabs" data-pws-tab-name="Tabs">
                      <h5 className="mb-2 mt-4">Bootstrap Tabs</h5>
                      <div className="fluid-container py-4">
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a className="nav-link active" href="#">
                              Active
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Link
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link disabled" href="#">
                              Disabled
                            </a>
                          </li>
                        </ul>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <ul class="nav nav-tabs">\n      <li class="nav-item">\n        <a class="nav-link active" href="#">Active</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Link</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link disabled" href="#">Disabled</a>\n      </li>\n    </ul>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="Modals" data-pws-tab-name="Modals">
                      <h5 className="mb-2 mt-4">Bootstrap Modal</h5>
                      <div className="fluid-container py-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#defaultModal"
                        >
                          Launch demo modal
                        </button>
                        <div
                          className="modal fade"
                          id="defaultModal"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5
                                  className="modal-title"
                                  id="exampleModalLabel"
                                >
                                  Modal title
                                </h5>
                                <button
                                  type="button"
                                  className="close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <p>This is a modal with default size</p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="modal fade" id="defaultModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\n      <div class="modal-dialog" role="document">\n        <div class="modal-content">\n          <div class="modal-header">\n            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>\n            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">×</span>\n            </button>\n          </div>\n          <div class="modal-body">\n            <p>This is a modal with default size</p>\n          </div>\n          <div class="modal-footer">\n            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n            <button type="button" class="btn btn-primary">Save changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n                                    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="bootstrap-Pagination"
                      data-pws-tab-name="Pagination"
                    >
                      <h5 className="mb-2 mt-4">Bootstrap Pagination</h5>
                      <div className="fluid-container py-4">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Previous
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <nav aria-label="Page navigation example">\n      <ul class="pagination">\n        <li class="page-item"><a class="page-link" href="#">Previous</a></li>\n        <li class="page-item"><a class="page-link" href="#">1</a></li>\n        <li class="page-item active"><a class="page-link" href="#">2</a></li>\n        <li class="page-item"><a class="page-link" href="#">3</a></li>\n        <li class="page-item"><a class="page-link" href="#">Next</a></li>\n      </ul>\n    </nav>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="bootstrap-Badge"
                      data-pws-tab-name="Badge"
                    >
                      <h5 className="mb-2 mt-4">Bootstrap Badges</h5>
                      <div className="fluid-container py-4">
                        <div className="badge badge-primary">Default</div>
                        <div className="badge badge-gradient-primary">
                          Gradient
                        </div>
                        <div className="badge badge-primary badge-pill">
                          Pill
                        </div>
                        <div className="badge badge-outline-primary badge-pill">
                          Outlined
                        </div>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="badge badge-primary">Default</div>\n    <div class="badge badge-gradient-primary">Gradient</div>                                            \n    <div class="badge badge-primary badge-pill">Pill</div>\n    <div class="badge badge-outline-primary badge-pill">Outlined</div>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/* New Docs Ends Here */}
                  {/* New Docs Starts Here */}
                  <hr className="hr" id="basic-ui-2" />
                  <h4 className="my-4">Basic UI Elements - 2</h4>
                  <div className="demo-tabs">
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="bootstrap-Breadcrumb"
                      data-pws-tab-name="Breadcrumb"
                    >
                      <h5 className="mb-2 mt-4">Bootstrap Breadcrumb</h5>
                      <div className="fluid-container py-4">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="#">Home</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Library
                            </li>
                          </ol>
                        </nav>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <nav aria-label="breadcrumb">\n      <ol class="breadcrumb">\n        <li class="breadcrumb-item"><a href="#">Home</a></li>\n        <li class="breadcrumb-item active" aria-current="page">Library</li>\n      </ol>\n    </nav>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="bootstrap-Progressbar"
                      data-pws-tab-name="Progressbar"
                    >
                      <h5 className="mb-2 mt-4">Bootstrap Progressbar</h5>
                      <div className="fluid-container py-4">
                        <div className="progress progress-md w-50">
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="progress progress-md">\n      <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n    </div>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="bootstrap-tooltip"
                      data-pws-tab-name="Tooltip"
                    >
                      <h5 className="mb-2 mt-4">Bootstrap Tooltip</h5>
                      <div className="container-fluid py-4">
                        <button
                          className="btn btn-warning"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Basic tooltip"
                        >
                          Hover me
                        </button>
                      </div>
                      <p className="pt-4">
                        {" "}
                        Add the following script files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    "}
                      />
                      <p> To create a clipboard, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <button class="btn btn-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Basic tooltip">Hover me</button>\n    \n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/* New Docs Ends Here */}
                  {/* New Docs Starts Here */}
                  <hr className="hr" id="advanced-ui" />
                  <h4 className="my-4">Advanced UI Elements</h4>
                  <div className="demo-tabs">
                    {/* Tabs Starts */}
                    <div data-pws-tab="Clipboard" data-pws-tab-name="Clipboard">
                      <p>
                        <a href="https://clipboardjs.com/">Clipboard</a>, a
                        modern approach to copy text to clipboard.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                      "
                        }
                      />
                      <p> To create a clipboard, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <textarea id="clipboardExample2" class="form-control">Hello</textarea>\n    <button type="button" class="btn btn-primary btn-clipboard" data-clipboard-action="copy" data-clipboard-target="#clipboardExample2">Copy</button>\n    <button type="button" class="btn btn-danger btn-clipboard" data-clipboard-action="cut" data-clipboard-target="#clipboardExample2">Cut</button>\n    \n    \n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="TodoList" data-pws-tab-name="Todo List">
                      <p>
                        <a href="http://www.jqueryscript.net/demo/Minimal-To-do-List-Task-Manager-App-Using-jQuery-Local-Storage/">
                          Todolist
                        </a>
                        is a minimal jQuery plugin to create checklist.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                      "
                        }
                      />
                      <p>
                        {" "}
                        To create a filterable list, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="add-items d-flex">\n      <input type="text" class="form-control todo-list-input"  placeholder="What do you need to do today?">\n      <button class="add btn btn-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>\n    </div>\n    <div class="list-wrapper">\n      <ul class="d-flex flex-column-reverse todo-list">\n        <li>\n          <div class="form-check">\n            <label class="form-check-label">\n              <input class="checkbox" type="checkbox">\n              Meeting with Alisa\n            </label>\n          </div>\n          <i class="remove mdi mdi-close-circle-outline"></i>\n        </li>\n        <li>\n          ...\n        </li>\n        <li>\n          ...\n        </li>\n        <li>\n          ...\n        </li>\n      </ul>\n    </div>\n                                      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="Dragula" data-pws-tab-name="Dragula">
                      <p>
                        <a href="https://bevacqua.github.io/dragula/">
                          Dragula
                        </a>{" "}
                        ,Drag and drop so simple it hurts.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Dragula in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/dragula/dist/dragula.min.css" />\n                                      '
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                      "
                        }
                      />
                      <p>
                        {" "}
                        To create a drag n drop list, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="dragula-event-left" class="h-100">\n      <div>\n      Drag me!\n      </div>\n    </div>\n    <div id="dragula-event-right" class="h-100">\n      <div>\n      Drag me!\n      </div>\n    </div>\n    \n    \n                                    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="context-menu"
                      data-pws-tab-name="ContextMenu"
                    >
                      <p>
                        {" "}
                        The contextMenu Plugin was designed for web applications
                        in need of menus on a possibly large amount of objects.{" "}
                        <a
                          target="_blank"
                          href="https://swisnl.github.io/jQuery-contextMenu/"
                        >
                          Click Here
                        </a>{" "}
                        to see the official documentation.{" "}
                      </p>
                    </div>
                    {/* Tabs Ends */}
                    {/* Ui-slider Starts */}
                    <div data-pws-tab="UISlider" data-pws-tab-name="UI Slider">
                      <p>
                        <a href="https://refreshless.com/nouislider/">
                          noUiSlider
                        </a>{" "}
                        is a range slider without bloat.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use NoUISlider in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/nouislider/distribute/nouislider.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> To create a slider, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="ui-slider" class="slider"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Ui slider Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="Range-slider"
                      data-pws-tab-name="Range Slider"
                    >
                      <p>
                        {" "}
                        Easy, flexible and responsive range slider with skin
                        support.{" "}
                        <a
                          target="_blank"
                          href="http://ionden.com/a/plugins/ion.rangeSlider/en.html"
                        >
                          Click Here
                        </a>{" "}
                        to see the official documentation.{" "}
                      </p>
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="Colgade"
                      data-pws-tab-name="Colcade Grid"
                    >
                      <p>
                        <a href="https://github.com/desandro/colcade">
                          Colcade
                        </a>{" "}
                        is a simple lightweight masonry layout.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                            "
                        }
                      />
                      <p> To create a responsive, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="grid">\n      <div class="grid-col grid-col--1"></div>\n      <div class="grid-col grid-col--2"></div>\n      <div class="grid-col grid-col--3"></div>\n      <div class="grid-col grid-col--4"></div>\n      <div class="grid-item grid-item--b"></div>\n      <div class="grid-item grid-item--a"></div>\n      <div class="grid-item grid-item--c"></div>\n      <div class="grid-item grid-item--a"></div>\n      <div class="grid-item grid-item--a"></div>\n      <div class="grid-item grid-item--b"></div>\n      <div class="grid-item grid-item--c"></div>\n      <div class="grid-item grid-item--c"></div>\n    </div>\n    \n    \n                                            '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/* New Docs Starts Here */}
                  <hr className="hr" id="media" />
                  <h4 className="my-4">Media</h4>
                  <div className="demo-tabs">
                    {/* Tabs Starts */}
                    <div data-pws-tab="LightBox" data-pws-tab-name="Lightbox">
                      <p>
                        <a href="http://sachinchoolur.github.io/lightGallery/">
                          Light Galary
                        </a>{" "}
                        is a customizable, modular, responsive, Lightbox gallery
                        plugin for jQuery.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use LightGallery in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/lightgallery/dist/css/lightgallery.min.css">\n                                      '
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                      "
                        }
                      />
                      <p>
                        {" "}
                        To create Lightbox Gallery, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="gallery" class="row lightGallery">\n      <a class="image-tile col-xl-3 col-lg-3 col-md-3 col-md-4 col-6" href="http://via.placeholder.com/690x580">\n        <img src="http://via.placeholder.com/280x280" />\n      </a>\n      <a class="image-tile col-xl-3 col-lg-3 col-md-3 col-md-4 col-6" href="http://via.placeholder.com/690x580">\n        <img src="http://via.placeholder.com/280x280" />\n      </a>\n      <a class="image-tile col-xl-3 col-lg-3 col-md-3 col-md-4 col-6" href="http://via.placeholder.com/690x580">\n        <img src="http://via.placeholder.com/280x280" />\n      </a>\n      <a class="image-tile col-xl-3 col-lg-3 col-md-3 col-md-4 col-6" href="http://via.placeholder.com/690x580">\n        <img src="http://via.placeholder.com/280x280" />\n      </a>\n      <a class="image-tile col-xl-3 col-lg-3 col-md-3 col-md-4 col-6" href="http://via.placeholder.com/690x580">\n        <img src="http://via.placeholder.com/280x280" />\n      </a>\n    </div>\n    \n    \n                                    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="owl-carousel"
                      data-pws-tab-name="Owl Carousel"
                    >
                      <p>
                        <a href="https://owlcarousel2.github.io/OwlCarousel2/">
                          Owl Carousel
                        </a>{" "}
                        is a touch enabled jQuery plugin that lets you create a
                        beautiful responsive carousel slider.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Owl Carousel in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/owl-carousel-2/assets/owl.carousel.min.css" />\n                                      '
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                      "
                        }
                      />
                      <p> To create a carousel, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="owl-carousel owl-theme nonloop">\n      <div class="item"><h4>1</h4></div>\n      <div class="item"><h4>2</h4></div>\n      <div class="item"><h4>3</h4></div>\n      <div class="item"><h4>4</h4></div>\n      <div class="item"><h4>5</h4></div>\n      <div class="item"><h4>6</h4></div>\n      <div class="item"><h4>7</h4></div>\n      <div class="item"><h4>8</h4></div>\n      <div class="item"><h4>9</h4></div>\n      <div class="item"><h4>10</h4></div>\n      <div class="item"><h4>11</h4></div>\n      <div class="item"><h4>12</h4></div>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/*Tables starts*/}
                  <hr className="hr" id="tables" />
                  <h4 className="my-4">Tables</h4>
                  <div className="demo-tabs">
                    {/* Basic table starts */}
                    <div
                      data-pws-tab="basic-table"
                      data-pws-tab-name="Basic table"
                    >
                      <p>
                        {" "}
                        To create a basic Twitter Bootstrap table, add the
                        following code.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <table class="table">\n      <thead>\n      <tr class="">\n        <th>#</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Username</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td scope="row">1</td>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <td scope="row">2</td>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <td scope="row">3</td>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n      </tbody>\n    </table>\n    '
                        }
                      />
                    </div>
                    {/* Basic table Ends */}
                    {/* bootstrap-table Starts */}
                    <div
                      data-pws-tab="bootstrap-table"
                      data-pws-tab-name="Bootstrap table"
                    >
                      <p>
                        <a href="http://bootstrap-table.wenzhixin.net.cn/">
                          Bootstrap-table
                        </a>{" "}
                        is an extended Bootstrap table with radio, checkbox,
                        sort, pagination, and other added features.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Bootstrap-table in your application, include the
                        following files in &lt;head&gt;.
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/bootstrap-table/dist/bootstrap-table.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        Activate Bootstrap table without writing JavaScript, set
                        data-toggle="table" on a normal table.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <table data-toggle="table">\n      <thead>\n      <tr>\n        <th>Item ID</th>\n        <th>Item Name</th>\n        <th>Item Price</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>1</td>\n        <td>Item 1</td>\n        <td>$1</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>Item 2</td>\n        <td>$2</td>\n      </tr>\n      </tbody>\n    </table>\n    '
                        }
                      />
                    </div>
                    {/* Bootstrap-table Ends */}
                    {/* Js-grid Starts */}
                    <div data-pws-tab="js-grid" data-pws-tab-name="Js-grid">
                      <p>
                        <a href="http://js-grid.com/">Js-grid</a> creates simple
                        responsive chartsis a lightweight client-side data grid
                        control based on jQuery.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Js-grid in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/jsgrid/dist/jsgrid.min.css" />\n    <link rel="stylesheet" href="path-to/node_modules/jsgrid/dist/jsgrid-theme.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a basic table using Js-grid, add the following
                        code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={'    <div id="js-grid"></div>\n    '}
                      />
                    </div>
                    {/* Js-grid Ends */}
                    {/* Table-sorter Starts */}
                    <div
                      data-pws-tab="SortableTable"
                      data-pws-tab-name="Sortable table"
                    >
                      <p>
                        <a href="http://tablesorter.com/docs/">Tablesorter</a>{" "}
                        is a jQuery plugin for turning a standard HTML table
                        with THEAD and TBODY tags into a sortable table without
                        page refreshes.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Table in your application, include the following
                        files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/bootstrap-table/dist/bootstrap-table.min.css">\n                                        '
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                        "
                        }
                      />
                      <p> To create a Table, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '\n    <div class="table-sorter-wrapper">\n      <table id="myTable" class="table table-striped table-hover">\n        <thead>\n          <tr>\n            <th class="sortStyle">Last Name</th>\n            <th class="sortStyle">First Name</th>\n            <th class="sortStyle">Due</th>\n            <th class="sortStyle">Web Site</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>Smith</td>\n            <td>John</td>\n            <td>$50.00</td>\n            <td>http://www.jsmith.com</td>\n          </tr>\n          <tr>\n            <td>Bach</td>\n            <td>Frank</td>\n            <td>$50.00</td>\n            <td>http://www.frank.com</td>\n          </tr>\n          <tr>\n            <td>Doe</td>\n            <td>Jason</td>\n            <td>$100.00</td>\n            <td>http://www.jdoe.com</td>\n          </tr>\n          <tr>\n            <td>Conway</td>\n            <td>Tim</td>\n            <td>$50.00</td>\n            <td>http://www.timconway.com</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    \n    \n    \n                                        '
                        }
                      />
                    </div>
                    {/* Table-sorter Ends */}
                  </div>
                  {/*Tables ends*/}
                  {/* New Docs Starts Here */}
                  {/* New Docs Ends Here */}
                  <hr className="hr" id="charts" />
                  <h4 className="my-4">Charts</h4>
                  <div className="demo-tabs">
                    <div
                      data-pws-tab="anynameyouwant1"
                      data-pws-tab-name="Chart.js"
                    >
                      <p>
                        <a href="http://www.chartjs.org/">Chart.js</a> is a
                        simple yet flexible JavaScript charting for designers
                        &amp; developers.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Chart.js in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css" />'
                        }
                      />
                      <p> and the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> To create a simple chart, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <canvas id="lineChart" style="height:250px"></canvas>\n    \n    '
                        }
                      />
                    </div>
                    <div
                      data-pws-tab="Float-Chart"
                      data-pws-tab-name="Float.js"
                    >
                      <p>
                        <a href="http://www.flotcharts.org/">Float.js</a> is a
                        pure JavaScript plotting library for jQuery, with a
                        focus on simple usage, attractive looks and interactive
                        features.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    "}
                      />
                      <p> To create a simple chart, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="float-chart-container">\n      <div id="placeholder-basic" class="float-chart"></div>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    <div data-pws-tab="google-chart" data-pws-tab-name="Google">
                      <p>
                        <a href="https://developers.google.com/chart/">
                          Google
                        </a>{" "}
                        chart tools are powerful, simple to use, and free. Try
                        out our rich gallery of interactive charts and data
                        tools.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> Basic chart structure: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="google-chart-container">\n      <div id="Bar-chart" class="google-charts"></div>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Starts */}
                    <div data-pws-tab="c3" data-pws-tab-name="C3.js">
                      <p>
                        <a href="http://c3js.org/">C3.js</a> is a D3-based
                        reusable chart library.
                      </p>
                      <h6>Usage</h6>
                      <p>
                        {" "}
                        To use C3 charts in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/c3/c3.min.css" />'
                        }
                      />
                      <p> and the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    "}
                      />
                      <p> To create a simple chart, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="c3-line-chart"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Chartist Starts */}
                    <div data-pws-tab="chartist" data-pws-tab-name="Chartist">
                      <p>
                        <a href="https://gionkunz.github.io/chartist-js/">
                          Chartist
                        </a>{" "}
                        creates simple responsive charts.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Chartist in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/chartist/dist/chartist.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a simple line chart using Chartist, add the
                        following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="ct-chart ct-perfect-fourth" id="ct-chart-line"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Chartist Ends */}
                    {/* Morris Starts */}
                    <div data-pws-tab="morris" data-pws-tab-name="Morris">
                      <p>
                        <a href="http://morrisjs.github.io/morris.js/">
                          Morris
                        </a>{" "}
                        creates pretty time-series line graphs.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Morris in your application, include the following
                        files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/morris.js/morris.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    "}
                      />
                      <p>
                        {" "}
                        To create a simple line chart using Morris, add the
                        following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="morris-line-example"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Morris Ends */}
                    {/* Sparkline Starts */}
                    <div data-pws-tab="sparkline" data-pws-tab-name="Sparkline">
                      <p>
                        <a href="https://omnipotent.net/jquery.sparkline/#s-about">
                          Jquery Sparkline
                        </a>{" "}
                        generates sparklines (small inline charts) directly in
                        the browser using data supplied either inline in the
                        HTML, or via Javascript.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Sparkline in your application, add the following
                        script files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a line chart using Sparkline, add the
                        following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="sparkline-line-chart"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Sparkline Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="JustGage" data-pws-tab-name="Just Gage">
                      <p>
                        <a href="http://justgage.com/">Just Gage</a> is a handy
                        JavaScript plugin for generating and animating nice
                        &amp; clean gauges.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "      \n                                        "
                        }
                      />
                      <p> To create a gage, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '      <div id="justgage" class="gauge"></div>\n    \n      \n                                        '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* New Docs Starts Here */}
                  <hr className="hr" id="maps" />
                  <h4 className="my-4">Maps</h4>
                  <div className="demo-tabs">
                    <div
                      data-pws-tab="Vector-map"
                      data-pws-tab-name="Vector Map"
                    >
                      <p>
                        <a href="http://jvectormap.com/">JvectorMap</a> uses
                        only native browser technologies like JavaScript, CSS,
                        HTML, SVG or VML.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Vector map in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/jqvmap/dist/jqvmap.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> To create a simple map, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="vmap" class="vector-map" style="width: 100%; height:500px"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="Mapeal" data-pws-tab-name="Mapeal">
                      <p>
                        <a href="https://www.vincentbroute.fr/mapael/">
                          Mapeal Map
                        </a>{" "}
                        Ease the build of pretty data visualizations on dynamic
                        vector maps.
                      </p>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    "}
                      />
                      <p> To create a simple map, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="container">\n        <div class="map">Alternative content</div>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/* New Docs Ends Here */}
                  {/*Forms starts*/}
                  <hr className="hr" id="forms" />
                  <h4 className="my-4">Forms</h4>
                  <div className="demo-tabs">
                    {/* Basic elements Starts */}
                    <div
                      data-pws-tab="basic-elements"
                      data-pws-tab-name="Basic elements"
                    >
                      <p>
                        {" "}
                        The basic form elements can be added to your application
                        as below:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <form class="forms-sample">\n        <div class="form-group">\n            <label for="exampleInputEmail1">Email address</label>\n            <input type="email" class="form-control p-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n            <small id="emailHelp" class="form-text text-muted text-success"><span class="fa fa-info mt-1"></span>  We\'ll never share your email with anyone else.</small>\n        </div>\n        <div class="form-group">\n            <label for="exampleInputPassword1">Password</label>\n            <input type="password" class="form-control p-input" id="exampleInputPassword1" placeholder="Password">\n        </div>\n        <div class="form-group">\n            <label for="exampleTextarea">Example textarea</label>\n            <textarea class="form-control p-input" id="exampleTextarea" rows="3"></textarea>\n        </div>\n        <div class="form-group">\n            <label for="exampleInputFile">File input</label>\n            <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">\n            <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It\'s a bit lighter and easily wraps to a new line.</small>\n        </div>\n        <fieldset class="form-group">\n            <legend class="mb-4 mt-5">Radio buttons</legend>\n            <div class="form-check">\n                <label class="form-check-label">\n                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>\n                  Option one is this and that—be sure to include why it\'s great\n                </label>\n            </div>\n            <div class="form-check">\n                <label class="form-check-label">\n                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">\n                  Option two can be something else and selecting it will deselect option one\n                </label>\n            </div>\n            <div class="form-check disabled">\n                <label class="form-check-label">\n                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>\n                  Option three is disabled\n                </label>\n            </div>\n        </fieldset>\n        <div class="form-check col-12">\n            <label class="form-check-label">\n              <input type="checkbox" class="form-check-input">\n              Check me out\n            </label>\n        </div>\n        <div class="col-12">\n            <button type="submit" class="btn btn-primary">Submit</button>\n        </div>\n    </form>'
                        }
                      />
                    </div>
                    {/* Basic elements Ends */}
                    {/* Form validation Starts */}
                    <div
                      data-pws-tab="validation"
                      data-pws-tab-name="Validation"
                    >
                      <p>
                        {" "}
                        We are using{" "}
                        <a href="https://jqueryvalidation.org/">
                          Jquery validation
                        </a>{" "}
                        for simple clientside form validation.{" "}
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use jquery validation in your application, include
                        the following script files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        The following code shows validation of a simple form:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <form class="cmxform" id="commentForm" method="get" action="">\n      <fieldset>\n        <div class="form-group">\n          <label for="cname">Name (required, at least 2 characters)</label>\n          <input id="cname" class="form-control" name="name" minlength="2" type="text" required>\n        </div>\n        <div class="form-group">\n          <label for="cemail">E-Mail (required)</label>\n          <input id="cemail" class="form-control" type="email" name="email" required>\n        </div>\n        <div class="form-group">\n          <label for="curl">URL (optional)</label>\n          <input id="curl" class="form-control" type="url" name="url">\n        </div>\n        <div class="form-group">\n          <label for="ccomment">Your comment (required)</label>\n          <textarea id="ccomment" class="form-control" name="comment" required></textarea>\n        </div>\n        <input class="btn btn-primary" type="submit" value="Submit">\n      </fieldset>\n    </form>\n    \n    '
                        }
                      />
                    </div>
                    {/* Form validation Ends */}
                    {/* Wizard Starts */}
                    <div data-pws-tab="Wizard" data-pws-tab-name="Wizard">
                      <p>
                        {" "}
                        We are using{" "}
                        <a href="http://www.jquery-steps.com/">
                          Jquery steps
                        </a>{" "}
                        in our template to create form addons. It is an
                        all-in-one wizard plugin that is extremely flexible,
                        compact and feature-rich.{" "}
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use jquery.steps in your application, include the
                        following files &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        The following code generates a simple form wizard.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <form id="example-form" action="#">\n      <div>\n        <h3>Account</h3>\n        <section>\n          <div class="form-group">\n            <label for="exampleInputEmail1">Email address</label>\n            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">\n            <small id="emailHelp" class="form-text text-muted">We\'ll never share your email with anyone else.</small>\n          </div>\n          <div class="form-group">\n            <label for="exampleInputPassword1">Password</label>\n            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n          </div>\n          <div class="form-group">\n            <label for="exampleInputPassword1">Confirm Password</label>\n            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm password">\n          </div>\n        </section>\n        <h3>Profile</h3>\n        <section>\n          <div class="form-group">\n            <label for="exampleInputEmail1">First name</label>\n            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name">\n          </div>\n          <div class="form-group">\n            <label>Last name</label>\n            <input type="password" class="form-control" placeholder="Last name">\n          </div>\n          <div class="form-group">\n            <label>Profession</label>\n            <input type="password" class="form-control" placeholder="Profession">\n          </div>\n        </section>\n        <h3>Comments</h3>\n        <section>\n          <div class="form-group">\n            <label>Comments</label>\n            <textarea class="form-control" rows="3"></textarea>\n          </div>\n        </section>\n        <h3>Finish</h3>\n        <section>\n          <div class="form-check">\n            <label class="form-check-label">\n              <input type="checkbox" class="form-check-input">\n              I agree terms and conditions\n            </label>\n          </div>\n        </section>\n      </div>\n    </form>\n    \n    '
                        }
                      />
                    </div>
                    {/* Wizard Ends */}
                    {/* Repeater Starts */}
                    <div
                      data-pws-tab="FormRepeater"
                      data-pws-tab-name="Form Repeater"
                    >
                      <p>
                        <a href="http://briandetering.net/repeater">
                          Jquery Repeater
                        </a>{" "}
                        is an interface to add and remove a repeatable group of
                        input elements.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> To create a Repeater, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <form class="form-inline repeater">\n      <div data-repeater-list="group-a">\n          <div data-repeater-item class="d-flex mb-2">\n              <label class="sr-only" for="inlineFormInput">Name</label>\n              <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">\n              <label class="sr-only" for="inlineFormInputGroup">Username</label>\n              <div class="input-group mb-2 mr-sm-2 mb-sm-0">\n                  <div class="input-group-prepend">\n                    <span class="input-group-text">@</span>\n                  </div>\n                  <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">\n              </div>\n              <button type="submit" class="btn btn-primary">Submit</button>\n              <input data-repeater-delete type="button" class="btn btn-danger ms-2" value="Delete" />\n          </div>\n      </div>\n      <input data-repeater-create type="button" class="btn btn-success ms-2 mb-2" value="+" />\n    </form>\n    \n    '
                        }
                      />
                    </div>
                    {/* Repeater Ends */}
                  </div>
                  {/*Forms ends*/}
                  {/*Additional form elements starts*/}
                  <hr className="hr" id="additional-form" />
                  <h4 className="my-4">Additional form elements</h4>
                  <div className="demo-tabs">
                    {/* Tags Starts */}
                    <div data-pws-tab="tags" data-pws-tab-name="Tags">
                      <p>
                        <a href="http://xoxco.com/projects/code/tagsinput/">
                          jQuery-Tags-Input
                        </a>{" "}
                        magically convert a simple text input into a cool tag
                        list with this jQuery plugin.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use jQuery-Tags-Input in your application, include
                        the following files in &lt;head&gt;.
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/jquery-tags-input/dist/jquery.tagsinput.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To convert an input to tag using jQuery-Tags-Input, add
                        the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <input name="tags" id="tags" value="London,Canada,Australia,Mexico" />\n    \n    '
                        }
                      />
                    </div>
                    {/* Tags Ends */}
                    {/* Rating Starts */}
                    <div data-pws-tab="BarRating" data-pws-tab-name="Rating">
                      <p>
                        <a href="http://antenna.io/demo/jquery-bar-rating/examples/">
                          jQuery Bar Rating
                        </a>{" "}
                        Plugin works by transforming a standard select field
                        into a rating widget.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Purple rating in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/font-awesome/css/font-awesome.min.css" />\n    <link rel="stylesheet" href="path-to/node_modules/jquery-bar-rating/dist/themes/fontawesome-stars.css">'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a simple rating, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <select id="example-fontawesome" name="rating" autocomplete="off">\n      <option value="1">1</option>\n      <option value="2">2</option>\n      <option value="3">3</option>\n      <option value="4">4</option>\n      <option value="5">5</option>\n    </select>\n    \n    '
                        }
                      />
                    </div>
                    {/* Rating Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="BTMaxLength"
                      data-pws-tab-name="Bootstrap Max-Length"
                    >
                      <p>
                        <a href="http://mimo84.github.io/bootstrap-maxlength/">
                          Bootstrap MaxLength
                        </a>{" "}
                        uses a Twitter Bootstrap label to show a visual feedback
                        to the user about the maximum length of the field where
                        the user is inserting text. Uses the HTML5 attribute
                        "maxlength" to work.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a Maxlength input, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <input class="form-control" maxlength="25" name="defaultconfig" id="defaultconfig" type="text">\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Form mask Starts */}
                    <div
                      data-pws-tab="form-mask"
                      data-pws-tab-name="Input Mask"
                    >
                      <p>
                        <a href="http://robinherbots.github.io/Inputmask/">
                          Input-mask
                        </a>{" "}
                        helps the user with the input by ensuring a predefined
                        format. This can be useful for dates, numerics, phone
                        numbers etc.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Inputmask in your application, include the
                        following files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    \n    \n    \n    "}
                      />
                      <p>
                        {" "}
                        The below code shows an example of input mask for date.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    <input class=\"form-control\" data-inputmask=\"'alias': 'date'\" />"
                        }
                      />
                    </div>
                    {/* Form mask Ends */}
                    {/* Typeahead Starts */}
                    <div data-pws-tab="typeahead" data-pws-tab-name="Typeahead">
                      <p>
                        <a href="https://twitter.github.io/typeahead.js/">
                          Typeahead.js
                        </a>{" "}
                        is a flexible JavaScript library that provides a strong
                        foundation for building robust typeaheads.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Typeahead.js in your application, include the
                        following files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> A sample typeahead can be generated as below: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="typeahead sample">\n        <input class="typeahead" type="text" placeholder="States of USA">\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Typeahead Ends */}
                  </div>
                  {/*Additional form elements ends*/}
                  {/*Icons starts*/}
                  <hr className="hr" id="icons" />
                  <h4 className="my-4">Icons</h4>
                  <div className="demo-tabs">
                    {/* MDI icon Starts */}
                    <div
                      data-pws-tab="mdi-icon"
                      data-pws-tab-name="Material Icons"
                    >
                      <p>
                        <a href="https://materialdesignicons.com/">
                          Material Design Icons
                        </a>{" "}
                        growing icon collection allows designers and developers
                        targeting various platforms to download icons in the
                        format, color and size they need for any project.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Material Design Icons in your application,
                        include the following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/mdi/css/materialdesignicons.min.css"/>'
                        }
                      />
                      <p> To generate an icon, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <i class="mdi mdi-bell"></i>\n                                                '
                        }
                      />
                    </div>
                    {/* MDI icon Ends */}
                    {/* Font awesome starts */}
                    <div
                      data-pws-tab="font-awesome"
                      data-pws-tab-name="Font Awesome"
                    >
                      <p>
                        <a href="http://fontawesome.io/">Font Awesome</a> gives
                        you scalable vector icons that can instantly be
                        customized.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Font Awesome in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/font-awesome/css/font-awesome.min.css" />'
                        }
                      />
                      <p>
                        {" "}
                        To create an address-book icon, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={'    <i class="fa fa-address-book">'}
                      />
                    </div>
                    {/* Font awesome Ends */}
                    {/* Themify Starts */}
                    <div
                      data-pws-tab="themify"
                      data-pws-tab-name="Themify Icons"
                    >
                      <p>
                        <a href="https://themify.me/themify-icons">
                          Themify Icons
                        </a>{" "}
                        Themify Icons is a complete set of icons for use in web
                        design and apps.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use themify icons in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/ti-icons/css/themify-icons.css" />'
                        }
                      />
                      <p> To generate an icon, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={'    <i class="ti-arrow-up"></i>'}
                      />
                    </div>
                    {/* Themify Ends */}
                    {/* Simple line icon Starts */}
                    <div
                      data-pws-tab="simple-line-icon"
                      data-pws-tab-name="Simple Line Icons"
                    >
                      <p>
                        <a href="http://simplelineicons.com/">
                          Simple Line Icons
                        </a>{" "}
                        is a set of simple and minimal line icons.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Simple Line Icons in your application, include
                        the following files in &lt;head&gt;.
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/simple-line-icons/css/simple-line-icons.css" />'
                        }
                      />
                      <p> To generate an icon, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={'    <i class="icon-user"></i>'}
                      />
                    </div>
                    {/* Simple line icon Ends */}
                    {/* Flag icon Starts */}
                    <div
                      data-pws-tab="flag-icon"
                      data-pws-tab-name="Flag Icons"
                    >
                      <p>
                        <a href="http://flag-icon-css.lip.is/">Flag Icons</a> is
                        a collection of all country flags in SVG — plus the CSS
                        for easier integration.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Simple Line Icons in your application, include
                        the following files in &lt;head&gt;.
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/flag-icon-css/css/flag-icons.min.css"/>'
                        }
                      />
                      <p> To generate an icon, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <i class="flag-icon flag-icon-ad" title="ad" id="ad"></i>'
                        }
                      />
                    </div>
                    {/* Simple line icon Ends */}
                  </div>
                  {/*icons ends*/}
                  <hr className="hr" id="file-upload" />
                  <h4 className="my-4">File Upload</h4>
                  <div className="demo-tabs">
                    {/* Tabs Starts */}
                    <div data-pws-tab="Dropify" data-pws-tab-name="Dropify">
                      <p>
                        <a href="http://jeremyfagis.github.io/dropify/">
                          Dropify
                        </a>{" "}
                        is a simple drag n drop file upload.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Dropify in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/dropify/dist/css/dropify.min.css">\n                                                '
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n                                                "
                        }
                      />
                      <p>
                        {" "}
                        To create a Dropify file upload, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '      <input type="file" class="dropify"/>\n    \n      '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div data-pws-tab="Dropzone" data-pws-tab-name="Dropzone">
                      <p>
                        <a href="http://www.dropzonejs.com/">Dropzone</a> is an
                        open source library that provides drag’n’drop file
                        uploads with image previews.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a Dropzone file upload,add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <form action="/file-upload" class="dropzone" id="my-awesome-dropzone"></form>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="jquery-file-upload"
                      data-pws-tab-name="Jquery file upload"
                    >
                      <p>
                        <a href="http://hayageek.com/docs/jquery-upload-file.php">
                          jQuery File UPload
                        </a>{" "}
                        plugin provides multiple file uploads with progress bar.
                        jQuery File Upload Plugin depends on Ajax Form Plugin,
                        So Github contains source code with and without form
                        plugin.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use file upload in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/jquery-file-upload/css/uploadfile.css">'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a Jquery file upload,add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="file-upload-wrapper">\n      <div id="fileuploader">Upload</div>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/* New Docs Ends Here */}
                  {/* New Docs Starts Here */}
                  <hr className="hr" id="form-picker" />
                  <h4 className="my-4">Form Picker</h4>
                  <div className="demo-tabs">
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="clock-picker"
                      data-pws-tab-name="Clock Picker"
                    >
                      <p>
                        {" "}
                        We are using{" "}
                        <a href="https://tempusdominus.github.io/bootstrap-4/">
                          Tempus Dominus plugin
                        </a>{" "}
                        in our template to create beautiful time picker.{" "}
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use clock picker in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> To create a clock picker, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div class="input-group date" id="timepicker-example" data-target-input="nearest">\n      <div class="input-group" data-target="#timepicker-example" data-toggle="datetimepicker">\n        <input type="text" class="form-control datetimepicker-input" data-target="#timepicker-example"/>\n        <div class="input-group-addon input-group-append"><i class="mdi mdi-clock input-group-text"></i></div>\n      </div>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="date-picker"
                      data-pws-tab-name="Date Picker"
                    >
                      <p>
                        <a href="https://bootstrap-datepicker.readthedocs.io/en/latest/">
                          Bootstrap Date Picker
                        </a>
                        provides a flexible datepicker widget in the Bootstrap
                        style.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use bootstrap date picker in your application,
                        include the following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p> To create a datepicker, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="datepicker-popup" class="input-group date datepicker">\n      <input type="text" class="form-control">\n      <span class="input-group-addon input-group-append border-left">\n        <span class="mdi mdi-calendar input-group-text"></span>\n      </span>\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                    {/* Tabs Starts */}
                    <div
                      data-pws-tab="color-picker"
                      data-pws-tab-name="Color Picker"
                    >
                      <p>
                        <a href="http://www.oss.io/p/amazingSurge/jquery-asColorPicker">
                          AsColor Picker
                        </a>{" "}
                        is a jQuery plugin that convent input into color picker.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use color picker in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/jquery-asColorPicker/dist/css/asColorPicker.min.css" />\n                                                '
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n    \n     //optional\n                                                "
                        }
                      />
                      <p> To create a color picker, add the following code: </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <input type=\'text\' class="color-picker" value="#ffe74c" />\n    \n    '
                        }
                      />
                    </div>
                    {/* Tabs Ends */}
                  </div>
                  {/* demo-tabs container ends */}
                  {/* New Docs Ends Here */}
                  {/*Form editors starts*/}
                  <hr className="hr" id="editors" />
                  <h4 className="my-4">Editors</h4>
                  <div className="demo-tabs">
                    {/* Tinymce Starts */}
                    <div data-pws-tab="tinymce" data-pws-tab-name="Tinymce">
                      <p>
                        <a href="https://www.tinymce.com/">Tinymce</a> is a
                        full-featured web editing tool.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Tinymce in your application, include the
                        following files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create an editor using tinymce, add the following
                        code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    <textarea id='tinyMceExample'></textarea>\n    \n    "
                        }
                      />
                    </div>
                    {/* Tinymce Ends */}
                    {/* X-editable Starts */}
                    <div
                      data-pws-tab="x-editable"
                      data-pws-tab-name="X-editable"
                    >
                      <p>
                        <a href="https://vitalets.github.io/x-editable/">
                          X-editable
                        </a>{" "}
                        allows you to create editable elements on your page. It
                        can be used with any engine (Bootstrap, jQuery-UI,
                        jQuery only) and includes both popup and inline modes.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use x-editable in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a simple editable text field, add the
                        following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <a href="#" id="username" data-type="text" data-pk="1">awesome</a>\n    \n    '
                        }
                      />
                    </div>
                    {/* X-editable Ends */}
                    {/* Summernote Starts */}
                    <div
                      data-pws-tab="summernote"
                      data-pws-tab-name="Summernote"
                    >
                      <p>
                        <a href="http://summernote.org/">Summernote</a> is a
                        super simple WYSIWYG Editor.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use summernote in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/summernote-bootstrap4/dist/summernote.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create a summernote editor, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="summernoteExample"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Summernote Ends */}
                    {/* SimpleMde Starts */}
                    <div data-pws-tab="simplemde" data-pws-tab-name="SimpleMDE">
                      <p>
                        <a href="https://simplemde.com/">SimpleMDE</a> is a
                        simple, beautiful, and embeddable JavaScript Markdown
                        editor.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use simpleMDE in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/simplemde/dist/simplemde.min.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create an editor using simpleMDE, add the following
                        code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <textarea id="simpleMde">Start editing here</textarea>\n    \n    '
                        }
                      />
                    </div>
                    {/* SimpleMDE Ends */}
                    {/* Quill Starts */}
                    <div data-pws-tab="quill" data-pws-tab-name="Quill">
                      <p>
                        <a href="https://quilljs.com/">Quill</a> is a free, open
                        source WYSIWYG editor built for the modern web.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use Quill in your application, include the following
                        files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/quill/dist/quill.snow.css" />'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    "}
                      />
                      <p>
                        {" "}
                        To create an editor using Quill, add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="quillExample" class="quill-container"></div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Quill Ends */}
                    {/* Ace Starts */}
                    <div data-pws-tab="ace" data-pws-tab-name="Ace">
                      <p>
                        <a href="https://ace.c9.io/">Ace</a> is an embeddable
                        code editor written in JavaScript. It matches the
                        features and performance of native editors such as
                        Sublime, Vim and TextMate.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use ace editor in your application, include the
                        following files in &lt;body&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          "    \n    \n    <!--Choose any theme you wish-->"
                        }
                      />
                      <p>
                        {" "}
                        To create a code editor using ace with a sample code,
                        add the following code:{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <div id="aceExample" class="ace-editor">\n        var x = add(4, 3); // Function is called, return value will end up in x function add(a, b) { return a + b; // Function returns the sum of a and b } var y = mul(4, 3); // Function is called, return value will end up in y function add(a, b) { return a *\n        b; // Function returns the product of a and b }\n    </div>\n    \n    '
                        }
                      />
                    </div>
                    {/* Ace Ends */}
                    {/* Codemirror Starts */}
                    <div
                      data-pws-tab="codemirror"
                      data-pws-tab-name="CodeMirror"
                    >
                      <p>
                        <a href="https://codemirror.net/">CodeMirror</a> is a
                        versatile text editor implemented in JavaScript for the
                        browser. It is specialized for editing code, and comes
                        with a number of language modes and addons that
                        implement more advanced editing functionality.
                      </p>
                      <h5 className="mt-5 mb-4">Usage</h5>
                      <p>
                        {" "}
                        To use CodeMirror in your application, include the
                        following files in &lt;head&gt;.{" "}
                      </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <link rel="stylesheet" href="path-to/node_modules/codemirror/lib/codemirror.css" />\n    <link rel="stylesheet" href="path-to/node_modules/codemirror/theme/ambiance.css" /><!--Choose a theme you wish-->'
                        }
                      />
                      <p> Add the following script files in &lt;body&gt;. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={"    \n    "}
                      />
                      <p> Here is an example of an editor using CodeMirror. </p>
                      <textarea
                        className="multiple-codes"
                        defaultValue={
                          '    <textarea rows="4" cols="50" name="code-editable" id="code-editable">\n      \n    </textarea>\n    \n    '
                        }
                      />
                    </div>
                    {/*  CodeMirror Ends */}
                  </div>
                  {/*Form editors ends*/}
                </div>{" "}
                {/* Card Block Ends Here */}
              </div>
            </div>
            <div className="col-12 grid-margin credits" id="credits">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4">Credits</h3>
                  <p>We have used the following plugins in Purple admin</p>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <ul className="credit-list">
                        <li>
                          <p>Ace editor</p>{" "}
                          <a href="https://ace.c9.io/" target="_blank">
                            https://ace.c9.io/
                          </a>
                        </li>
                        <li>
                          <p>Bootstrap</p>{" "}
                          <a href="https://getbootstrap.com/" target="_blank">
                            https://getbootstrap.com/
                          </a>
                        </li>
                        <li>
                          <p>Bootstrap Datepicker</p>{" "}
                          <a
                            href="https://gitter.im/uxsolutions/bootstrap-datepicker"
                            target="_blank"
                          >
                            https://gitter.im/uxsolutions/bootstrap-datepicker
                          </a>
                        </li>
                        <li>
                          <p>Bootstrap Maxlength</p>{" "}
                          <a
                            href="http://mimo84.github.com/bootstrap-maxlength"
                            target="_blank"
                          >
                            http://mimo84.github.com/bootstrap-maxlength
                          </a>
                        </li>
                        <li>
                          <p>C3</p>{" "}
                          <a
                            href="https://travis-ci.org/c3js/c3"
                            target="_blank"
                          >
                            https://travis-ci.org/c3js/c3
                          </a>
                        </li>
                        <li>
                          <p>Chart.js</p>{" "}
                          <a href="https://www.chartjs.org/" target="_blank">
                            https://www.chartjs.org/
                          </a>
                        </li>
                        <li>
                          <p>Chartist</p>{" "}
                          <a
                            href="https://gionkunz.github.io/chartist-js/"
                            target="_blank"
                          >
                            https://gionkunz.github.io/chartist-js/
                          </a>
                        </li>
                        <li>
                          <p>Clipboard</p>{" "}
                          <a href="https://clipboardjs.com" target="_blank">
                            https://clipboardjs.com
                          </a>
                        </li>
                        <li>
                          <p>Codemirror</p>{" "}
                          <a href="https://codemirror.net/" target="_blank">
                            https://codemirror.net/
                          </a>
                        </li>
                        <li>
                          <p>Colcade</p>{" "}
                          <a
                            href="https://github.com/desandro/colcade"
                            target="_blank"
                          >
                            https://github.com/desandro/colcade/
                          </a>
                        </li>
                        <li>
                          <p>D3</p>{" "}
                          <a href="https://d3js.org" target="_blank">
                            https://d3js.org
                          </a>
                        </li>
                        <li>
                          <p>Datatables.net</p>{" "}
                          <a href="https://datatables.net/" target="_blank">
                            https://datatables.net/
                          </a>
                        </li>
                        <li>
                          <p>Dragula</p>{" "}
                          <a
                            href="https://bevacqua.github.io/dragula/"
                            target="_blank"
                          >
                            https://bevacqua.github.io/dragula/
                          </a>
                        </li>
                        <li>
                          <p>Dropify</p>{" "}
                          <a
                            href="http://jeremyfagis.github.io/dropify/"
                            target="_blank"
                          >
                            http://jeremyfagis.github.io/dropify/
                          </a>
                        </li>
                        <li>
                          <p>Dropzone</p>{" "}
                          <a href="http://www.dropzonejs.com/" target="_blank">
                            http://www.dropzonejs.com/
                          </a>
                        </li>
                        <li>
                          <p>Flag icons</p>{" "}
                          <a
                            href="http://lipis.github.io/flag-icon-css/"
                            target="_blank"
                          >
                            http://lipis.github.io/flag-icon-css/
                          </a>
                        </li>
                        <li>
                          <p>Flot</p>{" "}
                          <a href="https://www.flotcharts.org/" target="_blank">
                            https://www.flotcharts.org/
                          </a>
                        </li>
                        <li>
                          <p>Font awesome</p>{" "}
                          <a href="https://fontawesome.com/" target="_blank">
                            https://fontawesome.com/
                          </a>
                        </li>
                        <li>
                          <p>Full calendar</p>{" "}
                          <a href="https://fullcalendar.io/" target="_blank">
                            https://fullcalendar.io/
                          </a>
                        </li>
                        <li>
                          <p>Gulp</p>{" "}
                          <a href="https://gulpjs.com/" target="_blank">
                            https://gulpjs.com/
                          </a>
                        </li>
                        <li>
                          <p>Icheck</p>{" "}
                          <a href="http://icheck.fronteed.com/" target="_blank">
                            http://icheck.fronteed.com/
                          </a>
                        </li>
                        <li>
                          <p>Inputmask</p>{" "}
                          <a
                            href="http://robinherbots.github.io/Inputmask/"
                            target="_blank"
                          >
                            http://robinherbots.github.io/Inputmask/
                          </a>
                        </li>
                        <li>
                          <p>Ion range slider</p>{" "}
                          <a
                            href="http://ionden.com/a/plugins/ion.rangeSlider/en.html"
                            target="_blank"
                          >
                            http://ionden.com/a/plugins/ion.rangeSlider/en.html
                          </a>
                        </li>
                        <li>
                          <p>JQuery</p>{" "}
                          <a href="https://jquery.com/" target="_blank">
                            https://jquery.com/
                          </a>
                        </li>
                        <li>
                          <p>JQuery asColorPicker</p>{" "}
                          <a
                            href="https://github.com/thecreation/jquery-asColorPicker"
                            target="_blank"
                          >
                            https://github.com/thecreation/jquery-asColorPicker
                          </a>
                        </li>
                        <li>
                          <p>JQuery bar rating</p>{" "}
                          <a
                            href="http://antenna.io/demo/jquery-bar-rating/examples/"
                            target="_blank"
                          >
                            http://antenna.io/demo/jquery-bar-rating/examples/
                          </a>
                        </li>
                        <li>
                          <p>JQuery context menu</p>{" "}
                          <a
                            href="http://swisnl.github.io/jQuery-contextMenu/"
                            target="_blank"
                          >
                            http://swisnl.github.io/jQuery-contextMenu/
                          </a>
                        </li>
                        <li>
                          <p>JQuery file upload</p>{" "}
                          <a
                            href="http://hayageek.com/docs/jquery-upload-file.php"
                            target="_blank"
                          >
                            http://hayageek.com/docs/jquery-upload-file.php
                          </a>
                        </li>
                        <li>
                          <p>JQuery Mapael</p>{" "}
                          <a
                            href="https://github.com/neveldo/mapael-maps"
                            target="_blank"
                          >
                            https://github.com/neveldo/mapael-maps
                          </a>
                        </li>
                        <li>
                          <p>JQuery sparklin</p>{" "}
                          <a
                            href="http://omnipotent.net/jquery.sparkline/"
                            target="_blank"
                          >
                            http://omnipotent.net/jquery.sparkline/
                          </a>
                        </li>
                        <li>
                          <p>JQuery-steps</p>{" "}
                          <a
                            href="http://www.jquery-steps.com/"
                            target="_blank"
                          >
                            http://www.jquery-steps.com/
                          </a>
                        </li>
                        <li>
                          <p>JQuery Tags Input</p>{" "}
                          <a
                            href="http://xoxco.com/projects/code/tagsinput/"
                            target="_blank"
                          >
                            http://xoxco.com/projects/code/tagsinput/
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6">
                      <ul className="credit-list">
                        <li>
                          <p>JQuery Toast</p>{" "}
                          <a
                            href="https://kamranahmed.info/toast"
                            target="_blank"
                          >
                            https://kamranahmed.info/toast
                          </a>
                        </li>
                        <li>
                          <p>JQuery Validation</p>{" "}
                          <a
                            href="https://jqueryvalidation.org/"
                            target="_blank"
                          >
                            https://jqueryvalidation.org/
                          </a>
                        </li>
                        <li>
                          <p>JQuery Avgrund</p>{" "}
                          <a
                            href="https://github.com/voronianski/jquery.avgrund.js"
                            target="_blank"
                          >
                            https://github.com/voronianski/jquery.avgrund.js
                          </a>
                        </li>
                        <li>
                          <p>JQuery Repeater</p>{" "}
                          <a
                            href="http://briandetering.net/repeater"
                            target="_blank"
                          >
                            http://briandetering.net/repeater
                          </a>
                        </li>
                        <li>
                          <p>JSgrid</p>{" "}
                          <a href="http://js-grid.com/" target="_blank">
                            http://js-grid.com/
                          </a>
                        </li>
                        <li>
                          <p>JSgrid</p>{" "}
                          <a href="http://js-grid.com/" target="_blank">
                            http://js-grid.com/
                          </a>
                        </li>
                        <li>
                          <p>Justgage</p>{" "}
                          <a href="http://justgage.com/" target="_blank">
                            http://justgage.com/
                          </a>
                        </li>
                        <li>
                          <p>JVector Map</p>{" "}
                          <a href="http://jvectormap.com/" target="_blank">
                            http://jvectormap.com/
                          </a>
                        </li>
                        <li>
                          <p>Light gallery</p>{" "}
                          <a
                            href="http://sachinchoolur.github.io/lightGallery/"
                            target="_blank"
                          >
                            http://sachinchoolur.github.io/lightGallery/
                          </a>
                        </li>
                        <li>
                          <p>Material Design Icons</p>{" "}
                          <a
                            href="https://materialdesignicons.com/"
                            target="_blank"
                          >
                            https://materialdesignicons.com/
                          </a>
                        </li>
                        <li>
                          <p>Moment.js</p>{" "}
                          <a href="https://momentjs.com/" target="_blank">
                            https://momentjs.com/
                          </a>
                        </li>
                        <li>
                          <p>Morris.js</p>{" "}
                          <a href="https://momentjs.com/" target="_blank">
                            https://momentjs.com/
                          </a>
                        </li>
                        <li>
                          <p>NoUISlider</p>{" "}
                          <a
                            href="https://refreshless.com/nouislider/"
                            target="_blank"
                          >
                            https://refreshless.com/nouislider/
                          </a>
                        </li>
                        <li>
                          <p>Owl carousel</p>{" "}
                          <a
                            href="https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html"
                            target="_blank"
                          >
                            https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
                          </a>
                        </li>
                        <li>
                          <p>Perfect scrollbar</p>{" "}
                          <a
                            href="http://utatti.github.io/perfect-scrollbar/"
                            target="_blank"
                          >
                            http://utatti.github.io/perfect-scrollbar/
                          </a>
                        </li>
                        <li>
                          <p>Popper.js</p>{" "}
                          <a href="https://popper.js.org/" target="_blank">
                            https://popper.js.org/
                          </a>
                        </li>
                        <li>
                          <p>Progressbar.js</p>{" "}
                          <a
                            href="https://progressbarjs.readthedocs.io/en/latest/"
                            target="_blank"
                          >
                            https://progressbarjs.readthedocs.io
                          </a>
                        </li>
                        <li>
                          <p>PWS Tabs</p>{" "}
                          <a
                            href="https://alexchizhov.com/pwstabs/"
                            target="_blank"
                          >
                            https://alexchizhov.com/pwstabs/
                          </a>
                        </li>
                        <li>
                          <p>Quill Editor</p>{" "}
                          <a href="https://quilljs.com/" target="_blank">
                            https://quilljs.com/
                          </a>
                        </li>
                        <li>
                          <p>Rapheal</p>{" "}
                          <a
                            href="http://dmitrybaranovskiy.github.io/raphael/"
                            target="_blank"
                          >
                            http://dmitrybaranovskiy.github.io/raphael/
                          </a>
                        </li>
                        <li>
                          <p>Select 2</p>{" "}
                          <a href="https://select2.org/" target="_blank">
                            https://select2.org/
                          </a>
                        </li>
                        <li>
                          <p>Simple line icons</p>{" "}
                          <a href="http://simplelineicons.com/" target="_blank">
                            http://simplelineicons.com/
                          </a>
                        </li>
                        <li>
                          <p>SimpleMDE</p>{" "}
                          <a href="https://simplemde.com/" target="_blank">
                            https://simplemde.com/
                          </a>
                        </li>
                        <li>
                          <p>Summernote</p>{" "}
                          <a href="https://summernote.org/" target="_blank">
                            https://summernote.org/
                          </a>
                        </li>
                        <li>
                          <p>Sweetalert</p>{" "}
                          <a href="http://sweetalert.js.org" target="_blank">
                            http://sweetalert.js.org
                          </a>
                        </li>
                        <li>
                          <p>Tempusdominus-bootstrap-4</p>{" "}
                          <a
                            href="https://tempusdominus.github.io/bootstrap-4/"
                            target="_blank"
                          >
                            https://tempusdominus.github.io/bootstrap-4/
                          </a>
                        </li>
                        <li>
                          <p>Themify icons</p>{" "}
                          <a
                            href="https://themify.me/themify-icons"
                            target="_blank"
                          >
                            https://themify.me/themify-icons
                          </a>
                        </li>
                        <li>
                          <p>TinyMCE</p>{" "}
                          <a href="https://www.tiny.cloud/" target="_blank">
                            https://www.tiny.cloud/
                          </a>
                        </li>
                        <li>
                          <p>TWBS pagination</p>{" "}
                          <a
                            href="https://esimakin.github.io/twbs-pagination/"
                            target="_blank"
                          >
                            https://esimakin.github.io/twbs-pagination/
                          </a>
                        </li>
                        <li>
                          <p>Typeahead</p>{" "}
                          <a
                            href="https://twitter.github.io/typeahead.js/"
                            target="_blank"
                          >
                            https://twitter.github.io/typeahead.js/
                          </a>
                        </li>
                        <li>
                          <p>Xeditable</p>{" "}
                          <a
                            href="https://vitalets.github.io/x-editable/"
                            target="_blank"
                          >
                            https://vitalets.github.io/x-editable/
                          </a>
                        </li>
                      </ul>
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

   </>
  )
}
