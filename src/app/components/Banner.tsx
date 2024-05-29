import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Banner: React.FC = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hola 👋 soy <br />
                        Marco de León
                    </h1>
                    <div className="flex items-center space-x-2 p-2 rounded-lg">
                        <FaEnvelope className="text-blue-500" />
                        <span className="text-white">marcodeleon2002@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg mb-4">
                        <FaPhoneAlt className="text-green-500" />
                        <span className="text-white">3576 4647</span><br />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4">
                        <a href="#about-me" className="px-6 py-3 mb-3 sm:mb-0 w-full sm:w-auto rounded-full bg-white hover:bg-slate-200 text-black">
                            Acerca de mi
                        </a>
                        <a href='/images/CV.pdf' download className="px-6 py-3 w-full sm:w-auto rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
                            Descargar CV
                        </a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-center">
                    <div className="rounded-full bg-[#181818] relative">
                        <Image
                            src="/images/Me-v2.png"
                            alt="me"
                            className="rounded-full object-cover w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px]"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
