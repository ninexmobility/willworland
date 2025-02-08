// src/components/ProjectsModal.tsx

import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import "./ProjectsModal.css";

interface Project {
    id: number;
    title: string;
    imageSrc: string;
    description?: string;
}

interface ProjectsModalProps {
    show: boolean;
    handleClose: () => void;
    projects: Project[];
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({
    show,
    handleClose,
    projects,
}) => {
    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title>My Projects</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    {projects.map((project) => (
                        <Col
                            xs={6}
                            md={4}
                            key={project.id}
                            className='project-thumbnail'>
                            <Image
                                src={project.imageSrc}
                                thumbnail
                                alt={project.title}
                            />
                            <p className='project-title'>{project.title}</p>
                        </Col>
                    ))}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProjectsModal;
