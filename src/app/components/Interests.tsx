import React from 'react';

const interests = [
  { name: 'Béisbol', image: '/images/baseball.png' },
  { name: 'Videojuegos', image: '/images/video-games.png' },
  { name: 'Fútbol', image: '/images/football.png' },
  { name: 'Películas', image: '/images/movies.png' },
  { name: 'Soporte Técnico', image: '/images/tech-support.png' },
  { name: 'Voluntariado Social', image: '/images/volunteering.png' },
  { name: 'Mascotas', image: '/images/pets.png' },
  { name: 'Computadoras Gamer', image: '/images/computers.png' },
];

const Interests: React.FC = () => {
  return (
    <section id="interests">
      <div className="mt-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Mis Intereses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="bg-slate-600 p-4 rounded flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={interest.image}
                alt={interest.name}
                className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32"
              />
              <p className="mt-2 text-lg">{interest.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
