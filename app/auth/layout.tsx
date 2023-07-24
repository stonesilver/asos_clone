import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='min-w-screen min-h-screen bg-slate-50'>{children}</div>
    )
}

export default layout