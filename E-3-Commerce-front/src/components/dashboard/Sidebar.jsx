import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="flex justify-center space-x-4 mb-4">
            <div className="flex flex-col items-center">
                <Link className="px-1 py-1 mr-2 bg-primary hover:bg-secondary" to="/admin">Inicio</Link>
            </div>
            <div className="flex flex-col items-center">
                <Link className="px-1 py-1 mr-2 bg-primary hover:bg-secondary" to="/admin/brands">Marcas</Link>
            </div>
            <div className="flex flex-col items-center">
                <Link className="px-1 py-1 mr-2 bg-primary hover:bg-secondary" to="/admin/products">Productos</Link>
            </div>
        </div>
    )
}
