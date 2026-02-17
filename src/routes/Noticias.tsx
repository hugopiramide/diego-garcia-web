const Noticias = () => {
    return (
        <section className="p-8 flex-1">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl mb-6">Noticias</h1>
                <div className="grid gap-6">
                    <article className="p-6 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-2xl mb-2">Última actualización del proyecto</h2>
                        <p className="text-gray-600 mb-4">16 de febrero, 2026</p>
                        <p>Hemos implementado el sistema de rutas y la integración con Tailwind CSS v4 para mejorar el rendimiento y la mantenibilidad.</p>
                    </article>
                    <article className="p-6 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-2xl mb-2">Nueva sección de noticias</h2>
                        <p className="text-gray-600 mb-4">15 de febrero, 2026</p>
                        <p>Pronto compartiremos más novedades sobre el desarrollo de este sitio web.</p>
                    </article>
                </div>
            </div>
        </section>
    );

};

export default Noticias;
