// src/components/StatusBar.tsx

import React, { useState, useEffect } from "react";
import "./StatusBar.css";
import {
    Wifi,
    BatteryFull,
    BatteryHalf,
    BatteryCharging,
    Reception4,
    Reception3,
    Reception2,
    Reception1,
} from "react-bootstrap-icons";

const StatusBar: React.FC = () => {
    const [now, setNow] = useState(new Date());

    // Update time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 60000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    const dateString = now.toLocaleDateString([], {
        weekday: "short",
        month: "short",
        day: "numeric",
    });

    // Simulate battery level and cellular signal
    const batteryLevel: number = 80; // Simulated battery percentage (0 - 100)
    const cellularSignal: number = 4; // Simulated cellular signal bars (1 - 4)

    // Choose the appropriate battery icon
    let BatteryIcon = BatteryFull;
    if (batteryLevel <= 25) {
        BatteryIcon = BatteryCharging;
    } else if (batteryLevel <= 50) {
        BatteryIcon = BatteryHalf;
    }

    // Choose the appropriate cellular signal icon
    let ReceptionIcon = Reception4;
    if (cellularSignal === 3) {
        ReceptionIcon = Reception3;
    } else if (cellularSignal === 2) {
        ReceptionIcon = Reception2;
    } else if (cellularSignal === 1) {
        ReceptionIcon = Reception1;
    }

    return (
        <div className='status-bar'>
            <div className='status-left'>
                <span className='me-2'>{timeString}</span>
                <span>{dateString}</span>
            </div>
            <div className='status-center'></div>
            <div className='status-right'>
                <ReceptionIcon size={16} />
                <Wifi size={16} />
                <BatteryIcon size={16} />
            </div>
        </div>
    );
};

export default StatusBar;
