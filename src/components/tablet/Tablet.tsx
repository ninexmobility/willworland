// src/components/Tablet.tsx

import React, { ReactNode } from "react";
import "./Tablet.css";
import StatusBar from "../header/statusbar/StatusBar";

interface TabletProps {
    children?: ReactNode;
    isLandscape: boolean;
}

const Tablet: React.FC<TabletProps> = ({ children, isLandscape }) => {
    const orientationClass = isLandscape ? "landscape" : "portrait";

    return (
        <div className={`tablet-frame ${orientationClass}`}>
            <div className='tablet-screen'>
                <StatusBar />
                {children}
            </div>
            <div className='tablet-camera'></div>
        </div>
    );
};

export default Tablet;
