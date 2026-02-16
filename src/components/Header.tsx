import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-cyan-400 text-2xl font-bold">Diego García</h1>
                </div>
                <nav>
                    <ul className="flex gap-8 list-none m-0 p-0">
                        <li>
                            <Link to="/" className="text-white no-underline text-base transition-colors duration-300 hover:text-cyan-400">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white no-underline text-base transition-colors duration-300 hover:text-cyan-400">
                                Acerca de
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
