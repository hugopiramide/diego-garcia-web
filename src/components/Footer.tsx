const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
                <p className="m-0">&copy; {new Date().getFullYear()} Diego García. Todos los derechos reservados.</p>
                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 no-underline transition-opacity duration-300 hover:opacity-70">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 no-underline transition-opacity duration-300 hover:opacity-70">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
