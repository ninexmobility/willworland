import React from "react";
import { Card } from "react-bootstrap";
import { MdOutlineSecurity } from "react-icons/md";
import { SiReact } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import "./Hero.css";

interface CardProps {
    imageSrc: string;
    title: string;
    text: string;
}

const iconComponents = [
    { Component: MdOutlineSecurity, label: "Security" },
    { Component: FaAws, label: "AWS" },
    { Component: SiReact, label: "React" },
    { Component: FaNodeJs, label: "Node.js" },
    { Component: SiMicrosoftazure, label: "Azure" },
    { Component: SiCsharp, label: "C#" },
    { Component: SiDotnet, label: ".NET" },
];

const Hero: React.FC<CardProps> = ({ imageSrc, title, text }) => {
    return (
        <Card bg={"dark"} text={"light"} className='hero'>
            <div className='row g-0'>
                <div className='col-12 col-md-4'>
                    <Card.Img src={imageSrc} alt={title} />
                </div>
                <div className='col-12 col-md-8 mt-5'>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>

                        <div className='row mt-5'>
                            <div className='col-12'>
                                {iconComponents.map(
                                    ({ Component, label }, index) => (
                                        <Component
                                            key={index}
                                            size={32}
                                            className='me-2'
                                            title={label}
                                            aria-label={label}
                                        />
                                    ),
                                )}
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
};

export default Hero;
