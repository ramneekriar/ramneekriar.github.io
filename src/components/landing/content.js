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
                      ◆ Led UI development of a customer messaging solution using React, Java, and RESTful APIs to improve communication
                      across 30,000+ healthcare facilities in North America
                        <br />
                        ◆ Integrated Identity Access Management (IAM) features, including multi-factor authentication (MFA) and feature
                        flags, to resolve critical SSO login tracking bugs and enhance security across organizations
                        <br />
                        ◆ Streamlined user authentication process by resolving IAM sync issues and improving password expiry workflows
                        <br />
                        ◆ Developed and documented APIs using Swagger for IAM migration project for phased rollout across organizations
                        <br />
                        ◆ Created DDL scripts to audit important announcements sent to healthcare facilities within organization
                        <br />
                        ◆ Managed cross-functional collaboration, auditing codebase and creating 70+ JIRA issues to standardize code for custom
                        organization-specific features
                        <br />
                        ◆ Optimized system performance through routine AppDynamics upgrades and authored internal guide for the team
                        <br />
                        ◆ Resolved production defects reported by customers, improving system reliability and reducing downtime for facilities
                        <br />
                        ◆ Engineered the UI for an LLM chatbot hackathon project using React, completing it within one week
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
                          Software Developer Intern
                        </h4>
                        <h4>
                          <FontAwesomeIcon icon={faCalendar} className="mr-2" />{" "}
                          May 2021 - December 2021
                        </h4>
                      </div>

                      <div className="card-text">
                        ◆ Built automated visual regression tests from scratch for over 70+ web components using Python Selenium and
                        Applitools in an agile environment
                        <br />
                        ◆ Achieved reduction in development time by refactoring team codebase, resulting in improved component efficiency and
                        smoother integration with design collaboration platform
                        <br />
                        ◆ Unified 100+ pages of documentation across design subsystems through comprehensive component analysis
                        <br />
                        ◆ Ensured WCAG 2.1 compliance by optimizing web components, collaborating closely with design and development teams
                        to meet accessibility standards
                      
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
