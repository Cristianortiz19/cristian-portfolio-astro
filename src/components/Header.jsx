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
        <header className="flex py-8 px-8 mx-auto md:px-20  lg:px-48 flex-wrap justify-between items-start md:items-center z-50 fixed top-0 w-full" id="header-nav">
            <div className="flex flex-row items-center gap-2 ">
                <img 
                    className="w-13 h-8" 
                    src="/cris-logo.webp" 
                    alt="cris-logo"
                />

                <h4 className="text-lg font-bold">Cristian Ortiz</h4>
            </div>

            <nav className="hidden md:flex">
                <HeaderLinks />
            </nav>

            <div className="flex flex-col items-end gap-4 md:hidden">
                <button onClick={toggleNavbar}>
                    {
                        isOpen ? <X color="white" /> : <Menu color="white"/>
                    }
                </button>

                {
                    isOpen &&
                    <div>
                        <HeaderLinks />
                    </div>
                }
            </div>
        </header>
    )
}

export const HeaderLinks = () => {
    return (
        <nav className="flex flex-col md:flex-row md:gap-x-10 gap-5 opacity-80 items-center">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="/projects">Projects</a>
            <a className="bg-[#FD621F] py-1 px-3 rounded" href="/contact">Contact</a>
        </nav>
    )
}

const Menu = () => <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 28 28"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>

const X = () => <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 28 28"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>