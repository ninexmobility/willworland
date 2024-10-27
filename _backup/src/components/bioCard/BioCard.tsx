// src/components/BioCard.tsx

import React from "react";
import { Card } from "react-bootstrap";
import { Github, Instagram, Linkedin } from "react-bootstrap-icons";
import "./BioCard.css";

interface BioCardProps {
    bio: string;
    title?: string;
    email?: string;
    socialLinks?: {
        linkedin?: string;
        github?: string;
        instagram?: string;
    };
}

const BioCard: React.FC<BioCardProps> = ({ bio, email, socialLinks }) => {
    return (
        <Card className='bio-card'>
            <Card.Body>
                <div className='bio-text'>{bio}</div>
                {email && (
                    <p className='bio-text'>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${email}`}>{email}</a>
                    </p>
                )}
                <div className='social-icons'>
                    {socialLinks?.linkedin && (
                        <a
                            href={socialLinks.linkedin}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Linkedin size={24} />
                        </a>
                    )}
                    {socialLinks?.github && (
                        <a
                            href={socialLinks.github}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Github size={24} />
                        </a>
                    )}
                    {socialLinks?.instagram && (
                        <a
                            href={socialLinks.instagram}
                            target='_blank'
                            rel='noopener noreferrer'>
                            <Instagram size={24} />
                        </a>
                    )}
                    {/* Add more icons as needed */}
                </div>
            </Card.Body>
        </Card>
    );
};

export default BioCard;
