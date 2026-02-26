import React from 'react';
import { ChatWidget } from './ChatWidget';

interface PublicLayoutProps {
    children: React.ReactNode;
    activeView: string;
    setActiveView: (view: string) => void;
    onExit: () => void;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({ children, activeView, setActiveView, onExit }) => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900 font-display antialiased">
            {/* HEADER */}
            <header className="sticky top-0 z-50 flex flex-col w-full bg-white shadow-sm">
                {/* Topbar Utility */}
                <div className="bg-black text-white py-1.5 px-4 text-xs font-bold flex justify-center uppercase tracking-widest">
                    Envío gratis en compras sobre $50.000 CLP
                </div>

                {/* Main Header */}
                <div className="flex items-center justify-between px-6 md:px-12 py-4">
                    {/* Left: Logo */}
                    <div
                        className="flex items-center gap-2 text-black cursor-pointer"
                        onClick={() => setActiveView('home')}
                    >
                        <span className="material-symbols-outlined text-4xl">visibility</span>
                        <h2 className="text-black text-2xl font-black tracking-tighter uppercase">OptiVision</h2>
                    </div>

                    {/* Center: Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveView('shop'); }} className={`text-sm tracking-widest uppercase transition-colors ${activeView === 'shop' ? 'text-black font-black border-b-2 border-black pb-1' : 'text-slate-500 hover:text-black font-bold'}`}>Anteojos Ópticos</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveView('shop'); }} className={`text-sm tracking-widest uppercase transition-colors text-slate-500 hover:text-black font-bold`}>Anteojos de Sol</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveView('booking'); }} className={`text-sm tracking-widest uppercase transition-colors ${activeView === 'booking' ? 'text-black font-black border-b-2 border-black pb-1' : 'text-slate-500 hover:text-black font-bold'}`}>Examen Visual</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setActiveView('portal'); }} className={`text-sm tracking-widest uppercase transition-colors ${activeView === 'portal' ? 'text-black font-black border-b-2 border-black pb-1' : 'text-slate-500 hover:text-black font-bold'}`}>Seguimiento</a>
                    </nav>

                    {/* Right: Icons & Actions */}
                    <div className="flex items-center gap-6">
                        <button className="text-black hover:text-slate-600 transition-colors">
                            <span className="material-symbols-outlined text-2xl">search</span>
                        </button>
                        <button className="text-black hover:text-slate-600 transition-colors" onClick={() => setActiveView('portal')}>
                            <span className="material-symbols-outlined text-2xl">person</span>
                        </button>
                        <button className="text-black hover:text-slate-600 transition-colors relative" onClick={() => setActiveView('portal')}>
                            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                            <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </button>
                        <div className="w-px h-6 bg-slate-300 ml-2 hidden md:block"></div>
                        <button className="hidden md:flex text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-black transition-colors" onClick={onExit}>
                            Staff
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN */}
            <div className="flex-1 flex flex-col w-full relative">
                <div className="animate-fade-in w-full h-full flex flex-col flex-1">
                    {children}
                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-white border-t border-slate-200 py-12 px-10 mt-auto">
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-slate-900">
                            <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
                            <span className="text-xl font-bold">OptiVision</span>
                        </div>
                        <p className="text-slate-500 text-sm">Tu visión es nuestra prioridad. Ofreciendo gafas premium y cuidado experto desde 1995.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-slate-900">Tienda</h3>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Lentes Oftálmicos</a>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Lentes de Sol</a>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Lentes de Contacto</a>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Accesorios</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-slate-900">Servicios</h3>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#" onClick={(e) => { e.preventDefault(); setActiveView('booking'); }}>Exámenes de la Vista</a>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Probador Virtual</a>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Seguros</a>
                        <a className="text-slate-600 hover:text-primary text-sm transition-colors" href="#">Reparaciones</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-slate-900">Contacto</h3>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            <span>Manuel Montt 850, Temuco Centro, Chile</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <span className="material-symbols-outlined text-lg">call</span>
                            <span>+56 9 8765 4321</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                            <span className="material-symbols-outlined text-lg">mail</span>
                            <span>soporte@optivision.com</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>© 2026 OptiVision SPA. Todos los derechos reservados.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a className="hover:text-slate-600 transition-colors" href="#">Política de Privacidad</a>
                        <a className="hover:text-slate-600 transition-colors" href="#">Términos de Servicio</a>
                    </div>
                </div>
            </footer>
            <ChatWidget />
        </div>
    );
};
