import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";
import SEO from '../components/SEO';

const Noticias = () => {

    const img = cld.image('Diego_Ceax_Talavera_Series081A3210_rppmuk');
    img.resize(fill().width(1000).height(800));

    const img2 = cld.image('Diego_Ceax_Talavera_Series_K9A3367_sndeel');
    img2.resize(fill().width(1000).height(800));

    const img3 = cld.image('_MG_1611_cmpetq');
    img3.resize(fill().width(400).height(200));

    const img4 = cld.image('_MG_1748_obensb');
    img4.resize(fill().width(400).height(200));

    const img5 = cld.image('_K9A3324_b3qxgl');
    img5.resize(fill().width(1000).height(800));

    const img6 = cld.image('32RIANXO-G-162_vpziv9');
    img6.resize(fill().width(600).height(400));

    const img7 = cld.image('Diego_Ceax_Talavera_Series_K9A4402_wcston');
    img7.resize(fill().width(600).height(400));

    return (
        <section className="p-8 flex-1">
            <SEO
                title="Noticias"
                description="Últimas noticias sobre Diego García: Copa Pistón 2026, Campeonato Sheyla y más novedades del mundo del automovilismo."
            />
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch border-b border-gray-100 pb-12">
                    <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 h-full">
                        <AdvancedImage cldImg={img} className="w-full h-full object-cover object-top" alt="Diego García preparándose para la Copa Pistón 2026" />
                    </div>
                    <div>
                        <h2 className="text-3xl mb-4">Copa pistón</h2>
                        <h3 className="text-xl mb-2">Diego García confirma su candidatura para la Copa Pistón 2026</h3>
                        <p className="text-gray-700 leading-relaxed">
                            El mundo del automovilismo está en shock. Tras semanas de rumores en los boxes, esta mañana se ha hecho oficial: Diego García ha obtenido su licencia para competir en la máxima categoría y buscará levantar el trofeo más codiciado del mundo, la Copa Pistón, esta misma temporada.
                            Considerado por muchos como el "novato de oro", García no viene solo a participar.
                            <br />
                            <br />
                            Lo que para otros pilotos toma una década de sacrificios en categorías inferiores, para Diego ha sido un sprint imparable. Su ascenso no es una casualidad técnica, sino el resultado de una combinación letal de talento innato y una madurez táctica impropia de su edad. La noticia ha caído como un jarro de agua fría sobre los veteranos de la parrilla, quienes ahora deben enfrentarse a un competidor que no respeta jerarquías ni teme a los muros.
                            <br />
                            <br />
                            ¿Qué espera el próximo piloto que se lance a la Copa Pistón? ¿Un rival que no respeta las reglas? ¿Un competidor que no respeta las reglas? ¿Un rival que no respeta las reglas?
                        </p>
                    </div>
                </article>

                <article className="flex flex-col gap-8 border-b border-gray-100 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
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
                        <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-sm border border-gray-200 h-full">
                            <AdvancedImage cldImg={img2} className="w-full h-full object-cover" alt="Competición en el Campeonato Sheyla" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-sm border border-gray-200">
                            <AdvancedImage cldImg={img3} className="w-full h-auto" alt="Detalle del coche de Diego García" />
                        </div>
                        <div className="order-2 md:order-1 overflow-hidden rounded-lg shadow-sm border border-gray-200">
                            <AdvancedImage cldImg={img4} className="w-full h-auto" alt="Equipo técnico trabajando en el box" />
                        </div>
                    </div>
                </article>

                <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div>
                        <h2 className="text-3xl mb-4">No todo es deporte</h2>
                        <h3 className="text-xl mb-2">¿Quién es el hombre detrás del casco que está conquistando la región?</h3>
                        <p className="text-gray-700 leading-relaxed">
                            El rugido de los motores y el olor a neumático quemado no lo son todo. Con la llegada del esperado  campeonato Sheyla y su inminente salto a la Copa Pistón, el nombre de Diego García ha pasado de las pizarras de los ingenieros a las conversaciones de café y las portadas de estilo de vida. Diego no es solo velocidad; es carisma, disciplina y, según dicen los que lo conocen de cerca, el nuevo icono de la región que sabe mantener la calma incluso a 300 km/h.
                            <br />
                            <br />
                            Lo que diferencia a García de otros pilotos no es solo su capacidad para encontrar el ápice perfecto en cada curva, sino su templanza de acero. Mientras otros se pierden en la presión del paddock, él parece entrar en un estado de trance donde el tiempo se dilata.
                            <br />
                            <br />
                            Su ascenso no es solo una noticia deportiva; es un fenómeno cultural. En las calles, los jóvenes ya no solo sueñan con coches rápidos, sino con la ética de trabajo que Diego representa. Se dice que su presencia en la parrilla ha revitalizado la economía local, atrayendo patrocinadores internacionales que antes ni siquiera miraban hacia nuestras pistas.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 h-full">
                            <AdvancedImage cldImg={img5} className="w-full h-full object-cover" alt="Diego García sin casco, retrato promocional" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 h-full">
                                <AdvancedImage cldImg={img6} className="w-full h-full object-cover" alt="Diego en el podio celebrando una victoria" />
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-200 h-full">
                                <AdvancedImage cldImg={img7} className="w-full h-full object-cover" alt="Vista del circuito desde boxes" />
                            </div>
                        </div>
                    </div>
                </article>


            </div>
        </section>
    );


};

export default Noticias;