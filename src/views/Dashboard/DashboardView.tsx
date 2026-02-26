import React, { useState, useEffect } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from 'recharts';
import {
    TrendingUp, Users, DollarSign, AlertTriangle, ShoppingBag,
    Eye, Globe, RefreshCw, ChevronDown, ChevronUp, Package
} from 'lucide-react';
import {
    kpiData, salesByBranchData, weeklyAppointmentsData,
    lowStockAlerts, getTrackingData
} from '../../data/mockData';
import type { TrackingOrder } from '../../data/mockData';

const formatCLP = (value: number) => '$' + value.toLocaleString('es-CL');

const statusConfig: Record<string, { bg: string; color: string; dot: string }> = {
    'Receta Recibida': { bg: '#eff6ff', color: '#1d4ed8', dot: '#3b82f6' },
    'En Laboratorio': { bg: '#fefce8', color: '#92400e', dot: '#f59e0b' },
    'Control de Calidad': { bg: '#fff7ed', color: '#c2410c', dot: '#f97316' },
    'En Tienda': { bg: '#f0fdf4', color: '#166534', dot: '#22c55e' },
    'Entregado': { bg: '#f8fafc', color: '#475569', dot: '#94a3b8' },
};

// Micro sparkline data for KPIs
const sparkSales = [8, 12, 9, 14, 11, 16, 15];
const sparkPatients = [3, 5, 4, 7, 6, 8, 9];
const sparkTicket = [100, 115, 108, 123, 118, 130, 125];

