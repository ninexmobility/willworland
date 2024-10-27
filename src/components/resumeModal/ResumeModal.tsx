// src/components/ResumeModal.tsx

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ResumeModal.css";

interface ResumeModalProps {
    show: boolean;
    handleClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title>Will Worland | Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Resume content goes here */}
                <div className='resume-content'>
                    <p>
                        Email:{" "}
                        <a href='mailto:me@willworland.com'>
                            me@willworland.com
                        </a>
                    </p>

                    <h4>Professional Summary</h4>
                    <p>
                        Hey, I'm Will – a seasoned Senior Engineer and Universal
                        Endpoint Management (UEM/EMM/MDM) specialist with a
                        passion for all things tech. With a career spanning over
                        25 years, I've dedicated myself to mastering the art of
                        the 'Mobile Digital Workplace' and ensuring that the
                        devices driving today's innovations are not only secure
                        but also optimized for peak performance.{" "}
                    </p>
                    <p>
                        The last 10 years or so I've been on a knowledge
                        journey, collecting as much experience and training as I
                        can to become a Full Stack Software Engineer, and this
                        year it finally became a reality. I've joined a team
                        that focuses on I.T. Solution Automation as a Level 3
                        Software Engineer.{" "}
                    </p>
                    <p>
                        Beyond my professional life, I'm a dedicated family
                        person who enjoys spending quality time with my wife and
                        kids. My interests extend to such things like, learning
                        new technologies, traveling & the great outdoors.{" "}
                    </p>

                    <h4>Experience</h4>
                    <ul>
                        <li>
                            <strong>
                                Engineer 3 | Software || Enterprise Mobility
                            </strong>
                            <br />
                            <em>02/2024 - Current</em>
                            <p>
                                <em>Greater St. Louis Area</em>
                            </p>
                            <p>
                                As a software engineer on the Automation team, I
                                am focused on creating custom workflows and
                                services for other engineering teams at
                                Enterprise Mobility. I am bringing over my
                                existing mobility projects: CICD Application
                                Packaging Pipeline & Secure Lockdown Application
                                (EM App Launcher) for MobiControl. I'll be
                                expanding both offerings moving forward and look
                                forward to working on new automation projects as
                                they arise.
                            </p>

                            <strong>
                                Engineer 3 | Systems || Enterprise Mobility
                            </strong>
                            <br />
                            <em>04 /2019 - Current</em>
                            <p>
                                As an Engineer III on the Mobility Workplace
                                Solutions Engineering team at Enterprise
                                Mobility, I drove innovation by challenging the
                                status quo. I was and still am responsible for
                                'MobiLauncher' a secure Lockdown application
                                written in Modern JavaScript.
                            </p>
                        </li>
                        <li>
                            <strong>
                                Mobility Consultant || NinexMobility
                            </strong>
                            <br />
                            <em>01/2019 - 04/2019</em>
                            <p>
                                <em>San Francisco Bay Area</em>
                            </p>
                            <p>
                                As contract Mobility Consultant, I helped
                                organizations stand up, migrate and upgrade
                                their Enterprise Mobility Management Solutions.
                            </p>
                        </li>
                        <li>
                            <strong>
                                Engineer 2 | Systems || Uber Technologies
                            </strong>
                            <br />
                            <em>08/2017 - 01/2019</em>
                            <p>
                                <em>San Francisco Bay Area</em>
                            </p>
                            <p>
                                As a Client Platform Engineer, I helped Uber
                                design and deploy their BYOD program for
                                employee mobile devices. Wrote Puppet, Chef and
                                Chocolatey configs for Linux, Mac, and Windows
                                endpoints.
                            </p>
                        </li>{" "}
                        <li>
                            <strong>
                                I.T & E-Commerce Director || Metro Vapors, LLC
                            </strong>
                            <br />
                            <em>01/2015 - 08/2017</em>
                            <p>
                                <em>Dallas/Ft. Worth Metro</em>
                            </p>
                            <p>
                                During my tenure as the IT and E-Commerce
                                Director at Metro Vapors, I took on a
                                multifaceted role that involved overseeing
                                various aspects of the business. From front of
                                house sales, customer service and repair to
                                design and deployment of in store POS (Square)
                                and online E-Commerce (BigCommerce) platforms.
                            </p>
                        </li>
                        {/* Add more experience as needed */}
                    </ul>

                    <h3>Education</h3>
                    <ul>
                        <li>
                            <strong>
                                General Ed. / Wireless Telecommunications
                            </strong>
                            <br />
                            <em>Collin College, 2002</em>
                        </li>
                        {/* Add more education as needed */}
                    </ul>

                    <h3>Skills</h3>
                    <ul>
                        <li>
                            Universal Endpoint Management (Soti
                            MobiControl/VMWare AirWatch/MS Intune/IBM MaaS360)
                        </li>
                        <li>
                            Infrastructure as Code (IaS)
                            (Terraform/Ansible/Puppet/Chef)
                        </li>
                        <li>
                            Cloud Solutions
                            (AWS/Azure/GoogleCloud/CloudFlare/GitHub/Bitbucket)
                        </li>
                        <li>Full Stack Development (HTML/CSS3/JavaScript)</li>
                        <li>Stacks: (MERN/MEAN/.NET/Django/Flask) </li>
                        <li>Frameworks: Bootstrap/Material/Express/NextJS/</li>
                        <li>Automation: Python/Selenium/Appium</li>

                        {/* Add more skills as needed */}
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
                {/* Optionally, add a download button */}
                {/* <Button variant="primary">Download Resume</Button> */}
            </Modal.Footer>
        </Modal>
    );
};

export default ResumeModal;
