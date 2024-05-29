"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface Skill {
    name: string;
    percentage: number;
}

const About: React.FC = () => {
    const [tab, setTab] = useState<string>("Habilidades");

    const lenguajes: Skill[] = [
        { name: "Java", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
        { name: "Python", percentage: 90 },
        { name: "C++", percentage: 95 },
        { name: "PostgreSQL", percentage: 80 },
        { name: "HTML", percentage: 90 },
    ];

    const renderContent = () => {
        switch (tab) {
            case "Habilidades":
                return (
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg mt-4">
                        <h3 className="text-2xl font-semibold mb-2">Lenguajes de programación dominados</h3>
                        <ul className="space-y-4">
                            {lenguajes.map((skill, index) => (
                                <li key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span>{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                                        <div
                                            className="bg-blue-500 h-2.5 rounded-full"
                                            style={{ width: `${skill.percentage}%` }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "Educacion":
                return (
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg mt-4">
                        <h3 className="text-2xl font-semibold mb-2">Educación</h3>
                        <ul className="list-disc pl-5">
                            <li className="mb-1">2018 - Bachiller en ciencias y letras</li>
                            <li className="mb-1">Colegio Doctor Rodolfo Robles</li>
                            <li className="mb-1">2024 - Estudios en ingeniería en Sistemas</li>
                            <li className="mb-1">Universidad Rafael Landívar</li>
                        </ul>
                    </div>
                );
            case "Experiencia":
                return (
                    <div className="p-4 bg-gray-800 rounded-lg shadow-lg mt-4">
                        <h3 className="text-2xl font-semibold mb-2">Experiencia</h3>
                        <p className='text-base md:text-lg mb-4 text-justify'>
                            Tengo experiencia en el desarrollo de software y habilidades técnicas
                            en una variedad de lenguajes de programación, frameworks y herramientas.
                            También tengo fuertes habilidades blandas, incluyendo la comunicación,
                            el trabajo en equipo, la resolución de problemas y el aprendizaje.
                        </p>
                        <div className="flex justify-center">
                            <Image src="/images/me-v3.png" alt='about-image' width={200} height={200} className="rounded-lg max-w-full h-auto" />
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };

    return (
        <section id="about-me" className="text-white">
            <div className="md:flex md:items-center md:space-x-8 py-8 px-4 sm:py-16 xl:px-16">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <Image src="/images/about-image.png" alt='about-image' width={600} height={600} className="rounded-lg" />
                </div>
                <div className="md:w-1/2">
                    <h2 className='text-4xl font-bold mb-4'>Sobre mi</h2>
                    <p className='text-base md:text-lg mb-4 text-justify'>
                        Actualmente soy estudiante de quinto año de la Licenciatura en  Ingeniería en Sistemas.

                        Cuento con una sólida base de conocimiento en el mantenimiento de equipos informáticos,
                        lo cual me ha permitido desarrollar habilidades en la identificación y solución de problemas
                        técnicos.


                        Mi enfoque proactivo y mi capacidad para trabajar en esta rama me permiten destacar en entornos
                        académicos y proyectos prácticos. Además de mis habilidades técnicas, soy conocido por ser un
                        colaborador comprometido y responsable.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <span
                            onClick={() => setTab("Habilidades")}
                            className={`mr-3 font-semibold hover:text-white cursor-pointer ${tab === "Habilidades" ? "text-white border-b-2 border-blue-600" : "text-[#ADB7BE]"}`}
                        >
                            Lenguajes de programación
                        </span>
                        <span
                            onClick={() => setTab("Educacion")}
                            className={`mr-3 font-semibold hover:text-white cursor-pointer ${tab === "Educacion" ? "text-white border-b-2 border-blue-600" : "text-[#ADB7BE]"}`}
                        >
                            Educación
                        </span>
                        <span
                            onClick={() => setTab("Experiencia")}
                            className={`mr-3 font-semibold hover:text-white cursor-pointer ${tab === "Experiencia" ? "text-white border-b-2 border-blue-600" : "text-[#ADB7BE]"}`}
                        >
                            Experiencia
                        </span>
                    </div>
                    <div className='mt-4'>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;