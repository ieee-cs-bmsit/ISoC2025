import React, { useEffect, useRef } from 'react';
import "./Cursor.css"

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const cursorPos = { x: 0, y: 0 };
        const mousePos = { x: 0, y: 0 };
        let lastPos = { x: 0, y: 0 };
        let lastStretchFactor = 0;
        let currentAngle = 0;

        const lerp = (start, end, t) => start + (end - start) * t;

        const handleMouseMove = (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        function updateCursorPos() {
            cursorPos.x = lerp(cursorPos.x, mousePos.x, 0.1);
            cursorPos.y = lerp(cursorPos.y, mousePos.y, 0.1);

            const deltaX = mousePos.x - lastPos.x;
            const deltaY = mousePos.y - lastPos.y;
            lastPos = { ...mousePos };

            const velocity = Math.min(Math.sqrt(deltaY ** 2 + deltaX ** 2) * 4, 150);
            const stretchFactor = (velocity / 100) * 0.5;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            if (velocity > 20) {
                currentAngle = angle;
            }

            lastStretchFactor += (stretchFactor - lastStretchFactor) * 0.05;

            if (cursor) {
                cursor.style.transform = `
          translate(${cursorPos.x}px, ${cursorPos.y}px)
          rotate(${currentAngle}deg)
          scale(${1 + lastStretchFactor}, ${1 - lastStretchFactor})
        `;
            }

            requestAnimationFrame(updateCursorPos);
        }

        updateCursorPos();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="cursor"
        ></div>
    );
};

export default Cursor;
