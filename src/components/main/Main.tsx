// src/components/Main.tsx

import React, { ReactNode } from "react";
import "./Main.css";

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return <main className='main-content'>{children}</main>;
};

export default Main;
