import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Home = () => {

    // Ejemplo de cómo cargar una imagen (comentado porque necesitamos un public_id real)
    // const img = cld.image('sample'); // Reemplaza 'sample' por tu public_id
    // img.resize(fill().width(400).height(300)); en caso de que vayas a indicar especificaciones

    const img = cld.image('Captura_de_pantalla_2026-01-28_234017_fk0xqe');
    img.resize(fill().width(400).height(300)); // Ejemplo suali

    // Luego implementa <AdvancedImage cldImg={img} /> para poner la imagen en el html

    return (
        <section className="p-8 flex-1 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-cyan-400 text-4xl mb-4">Bienvenido a la página de Diego García</h1>
                <p className="text-lg leading-relaxed mb-8 text-white">Esta es la página principal de nuestro proyecto.</p>
                <article className="bg-gray-800 p-8 rounded-lg shadow-lg">
                    <h2 className="text-cyan-400 text-2xl mb-4">Proyecto Vite + React + TypeScript</h2>
                    <p className="text-white">Un moderno proyecto web construido con las últimas tecnologías.</p>
                </article>
            </div>
        </section>
    );
};

export default Home;
