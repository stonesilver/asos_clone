import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout: React.FC<Props> = ({ children }) => {
    return (
        <div className='min-w-screen min-h-screen'>{children}</div>
    )
}

export default layout