// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
export interface OpticalPrescription {
    odSphere: string;
    odCylinder: string;
    odAxis: string;
    odAddition: string;
    oiSphere: string;
    oiCylinder: string;
    oiAxis: string;
    oiAddition: string;
    dp: string;
}

export interface TrackingOrder {
    id: string;
    patient: string;
    email?: string;
    phone?: string;
    product: string;
    branch: string;
    status: string;
    date: string;
    prescription?: OpticalPrescription;
    isWebOrder?: boolean;
    total?: number;
}

// ─────────────────────────────────────────────
// KPI Data
// ─────────────────────────────────────────────
export const kpiData = {
    averageTicket: 125500,
    newPatients: 42,
    totalSales: 15420000,
    pendingOrders: 7,
    growthTicket: '+5.2%',
    growthPatients: '+12%',
    growthSales: '+8.4%',
};

// ─────────────────────────────────────────────
// Sales by Branch (Bar Chart)
// ─────────────────────────────────────────────
export const salesByBranchData = [
    { name: 'Temuco Centro', ventas: 8500000 },
    { name: 'Portal Temuco', ventas: 4200000 },
    { name: 'Padre Las Casas', ventas: 2720000 },
];

// ─────────────────────────────────────────────
// Weekly Appointments (Line Chart)
// ─────────────────────────────────────────────
export const weeklyAppointmentsData = [
    { day: 'Lun', citas: 15 },
    { day: 'Mar', citas: 22 },
    { day: 'Mié', citas: 18 },
    { day: 'Jue', citas: 25 },
    { day: 'Vie', citas: 30 },
    { day: 'Sáb', citas: 45 },
    { day: 'Dom', citas: 12 },
];

// ─────────────────────────────────────────────
// Low Stock Alerts
// ─────────────────────────────────────────────
export const lowStockAlerts = [
    { id: 1, product: 'Cristal Monofocal Orgánico (SPH -2.00)', branch: 'Temuco Centro', stock: 2, status: 'critical' },
    { id: 2, product: 'Armazón Ray-Ban RX5154', branch: 'Padre Las Casas', stock: 1, status: 'critical' },
    { id: 3, product: 'Líquido de lentillas Opti-Free 300ml', branch: 'Portal Temuco', stock: 5, status: 'warning' },
    { id: 4, product: 'Cristal Progresivo Premium', branch: 'Temuco Centro', stock: 4, status: 'warning' },
];

// ─────────────────────────────────────────────
// POS Products Catalog (12 products with real images)
// ─────────────────────────────────────────────
export const catalogProducts = [
    {
        id: 101,
        name: 'Aviador Classic',
        brand: 'Ray-Ban',
        material: 'Metal',
        price: 150000,
        category: 'Hombre',
        colors: ['#c0a070', '#1a1a1a', '#888'],
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 102,
        name: 'Wayfarer Acetato',
        brand: 'Oakley',
        material: 'Acetato',
        price: 130000,
        category: 'Unisex',
        colors: ['#1a1a1a', '#b45309'],
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 103,
        name: 'Redonda Vintage',
        brand: 'Vogue',
        material: 'Mixto',
        price: 95000,
        category: 'Mujer',
        colors: ['#c0a070', '#1a1a1a'],
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 104,
        name: 'Sport Elite',
        brand: 'Nike',
        material: 'Titanio',
        price: 180000,
        category: 'Deportivo',
        colors: ['#1a1a1a', '#1d4ed8', '#dc2626'],
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 105,
        name: 'Ojo de Gato Premium',
        brand: 'Gucci',
        material: 'Acetato',
        price: 250000,
        category: 'Mujer',
        colors: ['#1a1a1a', '#7c3aed', '#b45309'],
        image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 106,
        name: 'Rectangular Slim',
        brand: 'Silhouette',
        material: 'Titanio',
        price: 220000,
        category: 'Hombre',
        colors: ['#888', '#c0a070'],
        image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 107,
        name: 'Hexagonal Urban',
        brand: 'Persol',
        material: 'Acetato',
        price: 195000,
        category: 'Unisex',
        colors: ['#1a1a1a', '#166534'],
        image: 'https://images.unsplash.com/photo-1565038999892-c5f58d9c1a12?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 108,
        name: 'Oversized Glamour',
        brand: 'Prada',
        material: 'Acetato',
        price: 310000,
        category: 'Mujer',
        colors: ['#1a1a1a', '#be185d'],
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 109,
        name: 'Wire Frame Minimalista',
        brand: 'Lindberg',
        material: 'Titanio',
        price: 280000,
        category: 'Unisex',
        colors: ['#c0a070', '#888'],
        image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 110,
        name: 'Piloto Clásico',
        brand: 'Carrera',
        material: 'Metal',
        price: 115000,
        category: 'Hombre',
        colors: ['#1a1a1a', '#c0a070'],
        image: 'https://images.unsplash.com/photo-1616508601234-df4e01dc9b68?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 111,
        name: 'Mariposa Elegante',
        brand: 'Versace',
        material: 'Acetato',
        price: 270000,
        category: 'Mujer',
        colors: ['#7c3aed', '#1a1a1a'],
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=600&h=400',
    },
    {
        id: 112,
        name: 'Trail Runner',
        brand: 'Julbo',
        material: 'TR-90',
        price: 140000,
        category: 'Deportivo',
        colors: ['#dc2626', '#1a1a1a', '#1d4ed8'],
        image: 'https://images.unsplash.com/photo-1515630278258-407f994a5d6e?auto=format&fit=crop&q=80&w=600&h=400',
    },
];

// ─────────────────────────────────────────────
// Tracking Data (mutable)
// ─────────────────────────────────────────────
export let trackingData: TrackingOrder[] = [
    { id: 'ORD-8492', patient: 'María González', product: 'Progresivos Premium + Armazón Vogue', branch: 'Temuco Centro', status: 'En Laboratorio', date: '2026-02-20' },
    { id: 'ORD-8493', patient: 'Carlos Mendoza', product: 'Monofocal Orgánico + Ray-Ban', branch: 'Portal Temuco', status: 'Control de Calidad', date: '2026-02-18' },
    { id: 'ORD-8490', patient: 'Lucía Fernández', product: 'Lentes de Contacto Tóricos', branch: 'Padre Las Casas', status: 'En Tienda', date: '2026-02-16' },
    { id: 'ORD-8485', patient: 'Roberto Silva', product: 'Bifocales Standard', branch: 'Temuco Centro', status: 'Entregado', date: '2026-02-14' },
];

export const addSimulatedOrder = (order: TrackingOrder) => {
    trackingData = [order, ...trackingData];
};

export const getTrackingData = (): TrackingOrder[] => trackingData;
