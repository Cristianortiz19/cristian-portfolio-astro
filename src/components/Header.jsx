import React from "react";
import { useState, useEffect } from "react";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, []);

    return (
        <header class="flex py-8 mx-auto md:px-48 flex-wrap justify-between items-center z-50 fixed top-0 w-full" id="header-nav">
            <div class="flex flex-row items-center gap-2 ">
                <img 
                    class="w-13 h-8" 
                    src="/cris-logo.webp" 
                    alt="cris-logo"
                />

                <h4 class="text-lg font-bold">Cristian Ortiz</h4>
            </div>
            <nav class="flex flex-row gap-x-10 opacity-80 items-center">
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="/projects">Projects</a>
                <a class="bg-[#FD621F] py-1 px-3 rounded" href="/contact">Contact</a>
            </nav>
        </header>
    )
}