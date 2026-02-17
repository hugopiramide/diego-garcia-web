import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Noticias = () => {
    // Ejemplo de cómo cargar una imagen (comentado porque necesitamos un public_id real)
    // const img = cld.image('sample'); // Reemplaza 'sample' por tu public_id
    // img.resize(fill().width(400).height(300));

    const img = cld.image('Captura_de_pantalla_2026-01-28_234017_fk0xqe');
    img.resize(fill().width(400).height(200));

    return (
        <section className="p-8 flex-1">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-gray-100 pb-12">
                    <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
                        <AdvancedImage cldImg={img} className="w-full h-auto" />
                    </div>
                    <div>
                        <h2 className="text-3xl mb-4">Copa pistón</h2>
                        <h3 className="text-xl mb-2">Diego García confirma su candidatura para la Copa Pistón 2026</h3>
                        <p className="text-gray-700 leading-relaxed">
                            El mundo del automovilismo está en shock. Tras semanas de rumores en los boxes, esta mañana se ha hecho oficial: Diego García ha obtenido su licencia para competir en la máxima categoría y buscará levantar el trofeo más codiciado del mundo, la Copa Pistón, esta misma temporada.
                            Considerado por muchos como el "novato de oro", García no viene solo a participar.
                        </p>
                    </div>
                </article>

                <article className="flex flex-col gap-8 border-b border-gray-100 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl mb-4">Campeonato Sheyla</h2>
                            <h3 className="text-xl mb-2">El "Campeonato Sheyla" arranca con Diego García como el rival a batir</h3>
                            <p className="text-gray-700 leading-relaxed">
                                La espera ha terminado. Lo que comenzó como un rumor en los talleres locales se ha convertido en la competición más esperada del año. Se ha inaugurado oficialmente el Campeonato Sheyla, una nueva serie de carreras que promete sacudir los cimientos del automovilismo en nuestra región, y ya tiene a su primer gran protagonista.
                                <br />
                                <br />
                                Diego García, el piloto que ya suena con fuerza para la Copa Pistón, ha confirmado que usará el Campeonato Sheyla como su principal campo de pruebas y plataforma de lanzamiento para esta temporada.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-sm border border-gray-200">
                            <AdvancedImage cldImg={img} className="w-full h-auto" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border border-gray-300">
                            <figcaption className="text-gray-400 italic">Imagen adicional 1</figcaption>
                        </figure>
                        <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border border-gray-300">
                            <figcaption className="text-gray-400 italic">Imagen adicional 2</figcaption>
                        </figure>
                    </div>
                </article>

                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                        <h2 className="text-3xl mb-4">No todo es deporte</h2>
                        <h3 className="text-xl mb-2">¿Quién es el hombre detrás del casco que está conquistando la región?</h3>
                        <p className="text-gray-700 leading-relaxed">
                            El rugido de los motores y el olor a neumático quemado no lo son todo. Con la llegada del esperado  campeonato Sheyla y su inminente salto a la Copa Pistón, el nombre de Diego García ha pasado de las pizarras de los ingenieros a las conversaciones de café y las portadas de estilo de vida. Diego no es solo velocidad; es carisma, disciplina y, según dicen los que lo conocen de cerca, el nuevo icono de la región que sabe mantener la calma incluso a 300 km/h.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200">
                            <AdvancedImage cldImg={img} className="w-full h-auto" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border border-gray-300">
                                <figcaption className="text-gray-400 text-xs italic">Img. 3A</figcaption>
                            </figure>
                            <figure className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center border border-gray-300">
                                <figcaption className="text-gray-400 text-xs italic">Img. 3B</figcaption>
                            </figure>
                        </div>
                    </div>
                </article>


            </div>
        </section>
    );


};

export default Noticias;