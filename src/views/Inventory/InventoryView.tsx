import React, { useState } from 'react';
import { PackageSearch, MapPin, Search, ChevronRight, CheckCircle, Clock, Truck, Settings } from 'lucide-react';
import { catalogProducts, trackingData } from '../../data/mockData';

export const InventoryView: React.FC = () => {
    const [selectedBranch, setSelectedBranch] = useState('Todas las Sucursales');

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'En Laboratorio': return <Settings size={20} className="text-primary" />;
            case 'Control de Calidad': return <Search size={20} className="text-warning" />;
            case 'En Tienda': return <Truck size={20} className="text-primary" />;
            case 'Entregado': return <CheckCircle size={20} className="text-success" />;
            default: return <Clock size={20} className="text-muted" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'En Laboratorio': return 'var(--color-primary-light)';
            case 'Control de Calidad': return 'var(--color-warning-bg)';
            case 'En Tienda': return 'var(--color-primary-light)';
            case 'Entregado': return 'var(--color-success-bg)';
            default: return 'var(--color-background)';
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1 className="text-2xl" style={{ marginBottom: '0.5rem' }}>Inventario & Pedidos</h1>
                    <p className="text-muted text-sm">Control de existencias multisucursal y seguimiento de órdenes</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <PackageSearch size={18} /> Solicitar Traspaso
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', flex: 1 }}>

                {/* Stock Multisucursal */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 className="text-lg font-medium">Stock Multisucursal</h2>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                                <MapPin size={16} className="text-muted" />
                                <select
                                    style={{ border: 'none', background: 'transparent', outline: 'none', fontWeight: 500 }}
                                    value={selectedBranch}
                                    onChange={(e) => setSelectedBranch(e.target.value)}
                                >
                                    <option value="Todas las Sucursales">Todas las Sucursales</option>
                                    <option value="Temuco Centro">Temuco Centro</option>
                                    <option value="Portal Temuco">Portal Temuco</option>
                                    <option value="Padre Las Casas">Padre Las Casas</option>
                                </select>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                                <input type="text" placeholder="Buscar SKU..." style={{ padding: '0.5rem 1rem 0.5rem 2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ backgroundColor: 'var(--color-background)', position: 'sticky', top: 0 }}>
                                <tr>
                                    <th style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>SKU / Producto</th>
                                    <th style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>Categoría</th>
                                    <th style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>Temuco Centro</th>
                                    <th style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>Portal Temuco</th>
                                    <th style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>Padre Las Casas</th>
                                    <th style={{ padding: '1rem 1.5rem', color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.875rem', borderBottom: '1px solid var(--color-border)' }}>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {catalogProducts.map((product, idx) => (
                                    <tr key={product.id} style={{ borderBottom: '1px solid var(--color-border)', backgroundColor: idx % 2 === 0 ? 'transparent' : 'var(--color-background)' }}>
                                        <td style={{ padding: '1rem 1.5rem' }}>
                                            <p className="font-medium" style={{ fontSize: '0.875rem' }}>{product.name}</p>
                                            <p className="text-muted" style={{ fontSize: '0.75rem' }}>{product.brand} - {product.material}</p>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>Armazón</td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                            <span style={{ fontWeight: 600, color: (idx + 5) < 3 ? 'var(--color-danger)' : 'var(--color-text)' }}>{Math.floor(Math.random() * 10) + idx}</span>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                            <span style={{ fontWeight: 600 }}>{Math.floor(Math.random() * 5) + 2}</span>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem' }}>
                                            <span style={{ fontWeight: 600 }}>{Math.floor(Math.random() * 3) + 1}</span>
                                        </td>
                                        <td style={{ padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                                            {(Math.floor(Math.random() * 10) + idx) + (Math.floor(Math.random() * 5) + 2) + (Math.floor(Math.random() * 3) + 1)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tracking Sidebar */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                        <h2 className="text-lg font-medium">Seguimiento de Órdenes</h2>
                        <p className="text-muted text-sm" style={{ marginTop: '0.25rem' }}>Estado de trabajos de laboratorio</p>
                    </div>

                    <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {trackingData.map((order, idx) => (
                            <div key={order.id} style={{ position: 'relative' }}>
                                {idx !== trackingData.length - 1 && (
                                    <div style={{ position: 'absolute', top: '40px', left: '20px', bottom: '-24px', width: '2px', backgroundColor: 'var(--color-border)', zIndex: 0 }} />
                                )}

                                <div style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        backgroundColor: getStatusColor(order.status),
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0, border: '2px solid var(--color-surface)'
                                    }}>
                                        {getStatusIcon(order.status)}
                                    </div>

                                    <div style={{ flex: 1, backgroundColor: 'var(--color-background)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                            <span className="font-semibold text-primary">{order.id}</span>
                                            <span className="text-muted text-sm">{order.date}</span>
                                        </div>
                                        <p className="font-medium" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{order.patient}</p>
                                        <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>{order.product}</p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
                                            <span className="badge" style={{ backgroundColor: getStatusColor(order.status), color: 'var(--color-text)' }}>
                                                {order.status}
                                            </span>
                                            <ChevronRight size={16} className="text-muted" style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
