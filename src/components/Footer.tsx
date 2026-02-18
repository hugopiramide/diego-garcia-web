import { Instagram, Facebook } from 'lucide-react';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";

const Footer = () => {
    const sponsors = [
        { img: cld.image('unnamed_jieh4h').resize(fill().width(192).height(41)), alt: 'Logotipo de Dimalnox' },
        { img: cld.image('marmoles_barbeito').resize(fill().width(267).height(63)), alt: 'Logotipo de Mármoles Barbeito' },
        { img: cld.image('logo_rallycar2_mldx7r').resize(fill().width(161).height(65)), alt: 'Logotipo de Rallycar' },
        { img: cld.image('ramon_garcia_rfnfs3').resize(fill().width(101).height(59)), alt: 'Logotipo de Ramón García' },
        { img: cld.image('senra_sport_vhbbkv').resize(fill().width(155).height(61)), alt: 'Logotipo de Senra Sport' },
    ];

    const doubleSponsors = [...sponsors, ...sponsors];

    return (
        <footer className="bg-[#f7f8f9] pb-12 mt-auto border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">

                {/* CARRUSEL */}
                <div className="relative mb-16">
                    <div className="flex overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <div className="animate-infinite-scroll flex items-center gap-20 grayscale">
                            {doubleSponsors.map((sponsor, index) => (
                                <div key={index} className="shrink-0 flex justify-center">
                                    <AdvancedImage
                                        cldImg={sponsor.img}
                                        alt={sponsor.alt}
                                        className="h-auto w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* REDES SOCIALES */}
                <div className="flex justify-center mb-6">
                    <ul className="flex gap-8 list-none m-0 p-0">
                        <li>
                            <a href="https://www.instagram.com/diegogaarciiia_11/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#FE7021] transition-colors" aria-label="Instagram de Diego García">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/DiegoGaarciiia_" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#FE7021] transition-colors" aria-label="Twitter X de Diego García">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100081305640114#" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#FE7021] transition-colors" aria-label="Facebook de Diego García">
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* COPYRIGHT */}
                <div className="text-center">
                    <p className="text-[13px] tracking-wide text-gray-500 font-poppins">
                        &copy;2026 - Hugo del Castillo y Pablo Salgado
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
