'use client';

import { useState, useEffect } from 'react';

export default function PerformanceMonitor() {
    const [fps, setFps] = useState(0);

    useEffect(() => {
        if (process.env.NODE_ENV !== 'development') return;

        let frameCount = 0;
        let lastTime = performance.now();

        const updateFps = () => {
            const currentTime = performance.now();
            frameCount++;

            if (currentTime - lastTime >= 1000) {
                setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
                frameCount = 0;
                lastTime = currentTime;
            }

            requestAnimationFrame(updateFps);
        };

        const animationId = requestAnimationFrame(updateFps);

        return () => cancelAnimationFrame(animationId);
    }, []);

    if (process.env.NODE_ENV !== 'development') return null;

    return (
        <div className="fixed bottom-4 left-4 z-50 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#7F5AF0] border border-[#7F5AF0]/20 pointer-events-none">
            FPS: {fps}
        </div>
    );
}
