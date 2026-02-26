import React, { useState } from 'react';
import { Package, FileText, Settings, CreditCard, ChevronRight, CheckCircle, Clock } from 'lucide-react';

export const PortalView: React.FC = () => {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div style={{ padding: '3rem 0', backgroundColor: 'var(--color-public-bg-alt)', minHeight: 'calc(100vh - 80px)' }}>
            <div className="container-public" style={{ maxWidth: '1100px' }}>

                {/* Encabezado */}
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-public-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 700 }}>
                        MT
                    </div>
                    <div>
                        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-public-primary)', marginBottom: '0.25rem' }}>Hola, María Teresa</h1>
                        <p style={{ color: 'var(--color-public-text-light)' }}>m.teresa.contacto@email.com • Paciente desde Ene 2026</p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>

                    {/* Navegación Lateral */}
                    <aside style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', alignSelf: 'start' }}>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <button
                                onClick={() => setActiveTab('orders')}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: activeTab === 'orders' ? 'var(--color-public-bg-alt)' : 'transparent', color: activeTab === 'orders' ? 'var(--color-public-primary)' : 'var(--color-public-text)', fontWeight: activeTab === 'orders' ? 600 : 400, border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background-color 0.2s' }}
                            >
                                <Package size={20} color={activeTab === 'orders' ? 'var(--color-public-primary)' : 'var(--color-public-text-light)'} />
                                Mis Pedidos
                            </button>

                            <button
                                onClick={() => setActiveTab('prescriptions')}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: activeTab === 'prescriptions' ? 'var(--color-public-bg-alt)' : 'transparent', color: activeTab === 'prescriptions' ? 'var(--color-public-primary)' : 'var(--color-public-text)', fontWeight: activeTab === 'prescriptions' ? 600 : 400, border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background-color 0.2s' }}
                            >
                                <FileText size={20} color={activeTab === 'prescriptions' ? 'var(--color-public-primary)' : 'var(--color-public-text-light)'} />
                                Mis Recetas Clínicas
                            </button>

                            <button
                                onClick={() => setActiveTab('settings')}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: activeTab === 'settings' ? 'var(--color-public-bg-alt)' : 'transparent', color: activeTab === 'settings' ? 'var(--color-public-primary)' : 'var(--color-public-text)', fontWeight: activeTab === 'settings' ? 600 : 400, border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background-color 0.2s' }}
                            >
                                <Settings size={20} color={activeTab === 'settings' ? 'var(--color-public-primary)' : 'var(--color-public-text-light)'} />
                                Ajustes de Perfil
                            </button>

                            <button
                                onClick={() => setActiveTab('billing')}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', padding: '1rem', borderRadius: '0.5rem', backgroundColor: activeTab === 'billing' ? 'var(--color-public-bg-alt)' : 'transparent', color: activeTab === 'billing' ? 'var(--color-public-primary)' : 'var(--color-public-text)', fontWeight: activeTab === 'billing' ? 600 : 400, border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background-color 0.2s' }}
                            >
                                <CreditCard size={20} color={activeTab === 'billing' ? 'var(--color-public-primary)' : 'var(--color-public-text-light)'} />
                                Métodos de Pago
                            </button>
                        </nav>
                    </aside>

                    {/* Área de Contenido Principal */}
                    <div>

                        {/* VISTA: Mis Pedidos */}
                        {activeTab === 'orders' && (
                            <div className="animate-fade-in">
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem', color: 'var(--color-public-primary)' }}>Seguimiento de mis Lentes</h2>

                                {/* Pedido Activo (En Laboratorio) */}
                                <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-public-border)' }}>
                                        <div>
                                            <span style={{ fontSize: '0.85rem', color: 'white', backgroundColor: '#eab308', padding: '0.25rem 0.75rem', borderRadius: '99px', fontWeight: 600, marginBottom: '0.5rem', display: 'inline-block' }}>En Fabricación</span>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-public-primary)' }}>Pedido #ORD-2026-089A</h3>
                                            <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Realizado el 15 de Noviembre, 2026</p>
                                        </div>
                                        <button className="public-btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Ver Detalle</button>
                                    </div>

                                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem' }}>
                                        <div style={{ width: '120px', height: '120px', backgroundColor: 'var(--color-public-bg-alt)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                                            <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=200" alt="Lente" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Ray-Ban Clubmaster</h4>
                                            <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>Cristales Monofocales • Antirreflejo • Filtro Azul</p>
                                            <p style={{ fontWeight: 600 }}>Total: $125.000</p>
                                        </div>
                                    </div>

                                    {/* Barra de Progreso Visual */}
                                    <div>
                                        <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '1.5rem' }}>Estado de Fabricación Laboratorio</h4>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                                            <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '4px', backgroundColor: 'var(--color-public-border)', zIndex: 0 }}></div>
                                            {/* Progreso llenado (Ejemplo: En Paso 2) */}
                                            <div style={{ position: 'absolute', top: '15px', left: '10%', width: '35%', height: '4px', backgroundColor: 'var(--color-public-accent)', zIndex: 1 }}></div>

                                            {/* Paso 1 */}
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2, width: '100px' }}>
                                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'var(--color-public-accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <CheckCircle size={20} />
                                                </div>
                                                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-public-primary)', textAlign: 'center' }}>Orden<br />Recibida</span>
                                            </div>

                                            {/* Paso 2 (Actual) */}
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2, width: '100px' }}>
                                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'white', color: 'var(--color-public-accent)', border: '4px solid var(--color-public-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Clock size={16} />
                                                </div>
                                                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-public-primary)', textAlign: 'center' }}>Corte y<br />Montaje</span>
                                            </div>

                                            {/* Paso 3 */}
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2, width: '100px' }}>
                                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'white', color: 'var(--color-public-border)', border: '4px solid var(--color-public-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--color-public-text-light)', textAlign: 'center' }}>Control<br />Calidad</span>
                                            </div>

                                            {/* Paso 4 */}
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2, width: '100px' }}>
                                                <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: 'white', color: 'var(--color-public-border)', border: '4px solid var(--color-public-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--color-public-text-light)', textAlign: 'center' }}>Listo para<br />Retiro</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pedido Pasado */}
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1.5rem' }}>Historial de Compras</h3>
                                <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-public-bg-alt)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
                                            <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=100" alt="Lente" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                                        </div>
                                        <div>
                                            <span style={{ fontSize: '0.75rem', color: '#10b981', backgroundColor: '#d1fae5', padding: '0.2rem 0.5rem', borderRadius: '99px', fontWeight: 600, marginBottom: '0.25rem', display: 'inline-block' }}>Entregado</span>
                                            <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>Kit de Limpieza + Estuche</h4>
                                            <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.85rem' }}>14 Febrero, 2026</p>
                                        </div>
                                    </div>
                                    <button style={{ backgroundColor: 'transparent', border: 'none', color: 'var(--color-public-accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', cursor: 'pointer' }}>
                                        Volver a Comprar <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* VISTA: Mis Recetas Quirúrgicas / Clínicas */}
                        {activeTab === 'prescriptions' && (
                            <div className="animate-fade-in">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-public-primary)' }}>Mis Recetas Oftalmológicas</h2>
                                    <button className="public-btn-accent" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                                        Agendar Nuevo Examen
                                    </button>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                    {/* Receta 1 */}
                                    <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <FileText size={24} />
                                            </div>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-public-primary)' }}>Receta Lentes Monofocales</h3>
                                                    <span style={{ fontSize: '0.75rem', backgroundColor: '#d1fae5', color: '#10b981', padding: '0.15rem 0.5rem', borderRadius: '99px', fontWeight: 600 }}>Vigente hasta 2027</span>
                                                </div>
                                                <p style={{ color: 'var(--color-public-text)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Emitida por Dr. Alex Rivera (Sede Central)</p>
                                                <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.85rem' }}>OD: Sphere -1.50, Cyl -0.50, Axis 180 | OS: Sphere -1.75, Cyl -0.25, Axis 175</p>
                                            </div>
                                        </div>
                                        <button className="public-btn-outline" style={{ fontSize: '0.9rem' }}>Descargar PDF</button>
                                    </div>

                                    {/* Receta 2 (Antigua) */}
                                    <div style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: 0.7 }}>
                                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <FileText size={24} />
                                            </div>
                                            <div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
                                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-public-primary)' }}>Receta Examen General 2024</h3>
                                                    <span style={{ fontSize: '0.75rem', backgroundColor: '#fee2e2', color: '#ef4444', padding: '0.15rem 0.5rem', borderRadius: '99px', fontWeight: 600 }}>Vencida</span>
                                                </div>
                                                <p style={{ color: 'var(--color-public-text)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Emitida por Dra. Elena Salas (Sucursal Norte)</p>
                                            </div>
                                        </div>
                                        <button className="public-btn-outline" style={{ fontSize: '0.9rem', borderColor: '#cbd5e1', color: '#64748b' }}>Descargar PDF</button>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* Placeholders Tab */}
                        {(activeTab === 'settings' || activeTab === 'billing') && (
                            <div className="animate-fade-in" style={{ backgroundColor: 'white', borderRadius: '1rem', padding: '4rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-public-primary)', marginBottom: '1rem' }}>Esta sección está en desarrollo</h2>
                                <p style={{ color: 'var(--color-public-text-light)' }}>Esta funcionalidad no está incluida en el flujo principal de la demo técnica.</p>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};
