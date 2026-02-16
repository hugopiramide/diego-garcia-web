const About = () => {
    return (
        <div className="p-8 min-h-[calc(100vh-200px)] bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-cyan-400 text-4xl mb-4">Acerca de</h1>
                <p className="text-lg leading-relaxed mb-8 text-white">Esta es la página de información del proyecto.</p>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-cyan-400 text-2xl mb-4">Tecnologías utilizadas:</h2>
                    <ul className="list-none p-0">
                        <li className="py-2 text-lg text-white before:content-['✓_'] before:text-cyan-400 before:font-bold before:mr-2">
                            React 19
                        </li>
                        <li className="py-2 text-lg text-white before:content-['✓_'] before:text-cyan-400 before:font-bold before:mr-2">
                            TypeScript
                        </li>
                        <li className="py-2 text-lg text-white before:content-['✓_'] before:text-cyan-400 before:font-bold before:mr-2">
                            Vite
                        </li>
                        <li className="py-2 text-lg text-white before:content-['✓_'] before:text-cyan-400 before:font-bold before:mr-2">
                            React Router DOM
                        </li>
                        <li className="py-2 text-lg text-white before:content-['✓_'] before:text-cyan-400 before:font-bold before:mr-2">
                            Tailwind CSS
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
