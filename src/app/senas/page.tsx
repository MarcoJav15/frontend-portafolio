import React from 'react';
import Link from 'next/link';

interface PortfolioItemProps {
    imgUrl: string;
    title: string;
    description: string;
    role: string;
    result: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imgUrl, title, description, role, result }) => {
    return (
        <div className='max-w-md mx-auto my-8 bg-[#181818] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105'>
            <div className='h-52 md:h-72 rounded-t-xl relative group'
                style={{
                    background: `url(${imgUrl}) no-repeat center center`,
                    backgroundSize: "cover",
                }}
            />
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className='text-[#ADB7BE] mb-4'>{description}</p>
                <p className='text-[#FDB813] font-semibold mb-2'>Rol: {role}</p>
                <p className='text-[#ADB7BE]'>Resultado: {result}</p>
            </div>
        </div>
    );
}

const Portfolio: React.FC = () => {
    const portfolioItems = [
        {
            imgUrl: '/images/projects/Dedos.png',
            title: 'Proyecto Reconocimiento de dedos',
            description: 'Descripción detallada del proyecto 1. Aquí se pueden incluir múltiples líneas de texto para dar una explicación completa y detallada del proyecto.',
            role: 'Desarrollador Principal',
            result: 'El resultado del programa es la detección de la mano y el conteo de los dedos levantados. Se muestra en una ventana una imagen de la cámara con la cantidad de dedos contados y unos rectángulos de colores que indican la posición de cada dedo (pulgar, índice, medio, anular y meñique).',
        },
        {
            imgUrl: '/images/projects/Totito-project.png',
            title: 'Proyecto Totito con IA',
            description: 'Este código en Python implementa el juego Tic-Tac-Toe (juego del gato) para dos jugadores. Un jugador es humano y el otro es controlado por la computadora.',
            role: 'Desarrollador principal',
            result: 'El resultado del código es un juego funcional de Tic-Tac-Toe donde un humano puede competir contra la computadora. El juego se desarrolla en turnos, donde el humano indica la casilla que desea jugar y luego la computadora realiza su movimiento utilizando inteligencia artificial.',
        },
        {
            imgUrl: '/images/projects/Hotel-App.png',
            title: 'Proyecto Software para un hotel',
            description: 'Este proyecto es un backend para un software de gestión de un hotel. El backend está desarrollado en Node.js y se conecta a una base de datos PostgreSQL.',
            role: 'Desarrollador backend',
            result: 'El resultado del proyecto es un backend funcional que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los datos de un hotel. El backend se comunica con la base de datos y permite realizar operaciones de gestión de usuarios, habitaciones, reservas y servicios.',
        }
    ];

    return (
        <div className='min-h-screen bg-[#121212] py-10'>
            <div className="fixed top-4 left-4 z-10">
                <Link href="/">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-300">
                        Volver a Inicio
                    </button>
                </Link>
            </div>
            <h1 className='text-4xl text-center text-white font-bold mb-10'>Mis Proyectos</h1>
            <div className='flex flex-wrap justify-center'>
                {portfolioItems.map((item, index) => (
                    <PortfolioItem 
                        key={index}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        description={item.description}
                        role={item.role}
                        result={item.result}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
