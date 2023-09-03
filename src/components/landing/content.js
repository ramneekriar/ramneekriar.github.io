import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import pccLogo from "../../images/pcclogo.jpg"
import bmoLogo from "../../images/bmologo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCalendar,
  faTerminal,
  faGraduationCap,
  faUserGraduate,
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
          <>
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
                        <h3>Toronto Metropolitan University</h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faGraduationCap}
                            className="mr-2"
                          />
                          Computer Science (Co-op)
                        </h4>
                        <h4>
                          <FontAwesomeIcon
                            icon={faUserGraduate}
                            className="mr-2"
                          />{" "}
                          October 2024
                        </h4>
                      </div>

                      <div className="card-text">
                        I am working to earn my Bachelor's Degree in Computer Science at Toronto
                        Metropolitan University.
                        <br />
                        Relevent coursework includes: 
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
                        <h3 style={{display: "inline-block"}}>
                          <img style={{paddingRight: "5px", verticalAlign: "bottom"}} src={pccLogo} />
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
                          January 2023 - August 2023
                        </h4>
                      </div>

                      <div className="card-text">
                      ◆ Spearheaded the UI development of a customer messaging service web-app using React, MUI and Restful
                        APIs to supply and configure messages to over 17K facilities across North America.
                        <br />
                        ◆ Integrated Identity Access Management features within core application for user transition and experience.
                        <br />
                        ◆ Resolved production defects and delivering high-quality code and documentation for assigned tickets.
                        <br />
                        ◆ Participated in code reviews with feedback to enhance code quality, efficiency, and maintainability.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <div className="card-title">
                      <h3 style={{display: "inline-block"}}>
                          <img style={{paddingRight: "5px", verticalAlign: "bottom"}} src={bmoLogo} />
                          BMO Financial Group
                        </h3>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            className="mr-2"
                          />{" "}
                          Quality Assurance Analyst Intern
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          May 2021 - December 2021
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ Developed a suite of test cases from scratch to perform automated visual regression testing for over 70+ web
                        components using Python Selenium and Applitools in agile environment.
                        <br />
                        ◆ Refactored the team code base as a result of updating to latest version of Storybook to improve efficiency of
                        components with InVision.
                        <br />
                        ◆ Analyzed components to unify 100+ pages of documentation and code base between subsystems on InVision.
                        <br />
                        ◆ Maintained and achieved accessibility guidelines (WCAG 2.1) whilst optimizing web components collaborating
                        with design and development teams.
                      
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
              </div>
              {/* - Projects subsection */}
            </section>
          </>
        )}
      />
    )
  }
}
