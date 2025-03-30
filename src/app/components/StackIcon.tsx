import React, { ReactElement } from 'react'

interface IconProps {
    content: ReactElement;
    text: string;
}
function StackIcon({content, text} : IconProps) {
    return (
        <div className='flex flex-col items-center align-middle'>
            <div className='bg-primary-600 rounded-full p-4 text-[3rem]'>{content}</div>
            <span className='text-lg font-bold leading-tight'>{text}</span>
        </div>
        
    )
}

export default StackIcon