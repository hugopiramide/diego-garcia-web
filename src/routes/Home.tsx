const Home = () => {
    return (
        <div className="p-8 min-h-[calc(100vh-200px)] bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-cyan-400 text-4xl mb-4">Bienvenido a la página de Diego García</h1>
                <p className="text-lg leading-relaxed mb-8 text-white">Esta es la página principal de nuestro proyecto.</p>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-cyan-400 text-2xl mb-4">Proyecto Vite + React + TypeScript</h2>
                    <p className="text-white">Un moderno proyecto web construido con las últimas tecnologías.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
