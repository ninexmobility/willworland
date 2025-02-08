/**
 * src/components/appBar/AppBar.tsx
 * author: ninex
 */

import React, { useState } from "react";
import "./AppBar.css";
import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { PiReadCvLogoFill } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai"; // Store icon
import { useNavigate } from "react-router-dom";
import ResumeModal from "../resumeModal/ResumeModal";
import ProjectsModal from "../projectsModal/ProjectsModal";
import { projects } from "../../data/projects";

/**
 * AppBar component renders the bottom navigation bar with icons for navigation.
 * It includes buttons for Home, Projects, Resume, and Store, handling modal visibility.
 *
 * @component
 * @returns {React.ReactElement} The AppBar component.
 */
const AppBar: React.FC = () => {
    // State to control the visibility of the Resume modal
    const [showResume, setShowResume] = useState(false);
    // State to control the visibility of the Projects modal
    const [showProjects, setShowProjects] = useState(false);
    // Hook for navigation
    const navigate = useNavigate();

    /**
     * Opens the Resume modal by setting showResume to true.
     */
    const handleResumeOpen = () => {
        setShowResume(true);
    };

    /**
     * Closes the Resume modal by setting showResume to false.
     */
    const handleResumeClose = () => {
        setShowResume(false);
    };

    /**
     * Opens the Projects modal by setting showProjects to true.
     */
    const handleProjectsOpen = () => {
        setShowProjects(true);
    };

    /**
     * Closes the Projects modal by setting showProjects to false.
     */
    const handleProjectsClose = () => {
        setShowProjects(false);
    };

    /**
     * Navigates to the Store page.
     */
    const handleStoreOpen = () => {
        navigate("/store");
    };

    return (
        <div className='app-bar'>
            {/* Home button navigates to the root path */}
            <button
                className='home-button'
                onClick={() => navigate("/")}
                aria-label='Home'>
                <FaHome size={32} />
            </button>

            {/* Projects button opens the Projects modal */}
            <button
                className='projects-button'
                onClick={handleProjectsOpen}
                aria-label='Projects'>
                <GrProjects size={24} />
            </button>

            {/* Resume button opens the Resume modal */}
            <button
                className='resume-button'
                onClick={handleResumeOpen}
                aria-label='Resume'>
                <PiReadCvLogoFill size={24} />
            </button>

            {/* Store button navigates to the Store page */}
            <button
                className='store-button'
                onClick={handleStoreOpen}
                aria-label='Store'>
                <AiOutlineShoppingCart size={24} />
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
