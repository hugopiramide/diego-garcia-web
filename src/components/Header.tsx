import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Instala lucide-react para los iconos

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleLogoClick = (e: React.MouseEvent) => {
        setIsOpen(false);
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0 });
        }
    };

    const handleContactoClick = (e: React.MouseEvent) => {
        setIsOpen(false);
        if (location.pathname === '/') {
            e.preventDefault();
            const element = document.getElementById('contacto');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
                {/* LOGO */}
                <Link to="/" className="no-underline z-50" onClick={handleLogoClick}>
                    <h1 className="text-2xl md:text-4xl italic tracking-wider" style={{ color: '#FE7021', WebkitTextStroke: '1px black' }}>
                        Diego García
                    </h1>
                </Link>

                <button
                    className="md:hidden text-black z-50 bg-white"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                <nav className="hidden md:block">
                    <ul className="flex gap-10 list-none m-0 p-0">
                        <li><Link to="/" onClick={() => setIsOpen(false)} className={`${location.pathname === '/' ? 'text-[#FE7021]' : 'text-gray-400'} hover:text-[#FE7021] transition-colors no-underline text-lg`}>Home</Link></li>
                        <li><Link to="/noticias" className={`${location.pathname === '/noticias' ? 'text-[#FE7021]' : 'text-gray-400'} hover:text-[#FE7021] transition-colors no-underline text-lg`}>Noticias</Link></li>
                        <li><Link to="/galeria" className={`${location.pathname === '/galeria' ? 'text-[#FE7021]' : 'text-gray-400'} hover:text-[#FE7021] transition-colors no-underline text-lg`}>Galería</Link></li>
                        <li><Link to="/#contacto" onClick={handleContactoClick} className={`${location.pathname === '/#contacto' ? 'text-[#FE7021]' : 'text-gray-400'} hover:text-[#FE7021] transition-colors no-underline text-lg`}>Contacto</Link></li>
                    </ul>
                </nav>

                <div className={`
                    fixed inset-0 bg-white transition-transform duration-300 ease-in-out md:hidden
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <nav className="flex flex-col items-center justify-center h-full">
                        <ul className="flex flex-col gap-8 text-center list-none p-0">
                            <li>
                                <Link to="/" onClick={() => setIsOpen(false)} className={`${location.pathname === '/' ? 'text-[#FE7021]' : 'text-gray-600'} hover:text-[#FE7021] transition-colors no-underline text-2xl font-medium`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/noticias" onClick={() => setIsOpen(false)} className={`${location.pathname === '/noticias' ? 'text-[#FE7021]' : 'text-gray-600'} hover:text-[#FE7021] transition-colors no-underline text-2xl font-medium`}>Noticias</Link>
                            </li>
                            <li>
                                <Link to="/galeria" onClick={() => setIsOpen(false)} className={`${location.pathname === '/galeria' ? 'text-[#FE7021]' : 'text-gray-600'} hover:text-[#FE7021] transition-colors no-underline text-2xl font-medium`}>Galería</Link>
                            </li>
                            <li>
                                <Link to="/#contacto" onClick={handleContactoClick} className={`${location.pathname === '/#contacto' ? 'text-[#FE7021]' : 'text-gray-600'} hover:text-[#FE7021] transition-colors no-underline text-2xl font-medium`}>Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
