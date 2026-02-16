const Galeria = () => {
    return (
        <section className="p-8 flex-1 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-cyan-400 text-4xl mb-6">Galería</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <figure className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
                        <figcaption className="text-gray-500 italic">Imagen próximamente</figcaption>
                    </figure>
                    <figure className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
                        <figcaption className="text-gray-500 italic">Imagen próximamente</figcaption>
                    </figure>
                    <figure className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700">
                        <figcaption className="text-gray-500 italic">Imagen próximamente</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Galeria;
