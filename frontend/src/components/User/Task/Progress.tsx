import React from 'react';

interface CustomCircularProgressProps {
    percentage: number;
}

const CustomCircularProgress: React.FC<CustomCircularProgressProps> = ({ percentage }) => {
    const strokeWidth = 4; // Thickness of the bar stroke
    const sqSize = 35; // Diameter of the circle
    const radius = (sqSize - strokeWidth) / 2;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

    return (
        <svg width={sqSize} height={sqSize} viewBox={`0 0 ${sqSize} ${sqSize}`} className=''>
            {/* Background circle */}
            <circle className="fill-none stroke-gray-300" cx={sqSize / 2} cy={sqSize / 2} r={radius} strokeWidth={`${strokeWidth}px`} />

            {/* Progress circle */}
            <circle
                className="fill-none stroke-violet-600"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeLinecap="round"
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                }}
            />

            {/* Percentage text */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                className="text-[10px] font-semibold text-gray-600"
            >
                {percentage}%
            </text>
        </svg>
    );
};

export default CustomCircularProgress;
