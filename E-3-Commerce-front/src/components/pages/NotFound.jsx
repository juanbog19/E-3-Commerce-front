import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-3xl text-purple-600 lg:text-6xl">404</h1>
                        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-purple-500">Oops!</span> Página no encontrada
                        </h6>
                        <p className="mb-4 text-center text-gray-500 md:text-lg">La página que estás buscando no existe.</p>
                        <Link to="/" className="px-5 py-2 rounded-md text-white bg-purple-600 hover:bg-purple-700">Inicio</Link>
                    </div>
                </div>
            </div>

        </>
    )
}
