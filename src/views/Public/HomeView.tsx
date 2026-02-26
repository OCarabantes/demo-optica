import { Search, ArrowRight, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';

export const HomeView: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '80vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%)',
                    zIndex: 1
                }}></div>

                <div className="container-public" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '600px' }}>
                        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: 'var(--color-public-primary)', lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                            Tu visión,<br />tu <span style={{ color: 'var(--color-public-accent)' }}>estilo.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--color-public-text)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                            Descubre la nueva colección 2026. Lentes de diseño premium con tecnología óptica de clase mundial, a una fracción del costo.
                        </p>

                        {/* Buscador Rápido Integrado */}
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'white',
                            padding: '0.5rem',
                            borderRadius: '99px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            marginBottom: '2rem'
                        }}>
                            <div style={{ padding: '0 1rem', display: 'flex', alignItems: 'center', color: 'var(--color-public-text-light)' }}>
                                <Search size={22} />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar por marca, forma, estilo..."
                                style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent' }}
                            />
                            <button className="public-btn-accent" style={{ padding: '0.75rem 2rem' }}>
                                Buscar
                            </button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontSize: '0.9rem', color: 'var(--color-public-text-light)', fontWeight: 500 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={18} color="var(--color-public-accent)" /> 1 año garantía</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Truck size={18} color="var(--color-public-accent)" /> Envío gratis a todo el país</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><RefreshCcw size={18} color="var(--color-public-accent)" /> Devolución 30 días</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categorías Destacadas */}
            <section className="section-padding" style={{ backgroundColor: 'var(--color-public-bg-alt)' }}>
                <div className="container-public">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-public-primary)' }}>Nuestras Colecciones</h2>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-public-accent)', fontWeight: 600, textDecoration: 'none' }}>
                            Ver todo el catálogo <ArrowRight size={20} />
                        </a>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {/* Card 1 */}
                        <div style={{ position: 'relative', height: '400px', borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer' }} className="group">
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                backgroundImage: 'url("https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800")',
                                backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease'
                            }} className="hover-scale"></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Lentes de Sol</h3>
                                <span style={{ color: 'white', opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', backdropFilter: 'blur(4px)' }}>120 Modelos</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{ position: 'relative', height: '400px', borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                backgroundImage: 'url("https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=800")',
                                backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease'
                            }}></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Ópticos Hombre</h3>
                                <span style={{ color: 'white', opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', backdropFilter: 'blur(4px)' }}>Nueva Colección</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div style={{ position: 'relative', height: '400px', borderRadius: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                backgroundImage: 'url("https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800")',
                                backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.5s ease'
                            }}></div>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Ópticos Mujer</h3>
                                <span style={{ color: 'white', opacity: 0.9, backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', backdropFilter: 'blur(4px)' }}>Más Vendidos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Agendar */}
            <section className="section-padding">
                <div className="container-public">
                    <div style={{ backgroundColor: 'var(--color-public-primary)', borderRadius: '1.5rem', padding: '5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', backgroundColor: 'var(--color-public-accent)', opacity: 0.1, filter: 'blur(100px)' }}></div>

                        <div style={{ maxWidth: '600px', position: 'relative', zIndex: 1 }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>Revisa tu vista con los expertos.</h2>
                            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.6 }}>Agenda un examen oftalmológico completo en cualquiera de nuestras sucursales y obtén tu receta al instante. Primera consulta gratis por la compra de tus lentes.</p>
                            <button className="public-btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Agendar Examen Visual Ahora
                            </button>
                        </div>

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{ width: '300px', height: '300px', borderRadius: '50%', border: '2px dashed rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                                <img src="https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&q=80&w=400" alt="Lentes" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
