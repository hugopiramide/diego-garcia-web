import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Galeria = () => {
    // Ejemplo de cómo cargar una imagen (comentado porque necesitamos un public_id real)
    // const img = cld.image('sample'); // Reemplaza 'sample' por tu public_id
    // img.resize(fill().width(400).height(300));

    const img = cld.image('Captura_de_pantalla_2026-01-28_234017_fk0xqe');
    img.resize(fill().width(400).height(300));

    return (
        <section className="p-8 flex-1">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl mb-6">Galería</h1>
                <p className="mb-8 text-gray-600">
                    Explora nuestra colección de imágenes gestionadas con Cloudinary.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 hover:border-blue-500 transition-colors">
                        <AdvancedImage cldImg={img} className="w-full h-auto" />
                    </div>

                    <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <figcaption className="text-gray-400 italic">Imagen próximamente</figcaption>
                    </figure>
                    <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <figcaption className="text-gray-400 italic">Imagen próximamente</figcaption>
                    </figure>
                    <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <figcaption className="text-gray-400 italic">Imagen próximamente</figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );

};

export default Galeria;
