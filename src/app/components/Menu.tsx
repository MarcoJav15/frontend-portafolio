"use client";
import Link from "next/link";
import MenuLink from "./MenuLink";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const menuLinks = [
    {
        title: "Mis intereses",
        path: "#interests"
    },
    {
        title: "Proyectos",
        path: "#projects"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    
];

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-70">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    Inicio
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!menuOpen ? (
                        <button onClick={() => setMenuOpen(true)} 
                        className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white  hover:border-white">
                            <Bars3Icon className="h-5 w-5"/> 
                        </button> 
                        )    :  (
                        <button onClick={() => setMenuOpen(false)} 
                        className=" flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white  hover:border-white">
                            <XMarkIcon className="h-5 w-5"/> 
                        </button> 
                        
                    )}

                </div>
                <div className="menu hidden md:block md:w-auto" id="menu">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {menuLinks.map((link, index) => (
                            <li key={index}>
                                <MenuLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {menuOpen ? <MenuOverlay links={menuLinks} /> : null}
        </nav>
    );
};

export default Menu;