const SparkLine: React.FC<{ data: number[]; color: string }> = ({ data, color }) => (
    <ResponsiveContainer width="100%" height={40}>
        <AreaChart data={data.map((v, i) => ({ v, i }))} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
            <defs>
                <linearGradient id={`sg-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                </linearGradient>
            </defs>
            <Area type="monotone" dataKey="v" stroke={color} strokeWidth={2} fill={`url(#sg-${color.replace('#', '')})`} dot={false} />
        </AreaChart>
    </ResponsiveContainer>
);

export const DashboardView: React.FC = () => {
    const [orders, setOrders] = useState<TrackingOrder[]>([]);
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
    const [lastRefresh, setLastRefresh] = useState(new Date());
    const [webOnly, setWebOnly] = useState(false);

    const refresh = () => {
        setOrders(getTrackingData());
        setLastRefresh(new Date());
    };

    useEffect(() => {
        refresh();
        const interval = setInterval(refresh, 3000);
        return () => clearInterval(interval);
    }, []);

    const displayedOrders = webOnly ? orders.filter(o => o.isWebOrder) : orders;
    const webOrderCount = orders.filter(o => o.isWebOrder).length;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0.5rem 0' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                        OptiVision — Temuco
                    </p>
                    <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>Panel de Gestión</h1>
                    <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                        Resumen operativo · {new Date().toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </p>
                </div>
                <button onClick={refresh} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.625rem 1.25rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem',
                    backgroundColor: 'white', color: '#475569', fontSize: '0.8rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s'
                }}>
                    <RefreshCw size={14} /> Actualizar · {lastRefresh.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                </button>
            </div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.25rem' }}>
                {/* Sales */}
                <div style={{ background: 'linear-gradient(135deg,#1e40af 0%,#1d4ed8 100%)', borderRadius: '1rem', padding: '1.5rem', color: 'white', boxShadow: '0 10px 30px rgba(30,64,175,0.25)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ventas Totales</p>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.375rem', color: 'white' }}>{formatCLP(kpiData.totalSales)}</h2>
                        </div>
                        <div style={{ width: '42px', height: '42px', borderRadius: '0.625rem', backgroundColor: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <DollarSign size={22} color="white" />
                        </div>
                    </div>
                    <div style={{ marginTop: '0.75rem' }}>
                        <SparkLine data={sparkSales} color="#93c5fd" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.25rem' }}>
                        <TrendingUp size={14} color="#86efac" />
                        <span style={{ color: '#86efac', fontSize: '0.8rem', fontWeight: 600 }}>{kpiData.growthSales}</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>vs mes anterior</span>
                    </div>
                </div>

                {/* Patients */}
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pacientes Nuevos</p>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.375rem', color: '#0f172a' }}>{kpiData.newPatients}</h2>
                        </div>
                        <div style={{ width: '42px', height: '42px', borderRadius: '0.625rem', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Users size={22} color="#059669" />
                        </div>
                    </div>
                    <SparkLine data={sparkPatients} color="#10b981" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <TrendingUp size={14} color="#10b981" />
                        <span style={{ color: '#10b981', fontSize: '0.8rem', fontWeight: 600 }}>{kpiData.growthPatients}</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>vs mes anterior</span>
                    </div>
                </div>

                {/* Average Ticket */}
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ticket Promedio</p>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.375rem', color: '#0f172a' }}>{formatCLP(kpiData.averageTicket)}</h2>
                        </div>
                        <div style={{ width: '42px', height: '42px', borderRadius: '0.625rem', backgroundColor: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ShoppingBag size={22} color="#d97706" />
                        </div>
                    </div>
                    <SparkLine data={sparkTicket} color="#f59e0b" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                        <TrendingUp size={14} color="#f59e0b" />
                        <span style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: 600 }}>{kpiData.growthTicket}</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>vs mes anterior</span>
                    </div>
                </div>

                {/* Web Orders */}
                <div style={{
                    background: webOrderCount > 0
                        ? 'linear-gradient(135deg,#7c3aed 0%,#6d28d9 100%)'
                        : 'white',
                    border: webOrderCount === 0 ? '1px solid #e2e8f0' : 'none',
                    borderRadius: '1rem', padding: '1.5rem',
                    boxShadow: webOrderCount > 0 ? '0 10px 30px rgba(124,58,237,0.25)' : '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.5s'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <p style={{ color: webOrderCount > 0 ? 'rgba(255,255,255,0.7)' : '#94a3b8', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pedidos Web</p>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.375rem', color: webOrderCount > 0 ? 'white' : '#0f172a' }}>{webOrderCount}</h2>
                        </div>
                        <div style={{ width: '42px', height: '42px', borderRadius: '0.625rem', backgroundColor: webOrderCount > 0 ? 'rgba(255,255,255,0.15)' : '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Globe size={22} color={webOrderCount > 0 ? 'white' : '#7c3aed'} />
                        </div>
                    </div>
                    <p style={{ color: webOrderCount > 0 ? 'rgba(255,255,255,0.6)' : '#94a3b8', fontSize: '0.78rem', marginTop: '1.5rem' }}>
                        {webOrderCount > 0 ? `${webOrderCount} pedido(s) ingresado(s) desde la vitrina web` : 'Simula una compra en la vitrina web'}
                    </p>
                </div>
            </div>

            {/* Charts Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(400px,1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Ventas por Sucursal</h3>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.125rem' }}>Mes actual · CLP</p>
                        </div>
                    </div>
                    <div style={{ height: '240px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesByBranchData} barSize={32}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dy={8} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} tickFormatter={v => `$${(v / 1000000).toFixed(1)}M`} />
                                <Tooltip formatter={(v: any) => [formatCLP(v), 'Ventas']} contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                                <Bar dataKey="ventas" fill="url(#barGrad)" radius={[6, 6, 0, 0]}>
                                    <defs>
                                        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#1e40af" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Citas Semanales</h3>
                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.125rem' }}>Volumen de atenciones</p>
                    </div>
                    <div style={{ height: '240px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={weeklyAppointmentsData}>
                                <defs>
                                    <linearGradient id="citasGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dy={8} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} />
                                <Tooltip contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                                <Area type="monotone" dataKey="citas" stroke="#10b981" strokeWidth={2.5} fill="url(#citasGrad)" dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} activeDot={{ r: 6 }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Orders & Tracking */}
            <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
                <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '0.625rem', backgroundColor: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Package size={18} color="#7c3aed" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Seguimiento de Pedidos</h3>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Actualización en tiempo real · {orders.length} órdenes</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {webOrderCount > 0 && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', backgroundColor: '#ede9fe', padding: '0.375rem 0.875rem', borderRadius: '9999px' }}>
                                <Globe size={13} color="#7c3aed" />
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c3aed' }}>{webOrderCount} pedido(s) web</span>
                            </div>
                        )}
                        <button
                            onClick={() => setWebOnly(!webOnly)}
                            style={{
                                padding: '0.4rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem',
                                backgroundColor: webOnly ? '#0f172a' : 'white', color: webOnly ? 'white' : '#475569',
                                fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s'
                            }}>
                            {webOnly ? 'Ver Todos' : 'Solo Web'}
                        </button>
                    </div>
                </div>

                <div>
                    {displayedOrders.length === 0 && (
                        <div style={{ padding: '3rem', textAlign: 'center', color: '#94a3b8' }}>
                            <Globe size={32} style={{ margin: '0 auto 0.75rem', opacity: 0.4 }} />
                            <p style={{ fontSize: '0.875rem' }}>No hay pedidos web aún. Simula una compra en la vitrina.</p>
                        </div>
                    )}
                    {displayedOrders.map((order, idx) => {
                        const cfg = statusConfig[order.status] ?? { bg: '#f8fafc', color: '#475569', dot: '#94a3b8' };
                        const isExpanded = expandedOrder === order.id;
                        return (
                            <div key={order.id} style={{ borderBottom: idx < displayedOrders.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                                <div
                                    style={{
                                        padding: '1rem 1.75rem', display: 'flex', alignItems: 'center',
                                        gap: '1rem', cursor: order.prescription ? 'pointer' : 'default',
                                        backgroundColor: order.isWebOrder ? 'rgba(124,58,237,0.03)' : 'transparent',
                                        transition: 'background-color 0.15s'
                                    }}
                                    onClick={() => order.prescription && setExpandedOrder(isExpanded ? null : order.id)}>

                                    {/* Status dot + badge */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', minWidth: '160px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cfg.dot, flexShrink: 0, boxShadow: `0 0 0 3px ${cfg.bg}` }} />
                                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: cfg.color, backgroundColor: cfg.bg, padding: '0.2rem 0.625rem', borderRadius: '9999px' }}>
                                            {order.status}
                                        </span>
                                    </div>

                                    {/* Order ID + Web badge */}
                                    <div style={{ minWidth: '140px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                                            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', fontFamily: 'monospace' }}>{order.id}</span>
                                            {order.isWebOrder && <Globe size={12} color="#7c3aed" />}
                                        </div>
                                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{order.date}</span>
                                    </div>

                                    {/* Patient */}
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#1e293b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.patient}</p>
                                        <p style={{ fontSize: '0.75rem', color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{order.product}</p>
                                    </div>

                                    {/* Branch */}
                                    <div style={{ minWidth: '140px', textAlign: 'right' }}>
                                        <p style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>{order.branch}</p>
                                        {order.total && <p style={{ fontSize: '0.75rem', color: '#1e40af', fontWeight: 700 }}>{formatCLP(order.total)}</p>}
                                    </div>

                                    {/* Expand icon */}
                                    {order.prescription && (
                                        <div style={{ color: '#94a3b8' }}>
                                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </div>
                                    )}
                                </div>

                                {/* Expanded Prescription */}
                                {isExpanded && order.prescription && (
                                    <div style={{ padding: '0 1.75rem 1.25rem 3.5rem', animation: 'fadeIn 0.2s ease' }}>
                                        <div style={{ background: 'linear-gradient(135deg,#eff6ff,#f0fdf4)', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid #e2e8f0' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                                                <Eye size={16} color="#1e40af" />
                                                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a' }}>Receta Óptica</span>
                                                {order.email && <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#64748b' }}>📧 {order.email}</span>}
                                                {order.phone && <span style={{ fontSize: '0.75rem', color: '#64748b' }}>📞 {order.phone}</span>}
                                            </div>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '0.875rem', border: '1px solid #bfdbfe' }}>
                                                    <p style={{ fontWeight: 700, color: '#1e40af', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>OD · Ojo Derecho</p>
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem', fontSize: '0.8rem' }}>
                                                        <span style={{ color: '#64748b' }}>Esfera:</span><strong>{order.prescription.odSphere || '—'}</strong>
                                                        <span style={{ color: '#64748b' }}>Cilindro:</span><strong>{order.prescription.odCylinder || '—'}</strong>
                                                        <span style={{ color: '#64748b' }}>Eje:</span><strong>{order.prescription.odAxis || '—'}</strong>
                                                        <span style={{ color: '#64748b' }}>Adición:</span><strong>{order.prescription.odAddition || '—'}</strong>
                                                    </div>
                                                </div>
                                                <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '0.875rem', border: '1px solid #a7f3d0' }}>
                                                    <p style={{ fontWeight: 700, color: '#059669', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>OI · Ojo Izquierdo</p>
                                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem', fontSize: '0.8rem' }}>
                                                        <span style={{ color: '#64748b' }}>Esfera:</span><strong>{order.prescription.oiSphere || '—'}</strong>
                                                        <span style={{ color: '#64748b' }}>Cilindro:</span><strong>{order.prescription.oiCylinder || '—'}</strong>
                                                        <span style={{ color: '#64748b' }}>Eje:</span><strong>{order.prescription.oiAxis || '—'}</strong>
                                                        <span style={{ color: '#64748b' }}>Adición:</span><strong>{order.prescription.oiAddition || '—'}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                            {order.prescription.dp && (
                                                <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#475569' }}>
                                                    <strong>Distancia Pupilar (DP):</strong> {order.prescription.dp}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Low Stock Alerts */}
            <div style={{ background: 'white', border: '1px solid #fee2e2', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 20px rgba(239,68,68,0.06)' }}>
                <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid #fee2e2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '0.625rem', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <AlertTriangle size={18} color="#dc2626" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Alertas de Stock Bajo</h3>
                            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Productos que requieren reabastecimiento</p>
                        </div>
                    </div>
                    <span style={{ backgroundColor: '#fee2e2', color: '#dc2626', fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
                        {lowStockAlerts.length} alertas
                    </span>
                </div>

                <div>
                    {lowStockAlerts.map((alert, idx) => (
                        <div key={alert.id} style={{
                            padding: '1rem 1.75rem', borderBottom: idx < lowStockAlerts.length - 1 ? '1px solid #fef2f2' : 'none',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                            backgroundColor: alert.status === 'critical' ? 'rgba(239,68,68,0.02)' : 'transparent'
                        }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: '#1e293b', marginBottom: '0.25rem' }}>{alert.product}</p>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem' }}>
                                    <span style={{ color: '#94a3b8' }}>Sucursal: <span style={{ color: '#475569', fontWeight: 500 }}>{alert.branch}</span></span>
                                    <span style={{ color: '#94a3b8' }}>Stock: <span style={{ color: alert.stock <= 2 ? '#dc2626' : '#d97706', fontWeight: 700 }}>{alert.stock} uds.</span></span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <span style={{
                                    fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.625rem', borderRadius: '9999px',
                                    backgroundColor: alert.status === 'critical' ? '#fee2e2' : '#fef3c7',
                                    color: alert.status === 'critical' ? '#dc2626' : '#d97706',
                                    textTransform: 'uppercase', letterSpacing: '0.05em'
                                }}>
                                    {alert.status === 'critical' ? '🔴 Crítico' : '🟡 Advertencia'}
                                </span>
                                <button style={{
                                    padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none',
                                    backgroundColor: alert.status === 'critical' ? '#dc2626' : '#0f172a',
                                    color: 'white', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
                                    transition: 'opacity 0.2s'
                                }}>
                                    Reponer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
