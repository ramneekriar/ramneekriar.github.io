import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

import Resume from '../data/Resume_Ramneek_Riar.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faArrowUp, faFile } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-scroll"

export default class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query footerTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <footer>
              <div className="container py-4">
                <div className="row justify-content-center mt-2">
                  <ul className="list-style-none">
                    <li className="list-inline-item ml-2">
                      <Link
                        to="header"
                        className="link"
                        smooth={true}
                        role="button"
                        aria-label="To the top"
                      >
                        <FontAwesomeIcon icon={faArrowUp} />
                      </Link>
                    </li>
                    <li className="list-inline-item mr-4" alt="site title">
                      &copy; {new Date().getFullYear()}.{" "}
                      {data.site.siteMetadata.title}.
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="mailto:ramneek.riar@torontomu.ca"
                        target="_blank"
                        rel="noreferrer"
                        alt="email link"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://github.com/ramneekriar"
                        target="_blank"
                        rel="noreferrer"
                        alt="github link"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-inline-item mr-4">
                      <a
                        href="https://www.linkedin.com/in/ramneekriar/"
                        target="_blank"
                        rel="noreferrer"
                        alt="linkedin link"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href={Resume}
                        target="_blank"
                        without rel="noopener noreferrer"
                        alt="ramneek riar resume"
                      >
                        <FontAwesomeIcon icon={faFile} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </>
        )}
      ></StaticQuery>
    )
  }
}
