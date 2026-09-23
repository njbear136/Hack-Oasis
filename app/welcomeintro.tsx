"use client";

import { useState } from "react";
export default function WelcomeIntro() {
    const [ended, setEnded] = useState(false);

    return(
        <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000 ease out ${
            ended ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        >
            <video
            autoPlay
            muted
            playsInline
            onEnded={() => setEnded(true)}
            className="h-full w-full object-cover"
            >
                <source src="/welcome-oasis.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}