// src/App.tsx

import React, { useState } from "react";
import "./App.css";
import Tablet from "./components/tablet/Tablet";
import Main from "./components/main/Main";
import Hero from "./components/hero/Hero";
import AppBar from "./components/appBar/AppBar";
import WeatherWidget from "./components/weather/WeatherWidget";
import BioCard from "./components/bioCard/BioCard";

const App: React.FC = () => {
    const [isLandscape, setIsLandscape] = useState(false);

    const toggleOrientation = () => {
        setIsLandscape((prev) => !prev);
    };

    return (
        <div className='app-container'>
            <Tablet isLandscape={isLandscape}>
                <div className='app-content'>
                    <Main>
                        {/* Main content goes here */}
                        <Hero
                            imageSrc='./will-headshot.png'
                            title='Will Worland'
                            text='Sr. Hybrid (Systems/Cloud/Software) Engineer'
                        />
                        <div className='feature-row row'>
                            <div className='col-4'>
                                <WeatherWidget />
                            </div>
                            <div className='col-8'>
                                <BioCard
                                    bio='Software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.'
                                    email='me@willworland.com'
                                    socialLinks={{
                                        linkedin:
                                            "https://www.linkedin.com/in/willworland/",
                                        github: "https://github.com/ninexmobility",
                                        instagram:
                                            "https://www.instagram.com/ninexeng/",
                                    }}
                                />
                            </div>
                        </div>
                    </Main>
                </div>
                <AppBar />
            </Tablet>
            <button className='orientation-button' onClick={toggleOrientation}>
                Rotate Tablet
            </button>
        </div>
    );
};

export default App;
