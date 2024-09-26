import React from "react";
type CodeColorProps = {
    color: 'lightblue' |'white'|'commentgreen'| 'purple' | 'blue' | 'amber' | 'green' | 'yellow' | 'gray';
    children: React.ReactNode;
};
const CodeColor: React.FC<CodeColorProps> = ({ color, children }) => {
    const colorMap: Record<CodeColorProps['color'], string> = {
        white: 'text-white',
        lightblue: 'text-blue-300',
        commentgreen: 'text-green-400',
        purple: 'text-purple-400',
        blue: 'text-blue-400',
        amber: 'text-amber-600',
        green: 'text-green-500',
        yellow: 'text-yellow-300',
        gray: 'text-gray-500',
    };
    const selectedColor = colorMap[color];
    return <span className={selectedColor}>{children}</span>;
};
export default CodeColor;