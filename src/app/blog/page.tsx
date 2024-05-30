import axios from 'axios';
import React from 'react';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';

interface Projects {
  id: number;
  name: string;
  description: string;
}

export default async function page() {
  const response = await axios.get<Projects[]>(`${process.env.NEXT_PUBLIC_API_URL}/projects`);

  return (
    <section className="container mx-auto p-6 bg-black min-h-screen">
      <div className="fixed top-4 left-4 z-10">
        <Link href="/">
          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-300">
            Volver a Inicio
          </button>
        </Link>
      </div>
      <h1 className="text-5xl font-bold mb-8 text-center text-white">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {response.data.map((project) => (
          <BlogCard key={project.id} id={project.id} name={project.name} description={project.description} />
        ))}
      </div>
    </section>
  );
}
