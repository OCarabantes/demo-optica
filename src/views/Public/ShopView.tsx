import { useState } from 'react';
import { catalogProducts, addSimulatedOrder } from '../../data/mockData';

const formatCLP = (value: number) => {
    return '$' + value.toLocaleString('es-CL');
};

export const ShopView = () => {
    const [simulatedAlert, setSimulatedAlert] = useState<string | null>(null);

    const handleEmulateOrder = (product: any, e: React.MouseEvent) => {
        e.stopPropagation();
        const newOrder = {
            id: `ORD-WEB-${Math.floor(Math.random() * 10000)}`,
            patient: 'Cliente Web (Demo)',
            product: `${product.name} - ${product.brand}`,
            branch: 'Compra Online',
            status: 'Control de Calidad',
            date: new Date().toISOString().split('T')[0]
        };
        addSimulatedOrder(newOrder);
        setSimulatedAlert(`¡Simulación Exitosa! El pedido de "${product.name}" se ha inyectado hacia tu Dashboard de Gestión.`);
        setTimeout(() => setSimulatedAlert(null), 4500);
    };

    return (
        <div className="flex-1 flex flex-col items-center w-full px-4 sm:px-8 py-8">
            {simulatedAlert && (
                <div className="fixed top-32 left-1/2 -translate-x-1/2 z-[100] bg-black text-white px-8 py-4 shadow-2xl flex items-center gap-4 animate-fade-in font-medium max-w-lg w-full">
                    <span className="material-symbols-outlined text-green-400 text-3xl">check_circle</span>
                    <p className="text-sm tracking-wide leading-relaxed">{simulatedAlert}</p>
                </div>
            )}

            <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1 gap-12">

                {/* Hero Banner R&K Style */}
                <div className="w-full relative bg-slate-100 flex items-center overflow-hidden min-h-[450px]">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1588612140417-64047a057279?auto=format&fit=crop&q=80&w=1200"
                            alt="Fashion Eyewear"
                            className="w-full h-full object-cover object-center opacity-90"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                    <div className="relative z-20 px-10 md:px-16 w-full max-w-2xl flex flex-col gap-6">
                        <h1 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
                            NUEVA COLECCIÓN
                        </h1>
                        <p className="text-white text-lg font-light tracking-wide max-w-md">
                            Descubre los modelos exclusivos que marcan tendencia este año.
                        </p>
                        <button className="mt-4 bg-white text-black px-8 py-4 uppercase font-bold text-sm tracking-widest hover:bg-slate-200 transition-colors w-fit">
                            Ver Colección
                        </button>
                    </div>
                </div>

                {/* Filtros R&K Style */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-y border-slate-200 py-4">
                    <span className="text-slate-500 font-medium tracking-wide uppercase text-sm">
                        {catalogProducts.length} PRODUCTOS
                    </span>
                    <div className="flex gap-4 flex-wrap items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <span className="text-sm font-bold uppercase tracking-wide text-black">Ordenar por</span>
                            <select className="border-none bg-transparent text-sm font-medium focus:ring-0 cursor-pointer uppercase">
                                <option>Relevancia</option>
                                <option>Menor Precio</option>
                                <option>Mayor Precio</option>
                            </select>
                        </label>
                        <div className="w-px h-6 bg-slate-300"></div>
                        <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-black hover:text-slate-500 transition-colors">
                            <span className="material-symbols-outlined text-xl">tune</span>
                            Filtros
                        </button>
                    </div>
                </div>

                {/* Grid R&K */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-16 pb-12">
                    {catalogProducts.map((product, idx) => (
                        <div key={product.id} className="group flex flex-col gap-4 relative">
                            {idx === 0 && (
                                <div className="absolute top-0 left-0 z-10 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                    Top Ventas
                                </div>
                            )}
                            {idx === 3 && (
                                <div className="absolute top-0 left-0 z-10 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
                                    Nuevo
                                </div>
                            )}

                            {/* Image Box */}
                            <div className="relative w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-8 overflow-hidden group-hover:bg-slate-100 transition-colors">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain mix-blend-multiply transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Emular Pedido */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <button
                                        onClick={(e) => handleEmulateOrder(product, e)}
                                        className="bg-black text-white px-6 py-3 text-xs uppercase font-bold tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-slate-800"
                                    >
                                        Emular Pedido
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col items-center text-center gap-1">
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{product.brand}</p>
                                <h3 className="text-black text-base font-bold leading-tight">{product.name}</h3>
                                <p className="text-black text-sm font-medium mt-1">{formatCLP(product.price)}</p>
                            </div>

                            {/* Swatches (centered) */}
                            <div className="flex justify-center gap-2 mt-1">
                                <div className="w-4 h-4 rounded-full bg-black border border-slate-300 cursor-pointer"></div>
                                {idx % 2 === 0 && <div className="w-4 h-4 rounded-full bg-slate-400 border border-slate-300 cursor-pointer"></div>}
                                {idx % 3 === 0 && <div className="w-4 h-4 rounded-full bg-[#8b5a2b] border border-slate-300 cursor-pointer"></div>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner R&K Style */}
                <div className="w-full bg-black text-white flex flex-col md:flex-row items-center mt-8 mb-16">
                    <div className="p-12 md:p-16 md:w-1/2 flex flex-col gap-6 items-start">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">EXAMEN VISUAL</h2>
                        <p className="text-slate-300 text-lg font-light leading-relaxed">
                            Reserva tu hora en nuestras sucursales con especialistas de primer nivel.
                        </p>
                        <button className="mt-4 bg-white text-black px-8 py-3 uppercase font-bold text-sm tracking-widest hover:bg-slate-200 transition-colors">
                            Agendar Hora
                        </button>
                    </div>
                    <div className="md:w-1/2 h-80 min-h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800")' }}>
                    </div>
                </div>

            </div>
        </div>
    );
};
