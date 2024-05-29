"use client";

import Link from 'next/link';

interface Props {
    id: number;
    name: string;
    description: string;
}

export default function BlogCard({ id, name, description }: Props) {
    return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">{name}</h2>
            <p className="text-gray-300 mb-4">{description.substring(0, 100)}...</p>
            <Link href={`/blog/${id}`} className="text-blue-400 hover:underline">
                Ver blog
            </Link>
        </div>
    );
}
