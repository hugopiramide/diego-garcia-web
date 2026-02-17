const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center flex-wrap gap-4">
                <p className="m-0 text-gray-600">&copy; {new Date().getFullYear()} Diego García. Todos los derechos reservados.</p>
                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline transition-opacity duration-300 hover:opacity-70">
                        GitHub
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 no-underline transition-opacity duration-300 hover:opacity-70">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
