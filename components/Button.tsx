import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
    variant?: 'dark'
    className?: string
    type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<Props> = ({ children, className, variant, type = 'button' }) => {
    const variants = {
        dark: 'bg-black text-white hover:text-black hover:bg-white hover:border hover:border-black',
    }
    return (
        <button type={type} className={`${className} ${variants[variant as keyof typeof variants]}`}>{children}</button>
    )
}

export default Button