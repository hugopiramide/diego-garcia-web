import React, { useState, useMemo, useEffect } from 'react';
import { cld } from '../lib/cloudinary';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage, AdvancedVideo } from '@cloudinary/react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth
} from 'date-fns';
import { es } from 'date-fns/locale';

const Home: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        if (window.location.hash === '#contacto') {
            const element = document.getElementById('contacto');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    const { img, img2 } = useMemo(() => {
        const i1 = cld.image('32RIANXO-G-110_q40tay');
        i1.resize(fill().width(1000).height(800));
        const i2 = cld.image('Diego_Ceax_Talavera_Series081A0116_jk7wuu');
        i2.resize(fill().width(2000).height(2000));
        return { img: i1, img2: i2 };
    }, []);

    const videoHome = cld.video('videoDiegoHome_2_mnw5zr').resize(fill())

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    return (
        <main className="w-full overflow-x-hidden">

            {/* QUIÉN SOY */}
            <section className="relative bg-black text-white py-12 md:py-24 px-4 md:px-10 lg:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <AdvancedVideo
                        cldVid={videoHome}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-2/3 order-2 md:order-1 text-center md:text-left">
                        <h2 className="md:text-3xl lg:text-3xl italic mb-6 leading-tight">¿Quién soy?</h2>
                        <div className="space-y-4 md:text-lg leading-relaxed font-light text-gray-200">
                            <p className="text-base">Soy Diego García Candal, y mi vida se mide en milésimas de segundo. No solo busco ser el más rápido en la pista, sino el más estratégico. Lo que empezó como una pasión temprana se ha transformado en una carrera profesional basada en la disciplina, el análisis técnico y una ambición constante por alcanzar lo más alto del podio.</p>
                            <p className="text-base">Mi enfoque va más allá del volante: entiendo que el éxito es el resultado de un trabajo en equipo impecable. Estoy aquí para dejar huella en el automovilismo, representando con orgullo a quienes confían en mi talento.</p>
                        </div>
                    </div>
                    <div className="w-full max-w-75 md:max-w-none md:w-1/3 order-1 md:order-2">
                        <AdvancedImage cldImg={img} className="rounded-sm shadow-2xl w-full aspect-square md:aspect-auto object-cover" />
                    </div>
                </div>
            </section>

            {/* CALENDARIO */}
            <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                    <h2 className="text-3xl md:text-3xl italic">Calendario</h2>
                    <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-gray-200 w-full sm:w-auto justify-between">
                        <button onClick={prevMonth} className="bg-gray-100! text-black! px-4! py-2! hover:bg-[#FE7021]! hover:text-white! transition-all cursor-pointer" aria-label="Mes anterior">&lt;</button>
                        <span className="font-bold text-sm md:text-base min-w-30 text-center capitalize" aria-live="polite">
                            {format(currentDate, 'MMMM yyyy', { locale: es })}
                        </span>
                        <button onClick={nextMonth} className="bg-gray-100! text-black! px-4! py-2! hover:bg-[#FE7021]! hover:text-white! transition-all cursor-pointer" aria-label="Mes siguiente">&gt;</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-4 hidden lg:block">
                        <AdvancedImage cldImg={img2} className="w-full h-full object-cover rounded-sm shadow-md min-h-100" />
                    </div>
                    <div className="lg:col-span-8 w-full flex flex-col justify-center overflow-x-auto pb-4 custom-scrollbar">
                        <div className="min-w-150 shadow-lg border border-gray-300 rounded-lg overflow-hidden h-fit">
                            <div className="grid grid-cols-7 bg-white border-b border-gray-300 text-center">
                                {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => (
                                    <div key={d} className="p-3 text-[10px] md:text-xs font-bold uppercase border-r last:border-r-0 border-gray-200">{d}</div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 bg-white">
                                {calendarDays.map((day, idx) => (
                                    <div key={idx} className={`h-16 md:h-24 p-2 border-r border-b border-gray-100 text-right ${!isSameMonth(day, monthStart) ? 'bg-gray-50 text-gray-300' : 'text-gray-800'}`}>
                                        <span className="text-xs md:text-sm font-bold">{format(day, 'd')}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="py-12 md:py-20 px-4 md:px-8 scroll-mt-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-3xl italic mb-10">Contacto</h2>
                    <form className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.05)] rounded-2xl p-6 md:p-12 border border-gray-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                            {['Nombre', 'Apellidos', 'Número de teléfono', 'Correo electrónico'].map((label) => (
                                <div key={label} className="flex flex-col">
                                    <label className="text-[#FE7021] text-xs font-bold mb-2 ml-1 uppercase tracking-wider">{label}</label>
                                    <input type="text" className="w-full bg-[#f8f9fa] border border-[#FE7021]/30 rounded-xl p-3 md:p-4 outline-none focus:border-[#FE7021] focus:ring-1 focus:ring-[#FE7021] transition-all" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-6">
                            <label className="text-[#FE7021] text-xs font-bold mb-2 ml-1 uppercase tracking-wider">Mensaje</label>
                            <textarea rows={5} className="w-full bg-[#f8f9fa] border border-[#FE7021]/30 rounded-xl p-4 outline-none focus:border-[#FE7021] focus:ring-1 focus:ring-[#FE7021] resize-none"></textarea>
                        </div>
                        <div className="mt-10 flex justify-center md:justify-end">
                            <button type="submit" className="w-full md:w-auto px-16! py-4! font-bold rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer">Enviar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Home;
