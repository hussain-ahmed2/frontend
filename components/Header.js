"use client";

import Link from "next/link"

const Header = () => {
    const handleClick = () => {
        const nav = document.querySelector('#mobile-nav');
        if (!nav.style.height || nav.style.height === '0px') nav.style.height = `${nav.scrollHeight}px`;
        else nav.style.height = '0px';
    }
    return (
        <header className="fixed z-50 w-full flex items-end md:items-center justify-between md:justify-center min-h-12 flex-col-reverse md:flex-row bg-neutral-900 text-neutral-400 font-medium">
            <nav className="hidden md:flex capitalize items-center justify-center max-w-5xl gap-8">
                <Link href={'#home'} className="hover:text-white transition-all duration-300">home</Link>
                <Link href={'#about'} className="hover:text-white transition-all duration-300">about</Link>
                <Link href={'#projects'} className="hover:text-white transition-all duration-300">projects</Link>
                <Link href={'#contact'} className="hover:text-white transition-all duration-300">contact</Link>
            </nav>
            <nav id="mobile-nav" className="transition-all duration-300 h-0 overflow-hidden flex md:hidden capitalize flex-col w-full text-center bg-neutral-800">
                <Link onClick={handleClick} href={'#home'} className="py-2 hover:bg-neutral-700 hover:text-white transition-all duration-300">home</Link>
                <Link onClick={handleClick} href={'#about'} className="py-2 hover:bg-neutral-700 hover:text-white transition-all duration-300">about</Link>
                <Link onClick={handleClick} href={'#projects'} className="py-2 hover:bg-neutral-700 hover:text-white transition-all duration-300">projects</Link>
                <Link onClick={handleClick} href={'#contact'} className="py-2 hover:bg-neutral-700 hover:text-white transition-all duration-300">contact</Link>
            </nav>
            <button onClick={handleClick} className="md:hidden transition-all duration-300 hover:text-white font-bold text-xl h-12 w-12 flex items-center justify-center">&#9776;</button>
        </header>
    )
}
export default Header