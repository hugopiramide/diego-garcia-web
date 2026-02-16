const Noticias = () => {
    return (
        <section className="p-8 flex-1 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-cyan-400 text-4xl mb-6">Noticias</h1>
                <div className="grid gap-6">
                    <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-cyan-400 text-2xl mb-2">Última actualización del proyecto</h2>
                        <p className="text-gray-300 mb-4">16 de febrero, 2026</p>
                        <p>Hemos implementado el sistema de rutas y la integración con Tailwind CSS v4 para mejorar el rendimiento y la mantenibilidad.</p>
                    </article>
                    <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-cyan-400 text-2xl mb-2">Nueva sección de noticias</h2>
                        <p className="text-gray-300 mb-4">15 de febrero, 2026</p>
                        <p>Pronto compartiremos más novedades sobre el desarrollo de este sitio web.</p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Noticias;
