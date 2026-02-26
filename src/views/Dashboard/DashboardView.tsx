import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line
} from 'recharts';
import { TrendingUp, Users, DollarSign, AlertTriangle } from 'lucide-react';
import { kpiData, salesByBranchData, weeklyAppointmentsData, lowStockAlerts } from '../../data/mockData';

// Formatter help func
const formatCLP = (value: number) => {
    return '$' + value.toLocaleString('es-CL');
};

export const DashboardView: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <h1 className="text-2xl" style={{ marginBottom: '0.5rem' }}>Dashboard & KPIs</h1>
                <p className="text-muted text-sm">Resumen de actividad diaria de OptiVision</p>
            </div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                <div className="card p-6" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                        <p className="text-muted text-sm font-medium">Ventas Totales</p>
                        <h2 className="text-2xl" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                            {formatCLP(kpiData.totalSales)}
                        </h2>
                        <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', paddingLeft: '6px' }}>
                            <TrendingUp size={12} /> {kpiData.growthSales}
                        </span>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)', color: 'var(--color-primary)' }}>
                        <DollarSign size={24} />
                    </div>
                </div>

                <div className="card p-6" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                        <p className="text-muted text-sm font-medium">Pacientes Nuevos</p>
                        <h2 className="text-2xl" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                            {kpiData.newPatients}
                        </h2>
                        <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', paddingLeft: '6px' }}>
                            <TrendingUp size={12} /> {kpiData.growthPatients}
                        </span>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: 'var(--color-success-bg)', borderRadius: 'var(--radius-md)', color: 'var(--color-success)' }}>
                        <Users size={24} />
                    </div>
                </div>

                <div className="card p-6" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                        <p className="text-muted text-sm font-medium">Ticket Promedio</p>
                        <h2 className="text-2xl" style={{ marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                            {formatCLP(kpiData.averageTicket)}
                        </h2>
                        <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', paddingLeft: '6px' }}>
                            <TrendingUp size={12} /> {kpiData.growthTicket}
                        </span>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: 'var(--color-warning-bg)', borderRadius: 'var(--radius-md)', color: 'var(--color-warning)' }}>
                        <DollarSign size={24} />
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '1.5rem' }}>
                <div className="card p-6">
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Ventas por Sucursal</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salesByBranchData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} dx={-10} tickFormatter={(value) => formatCLP(value)} />
                                <Tooltip
                                    cursor={{ fill: 'var(--color-background)' }}
                                    formatter={(value: any) => [formatCLP(value), "Ventas"]}
                                    contentStyle={{ borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}
                                />
                                <Bar dataKey="ventas" fill="var(--color-primary)" radius={[4, 4, 0, 0]} maxBarSize={60} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card p-6">
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Volumen de Citas Semanales</h3>
                    <div style={{ height: '300px', width: '100%' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={weeklyAppointmentsData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} dx={-10} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}
                                />
                                <Line type="monotone" dataKey="citas" stroke="var(--color-success)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Critical Section: Low Stock Alerts */}
            <div className="card">
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-danger)' }}>
                            <AlertTriangle size={20} />
                            Panel de Alertas de Stock Bajo
                        </h3>
                        <p className="text-muted text-sm" style={{ marginTop: '0.25rem' }}>Productos que requieren reabastecimiento inmediato</p>
                    </div>
                </div>

                <div>
                    {lowStockAlerts.map(alert => (
                        <div key={alert.id} style={{
                            padding: '1rem 1.5rem',
                            borderBottom: '1px solid var(--color-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem'
                        }}>
                            <div>
                                <p className="font-medium" style={{ marginBottom: '0.25rem' }}>{alert.product}</p>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
                                    <span className="text-muted">Sucursal: <span style={{ color: 'var(--color-text)' }}>{alert.branch}</span></span>
                                    <span className="text-muted">Stock Actual: <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{alert.stock} uds</span></span>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span className={`badge ${alert.status === 'critical' ? 'badge-danger' : 'badge-warning'}`}>
                                    {alert.status === 'critical' ? 'Crítico (1-2)' : 'Advertencia (<5)'}
                                </span>
                                <button className={`btn ${alert.status === 'critical' ? 'btn-primary' : 'btn-outline'}`} style={{
                                    backgroundColor: alert.status === 'critical' ? 'var(--color-danger)' : undefined,
                                    color: alert.status === 'critical' ? 'white' : undefined,
                                    boxShadow: alert.status === 'critical' ? '0 1px 2px rgba(239, 68, 68, 0.5)' : undefined
                                }}>
                                    Solicitar Reposición
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
