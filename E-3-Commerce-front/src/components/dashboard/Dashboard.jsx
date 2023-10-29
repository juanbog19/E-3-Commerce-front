import React from 'react'
import Sidebar from './Sidebar'

export default function Dashboard() {
    return (
        <div className='mt-20'>
            <div>
                <Sidebar/>
            </div>
            <div>Bienvenido/a al panel administrativo</div>
        </div>
    )
}
