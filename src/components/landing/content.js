import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import pccLogo from "../../images/pcclogo.jpg"
import bmoLogo from "../../images/bmologo.png"
import tmuLogo from "../../images/tmulogo.jpg"
import rmitLogo from "../../images/rmitLogo.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
  faGlobe,
  faCode,
} from "@fortawesome/free-solid-svg-icons"

export default class Content extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query projectsQuery {
            allProjectsJson {
              edges {
                node {
                  project
                  link
                  description
                  language
                }
              }
            }
            allLanguagesJson {
              edges {
                node {
                  id
                  language
                }
              }
            }
          }
        `}
        render={data => (
          <section className="content" id="content">
            <div className="container">
              {/* + School subsection */}
              <div className="subsection">
                <h2 className="mt-5">
                  <span className="dot"></span>Education{" "}
                  <span className="word"></span>
                </h2>

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                    <h3 style={{ display: "inline-block" }}>
                        <img
                          style={{
                            paddingRight: "5px",
                            verticalAlign: "bottom",
                            width: "5%",
                            height: "auto"
                          }}
                          src={tmuLogo}
                          alt="Toronto Metropolitan University Logo"
                        />
                        Toronto Metropolitan University
                      </h3>
                      <h4>
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          className="mr-2"
                        />
                        &nbsp;Computer Science (Co-op)
                      </h4>
                      <h4>
                        <FontAwesomeIcon
                          icon={faUserGraduate}
                          className="mr-2"
                        />{" "}
                        &nbsp;October 2024
                      </h4>
                    </div>

                    <div className="card-text">
                      Relevant coursework includes: 
                      <br />
                      <ul>
                        <li>Data Structures</li>
                        <li>Database Systems</li>
                        <li>Data Mining</li>
                        <li>Artificial Intelligence I</li>
                        <li>Intro to Software Engineering</li>
                        <li>Intro to C and UNIX</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                    <h3 style={{ display: "inline-block" }}>
                        <img
                          style={{
                            paddingRight: "5px",
                            verticalAlign: "bottom",
                            width: "4%",
                            height: "auto"
                          }}
                          src={rmitLogo}
                          alt="Royal Melbourne Institute of Technology Logo"
                        />
                        Royal Melbourne Institute of Technology (RMIT)
                      </h3>
                      <h4>
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="mr-2"
                        />
                        &nbsp;Study Abroad Semester in Melbourne, Australia 🇦🇺
                      </h4>
                    </div>

                    <div className="card-text">
                      Relevant coursework includes: 
                      <br />
                      <ul>
                        <li>Professional Computing Practice</li>
                        <li>Cloud Computing</li>
                        <li>Practical Data Science</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* - School subsection */}

              {/* + Job subsection */}
              <div className="subsection">
                <h2>
                  <span className="dot"></span>Experience{" "}
                  <span className="word"></span>
                </h2>

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 style={{ display: "inline-block" }}>
                        <img
                          style={{
                            paddingRight: "5px",
                            verticalAlign: "bottom",
                          }}
                          src={pccLogo}
                          alt="PointClickCare Logo"
                        />
                        PointClickCare
                      </h3>
                      <h4>
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="mr-2"
                        />{" "}
                        Software Engineer Intern
                      </h4>
                      <h4>
                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                        January 2023 - December 2023
                      </h4>
                    </div>

                    <div className="card-text">
                      ◆ Spearheaded the UI development of a customer messaging service web-app using React, MUI, and Restful
                      APIs to supply and configure messages to over <b>17K facilities across North America</b>
                      <br />
                      ◆ Collaborated with cross-functional teams by creating <b>70+ JIRA issues</b> to address custom organization code and prioritizing code standardization requirements
                      <br />
                      ◆ Integrated Identity Access Management features within core application for user transition and experience
                      <br />
                      ◆ Analyzed and resolved production defects, delivering high-quality code and documentation for assigned tickets
                      <br />
                      ◆ Participated in code reviews with feedback to enhance code quality, efficiency, and maintainability
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h3 style={{ display: "inline-block" }}>
                        <img
                          style={{
                            paddingRight: "5px",
                            verticalAlign: "bottom",
                          }}
                          src={bmoLogo}
                          alt="BMO Financial Group Logo"
                        />
                        BMO Financial Group
                      </h3>
                      <h4>
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          className="mr-2"
                        />{" "}
                        QA Engineer Intern
                      </h4>
                      <h4>
                        <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                        May 2021 - December 2021
                      </h4>
                    </div>

                    <div className="card-text">
                      ◆ Developed a suite of test cases from scratch to perform automated visual regression testing for over 70+ web
                      components using <b>Python Selenium and Applitools</b> in an agile environment
                      <br />
                      ◆ Refactored the team code base as a result of updating to the latest version of Storybook to improve efficiency of
                      components with InVision
                      <br />
                      ◆ Analyzed components to unify <b>100+</b> pages of documentation and code base between subsystems on InVision
                      <br />
                      ◆ Maintained and achieved accessibility guidelines <b>(WCAG 2.1)</b> whilst optimizing web components collaborating
                      with design and development teams
                    </div>
                  </div>
                </div>
              </div>
              {/* - Job subsection */}

              {/* + Technologies subsection */}
              <div className="subsection">
                <h2 className="mt-5">
                  <span className="dot"></span>Technologies{" "}
                  <span className="word"></span>
                </h2>
                <div className="row">
                  {data.allLanguagesJson.edges.map(({ node }, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <div className="card">
                        <div className="card-text">
                          <div className="card-item">
                            <FontAwesomeIcon
                              icon={faTerminal}
                              className="mr-2 item-icon"
                            />{" "}
                            {node.language}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* - Technologies subsection */}

              {/* + Projects subsection */}
              <div className="subsection">
                <h2 className="mt-5">
                  <span className="dot"></span>Projects{" "}
                  <span className="word"></span>
                </h2>
                <div className="row">
                  {data.allProjectsJson.edges.map(({ node }, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="card-title">
                            <h3>{node.project}</h3>
                            <h4>
                              <FontAwesomeIcon
                                icon={faCode}
                                className="mr-2"
                              />
                              {node.language}
                            </h4>
                          </div>

                          <div className="card-text">{node.description}</div>
                        </div>
                        <div className="card-footer">
                          <a
                            href={node.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* - Projects subsection */}
            </div>
          </section>
        )}
      />
    )
  }
}
