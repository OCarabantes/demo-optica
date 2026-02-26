import React, { useState } from 'react';
import { Search, Filter, Plus, Printer, MessageCircle, ShoppingBag, CreditCard, CheckCircle } from 'lucide-react';
import { catalogProducts } from '../../data/mockData';

const formatCLP = (value: number) => {
    return '$' + value.toLocaleString('es-CL');
};

export const POSView: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'catalog' | 'checkout'>('catalog');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1 className="text-2xl" style={{ marginBottom: '0.5rem' }}>Punto de Venta & Presupuestos</h1>
                    <p className="text-muted text-sm">Catálogo interactivo, creación de cotizaciones y facturación</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        className={`btn ${activeTab === 'catalog' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setActiveTab('catalog')}
                    >
                        Catálogo & Cotizador
                    </button>
                    <button
                        className={`btn ${activeTab === 'checkout' ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setActiveTab('checkout')}
                    >
                        Caja / Checkout
                    </button>
                </div>
            </div>

            {activeTab === 'catalog' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(600px, 2fr) 1fr', gap: '1.5rem', flex: 1 }}>
                    {/* Catalog Section */}
                    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* Filters */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                                <input
                                    type="text"
                                    placeholder="Buscar por nombre, SKU o marca..."
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }}
                                />
                            </div>
                            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-background)' }}>
                                <Filter size={18} /> Filtros Avanzados
                            </button>
                        </div>

                        {/* Product Grid */}
                        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            {catalogProducts.map(product => (
                                <div key={product.id} className="card" style={{ overflow: 'hidden', cursor: 'pointer', transition: 'transform var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div style={{ height: '120px', backgroundColor: 'var(--color-background)', backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                    <div style={{ padding: '1rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                            <span className="badge" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-muted)', fontSize: '0.65rem' }}>{product.brand}</span>
                                            <span className="font-semibold text-primary">{formatCLP(product.price)}</span>
                                        </div>
                                        <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</h4>
                                        <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>{product.material}</p>
                                        <button className="btn btn-outline" style={{ width: '100%', padding: '0.4rem', fontSize: '0.875rem' }}>
                                            <Plus size={16} /> Añadir a Cotización
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Cotizador Activo</h3>
                            <p className="text-muted text-sm">Cliente: María González (PAC-2023-8492)</p>
                        </div>

                        {/* Quote Items */}
                        <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--color-border)' }}>
                                <div>
                                    <p className="font-medium">Armazón Aviador Classic</p>
                                    <p className="text-muted text-sm">Ray-Ban - Titanio</p>
                                </div>
                                <p className="font-semibold">{formatCLP(150000)}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--color-border)' }}>
                                <div>
                                    <p className="font-medium">Cristal Progresivo Premium</p>
                                    <p className="text-muted text-sm">Filtro Azul + Antireflejo</p>
                                </div>
                                <p className="font-semibold">{formatCLP(220000)}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px dashed var(--color-border)' }}>
                                <div>
                                    <p className="font-medium">Seguro Médico (Isapre)</p>
                                    <p className="text-muted text-sm">Cobertura 60% en cristales</p>
                                </div>
                                <p className="font-semibold" style={{ color: 'var(--color-success)' }}>-{formatCLP(132000)}</p>
                            </div>
                        </div>

                        {/* Quote Summary */}
                        <div style={{ padding: '1.5rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)', borderBottomLeftRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span className="text-muted">Subtotal</span>
                                <span>{formatCLP(370000)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                <span className="text-muted">Descuento (Seguro)</span>
                                <span style={{ color: 'var(--color-success)' }}>-{formatCLP(132000)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                <span className="font-semibold text-lg">Total</span>
                                <span className="font-bold text-2xl text-primary">{formatCLP(238000)}</span>
                            </div>
                            <p className="text-muted text-sm text-center" style={{ marginBottom: '1rem' }}>Válido hasta: 30 Nov 2023</p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    <Printer size={16} /> Imprimir PDF
                                </button>
                                <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#128C7E', borderColor: '#128C7E' }}>
                                    <MessageCircle size={16} /> WhatsApp
                                </button>
                            </div>
                            <button
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '0.75rem', fontSize: '1rem' }}
                                onClick={() => setActiveTab('checkout')}
                            >
                                <ShoppingBag size={18} /> Convertir en Venta
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'checkout' && (
                <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                    <div className="card" style={{ padding: '2rem' }}>
                        <h2 className="text-xl" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CreditCard size={24} color="var(--color-primary)" /> Finalizar Venta (Caja)
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
                            <div>
                                <h3 className="text-lg font-medium" style={{ marginBottom: '1rem' }}>Datos de Facturación</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                    <div>
                                        <label className="text-muted text-sm" style={{ display: 'block', marginBottom: '0.25rem' }}>RUT / DNI</label>
                                        <input type="text" placeholder="12.345.678-9" defaultValue="15.890.123-K" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm" style={{ display: 'block', marginBottom: '0.25rem' }}>Nombre Facturación</label>
                                        <input type="text" placeholder="Nombre completo" defaultValue="María González Pérez" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm" style={{ display: 'block', marginBottom: '0.25rem' }}>Correo Electrónico para DTE</label>
                                        <input type="email" placeholder="correo@ejemplo.com" defaultValue="maria.gonzalez@email.com" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)' }} />
                                    </div>
                                </div>

                                <h3 className="text-lg font-medium" style={{ marginBottom: '1rem' }}>Método de Pago</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                                    <button className="btn btn-outline" style={{ justifyContent: 'flex-start', padding: '1rem', borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                                        Tarjeta Débito/Crédito
                                    </button>
                                    <button className="btn btn-outline" style={{ justifyContent: 'flex-start', padding: '1rem' }}>
                                        Efectivo
                                    </button>
                                    <button className="btn btn-outline" style={{ justifyContent: 'flex-start', padding: '1rem' }}>
                                        Transferencia Bancaria
                                    </button>
                                    <button className="btn btn-outline" style={{ justifyContent: 'flex-start', padding: '1rem' }}>
                                        Seguro Médico Directo
                                    </button>
                                </div>
                            </div>

                            <div style={{ backgroundColor: 'var(--color-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                                <h3 className="font-medium" style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>Resumen de la Compra</h3>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                                    <span>Armazón Aviador Classic</span>
                                    <span>{formatCLP(150000)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.875rem' }}>
                                    <span>Cristal Progresivo Premium</span>
                                    <span>{formatCLP(220000)}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--color-success)' }}>
                                    <span>Cobertura Isapre (60% cristales)</span>
                                    <span>-{formatCLP(132000)}</span>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                                    <span className="font-medium text-lg">Total a Pagar</span>
                                    <span className="font-bold text-2xl text-primary">{formatCLP(238000)}</span>
                                </div>

                                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                    <CheckCircle size={20} /> Procesar Pago y Generar DTE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
