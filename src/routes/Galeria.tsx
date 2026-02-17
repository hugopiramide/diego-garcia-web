import { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";

const championships = [
    {
        id: 'copa-piston',
        name: 'Copa Pistón',
        images: [
            'Captura_de_pantalla_2026-01-28_234017_fk0xqe',
            'Diego_Ceax_Talavera_Series081A3210_rppmuk',
            '_MG_1611_cmpetq',
            'Diego_Ceax_Talavera_Series_K9A3367_sndeel',
            '_MG_1748_obensb',
            '_K9A3324_b3qxgl'
        ]
    },
    {
        id: 'campeonato-sheyla',
        name: 'Copa Sheyla',
        images: [
            'Diego_Ceax_Talavera_Series_K9A3367_sndeel',
            '_MG_1748_obensb',
            '_K9A3324_b3qxgl'
        ]
    },
    {
        id: 'ceax-talavera',
        name: 'CEAX Talavera',
        images: [
            '32RIANXO-G-162_vpziv9',
            'Diego_Ceax_Talavera_Series_K9A4402_wcston',
            'Captura_de_pantalla_2026-01-28_234017_fk0xqe'
        ]
    },
    {
        id: 'trofeo-rianxo',
        name: 'Trofeo Rianxo',
        images: [
            '_K9A3324_b3qxgl',
            'Diego_Ceax_Talavera_Series081A3210_rppmuk',
            '_MG_1748_obensb'
        ]
    }
];

const Galeria = () => {
    const [selectedChampionship, setSelectedChampionship] = useState(championships[0]);

    return (
        <section className="flex-1 flex flex-col items-center">
            <div className="w-full aspect-video md:h-[95vh] overflow-hidden bg-black flex items-center justify-center">
                <video
                    className="w-min-full w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://res.cloudinary.com/demo/image/upload/sample.jpg"
                >
                    <source src="https://res.cloudinary.com/demo/video/upload/c_fill,h_720,w_1280/dog.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>

            <div className="w-full max-w-7xl px-8 py-12 flex flex-col gap-12">
                <div className="flex flex-wrap justify-center gap-4 border-b border-gray-100 pb-8">
                    {championships.map((championship) => (
                        <button
                            key={championship.id}
                            onClick={() => setSelectedChampionship(championship)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${selectedChampionship.id === championship.id
                                ? 'bg-orange-500 text-white shadow-md scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {championship.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {selectedChampionship.images.map((imgId, index) => {
                        const img = cld.image(imgId);
                        img.resize(fill().width(800).height(600));

                        return (
                            <div key={`${selectedChampionship.id}-${index}`} className="overflow-hidden rounded-xl shadow-lg border border-gray-100 group transition-transform duration-500 hover:scale-[1.02]">
                                <AdvancedImage
                                    cldImg={img}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Galeria;

