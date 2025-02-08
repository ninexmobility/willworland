// src/components/AppBar.tsx

import React, { useState } from "react";
import "./AppBar.css";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { PiReadCvLogoFill } from "react-icons/pi";
import ResumeModal from "../resumeModal/ResumeModal"; // Ensure this path is correct

import ProjectsModal from "../projectsModal/ProjectsModal";
import { projects } from "../../data/projects";

const AppBar: React.FC = () => {
    const [showResume, setShowResume] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    const handleResumeOpen = () => {
        setShowResume(true);
    };

    const handleResumeClose = () => {
        setShowResume(false);
    };

    const handleProjectsOpen = () => {
        setShowProjects(true);
    };

    const handleProjectsClose = () => {
        setShowProjects(false);
    };
    return (
        <div className='app-bar'>
            <button aria-label='Home'>
                <FaHome size={32} />
            </button>
            <button
                className='resume-button'
                onClick={handleProjectsOpen}
                aria-label='Projects'>
                <GrProjects size={32} />
            </button>
            <button
                className='resume-button'
                onClick={handleResumeOpen}
                aria-label='Resume'>
                <PiReadCvLogoFill size={32} />
            </button>

            {/* Resume Modal */}
            <ResumeModal show={showResume} handleClose={handleResumeClose} />
            {/* Projects Modal */}
            <ProjectsModal
                show={showProjects}
                handleClose={handleProjectsClose}
                projects={projects}
            />
        </div>
    );
};

export default AppBar;
