import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    variant?: 'dark'
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({ children, className, variant, type = 'button' }) => {
    const variants = {
        dark: 'bg-black text-white hover:bg-opacity-70 hover:border hover:border-black',
    }
    return (
        <button type={type} className={`${className} ${variants[variant as keyof typeof variants]}`}>
            {children}
        </button>
    )
}

export default Button