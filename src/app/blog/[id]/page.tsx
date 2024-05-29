'use client';

import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: number;
    }
}

interface Project {
    id: number;
    name: string;
    description: string;
}

export default function UserProfile({ params }: Props) {
    const [project, setBlog] = useState<Project | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Project>(
                    process.env.NEXT_PUBLIC_API_URL + `/projects/${params.id}` ?? ""
                );
                setBlog(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [params.id]);

    return (
        <main className="container mx-auto p-6 bg-black min-h-screen">
            <h1 className="text-5xl font-bold mb-8 text-center text-white">Datos del Blog</h1>
            {project && (   
                <div className="bg-gray-800 border border-gray-600 rounded-lg shadow-lg p-6 hover:shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-yellow-400">{project.name}</h2>
                    <p className="text-gray-300 text-lg text-justify">{project.description}</p>
                </div>
            )}
        </main>
    );
}