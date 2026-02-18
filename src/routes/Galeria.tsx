import { useState } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";

const championships = [
    {
        id: 'copa-piston',
        name: 'Copa Pistón',
        date: 'Marzo 2026',
        images: [
            '_MG_2788_emwfac',
            '_MG_2168_mrk6zk',
            '_MG_1611_cmpetq',
            'Diego_Ceax_Talavera_Series_K9A3367_sndeel',
            '_MG_1748_obensb',
            '_K9A3324_b3qxgl'
        ]
    },
    {
        id: 'campeonato-sheyla',
        name: 'Copa Sheyla',
        date: 'Abril 2026',
        images: [
            'Diego_Ceax_Talavera_Series_K9A3367_sndeel',
            '_MG_1748_obensb',
            '_K9A3324_b3qxgl',
            'Diego_Ceax_Talavera_Series_K9A1301_znhgka',
            'Diego_Ceax_Talavera_Series_K9A4108_vafnvl',
            '13_ArteixoFGAJunio25_600_wijcjo'
        ]
    },
    {
        id: 'ceax-talavera',
        name: 'CEAX Talavera',
        date: 'Mayo 2026',
        images: [
            '32RIANXO-G-162_vpziv9',
            'Diego_Ceax_Talavera_Series_K9A4402_wcston',
            'Diego_Ceax_Talavera_Series_K9A4293_d7wqpv',
            '13_ArteixoFGAJunio25_501_zva99p',
            'CCTrophy-24_6_sonkxh',
            'image00004_rkhffm'
        ]
    },
    {
        id: 'trofeo-rianxo',
        name: 'Trofeo Rianxo',
        date: 'Junio 2026',
        images: [
            '_K9A3324_b3qxgl',
            'Diego_Ceax_Talavera_Series_K9A4340_qzuu6z',
            '_MG_1748_obensb',
            '_MG_1750_xsqmnt',
            'CCTrophy-24_7_ry9icm',
            'CCTrophy-24_5_e0c58p'
        ]
    }
];

const Galeria = () => {
    const [selectedChampionship, setSelectedChampionship] = useState(championships[0]);

    return (
        <section className="flex-1 flex flex-col items-center">
            <div className="w-full aspect-video md:h-[95vh] overflow-hidden bg-black flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

                <video
                    className="w-min-full w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={cld.video('Video_Project_1_t9ogno').toURL()} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>

            <div className="w-full max-w-7xl px-8 py-12 flex flex-col gap-12">
                <nav className="border-b border-gray-100 pb-12" aria-label="Selección de campeonato">
                    <ul className="flex flex-wrap justify-center gap-8 list-none m-0 p-0">
                        {championships.map((championship) => {
                            const isSelected = selectedChampionship.id === championship.id;
                            const trophyImgId = isSelected ? 'whiteTrophy_up7tb4' : 'blackTrophy_xv4sxg';
                            const trophy = cld.image(trophyImgId);
                            trophy.resize(fill().width(100).height(100));

                            return (
                                <li key={championship.id}>
                                    <button
                                        onClick={() => {
                                            setSelectedChampionship(championship);
                                        }}
                                        className={`flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 ${isSelected
                                            ? 'bg-orange-500 text-white shadow-xl scale-110'
                                            : 'bg-white text-black hover:bg-gray-50 border border-gray-100 hover:border-orange-200'
                                            }`}
                                        aria-pressed={isSelected}
                                    >
                                        <div className="p-2">
                                            <AdvancedImage cldImg={trophy} className="w-12 h-12 object-contain" alt={`Trofeo de ${championship.name}`} />
                                        </div>
                                        <div className="flex flex-col items-center text-center">
                                            <span className="text-lg font-medium">{championship.name}</span>
                                            <span className={`text-xs tracking-widest mt-1 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                                                {championship.date}
                                            </span>
                                        </div>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {selectedChampionship.images.map((imgId, index) => {
                        const img = cld.image(imgId);
                        img.resize(fill().width(800).height(600));

                        return (
                            <div key={`${selectedChampionship.id}-${index}`} className="overflow-hidden rounded-xl shadow-lg border border-gray-100 group transition-transform duration-500 hover:scale-[1.02]">
                                <AdvancedImage
                                    cldImg={img}
                                    className="w-full h-64 object-cover"
                                    alt={`Imagen ${index + 1} del campeonato ${selectedChampionship.name}`}
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

