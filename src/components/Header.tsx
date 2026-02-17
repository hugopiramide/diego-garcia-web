import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold"><span className="stylized-name">Diego García</span></h1>

                </div>
                <nav>
                    <ul className="flex gap-8 list-none m-0 p-0">
                        <li>
                            <Link to="/" className="text-gray-700 no-underline text-base transition-colors duration-300 hover:text-[#FE7021]">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/noticias" className="text-gray-700 no-underline text-base transition-colors duration-300 hover:text-[#FE7021]">
                                Noticias
                            </Link>
                        </li>
                        <li>
                            <Link to="/galeria" className="text-gray-700 no-underline text-base transition-colors duration-300 hover:text-[#FE7021]">
                                Galería
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="text-gray-700 no-underline text-base transition-colors duration-300 hover:text-[#FE7021]">
                                Contacto
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>

    );
};

export default Header;
