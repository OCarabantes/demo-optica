// KPI Data
export const kpiData = {
    averageTicket: 125500, // CLP
    newPatients: 42,
    totalSales: 15420000, // CLP
    growthTicket: '+5.2%',
    growthPatients: '+12%',
    growthSales: '+8.4%'
};

// Sales by Branch (Bar Chart)
export const salesByBranchData = [
    { name: 'Temuco Centro', ventas: 8500000 },
    { name: 'Portal Temuco', ventas: 4200000 },
    { name: 'Padre Las Casas', ventas: 2720000 },
];

// Weekly Appointments (Line Chart)
export const weeklyAppointmentsData = [
    { day: 'Lun', citas: 15 },
    { day: 'Mar', citas: 22 },
    { day: 'Mié', citas: 18 },
    { day: 'Jue', citas: 25 },
    { day: 'Vie', citas: 30 },
    { day: 'Sáb', citas: 45 },
    { day: 'Dom', citas: 12 },
];

// Low Stock Alerts
export const lowStockAlerts = [
    { id: 1, product: 'Cristal Monofocal Orgánico (SPH -2.00)', branch: 'Temuco Centro', stock: 2, status: 'critical' },
    { id: 2, product: 'Armazón Ray-Ban RX5154', branch: 'Padre Las Casas', stock: 1, status: 'critical' },
    { id: 3, product: 'Líquido de lentillas Opti-Free 300ml', branch: 'Portal Temuco', stock: 5, status: 'warning' },
    { id: 4, product: 'Cristal Progresivo Premium', branch: 'Temuco Centro', stock: 4, status: 'warning' },
];

// POS Products Catalog
export const catalogProducts = [
    { id: 101, name: 'Armazón Aviador Classic', brand: 'Ray-Ban', material: 'Metal', price: 150000, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=200&h=100' },
    { id: 102, name: 'Armazón Wayfarer Acetato', brand: 'Oakley', material: 'Acetato', price: 130000, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=200&h=100' },
    { id: 103, name: 'Montura Redonda Vintage', brand: 'Vogue', material: 'Mixto', price: 95000, image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=200&h=100' },
    { id: 104, name: 'Armazón Deportivo Ligero', brand: 'Nike', material: 'Titanio', price: 180000, image: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&q=80&w=200&h=100' },
    { id: 105, name: 'Montura Ojo de Gato', brand: 'Gucci', material: 'Acetato', price: 250000, image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=200&h=100' },
    { id: 106, name: 'Armazón Rectangular Basic', brand: 'Generic', material: 'Plástico', price: 45000, image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&q=80&w=200&h=100' },
];

// Inventory Tracking Data (Let variable mutate)
export let trackingData = [
    { id: 'ORD-8492', patient: 'María González', product: 'Progresivos Premium + Armazón Vogue', branch: 'Temuco Centro', status: 'En Laboratorio', date: '2023-10-24' },
    { id: 'ORD-8493', patient: 'Carlos Mendoza', product: 'Monofocal Orgánico + Ray-Ban', branch: 'Portal Temuco', status: 'Control de Calidad', date: '2023-10-22' },
    { id: 'ORD-8490', patient: 'Lucía Fernández', product: 'Lentes de Contacto Toricos', branch: 'Padre Las Casas', status: 'En Tienda', date: '2023-10-20' },
    { id: 'ORD-8485', patient: 'Roberto Silva', product: 'Bifocales Standard', branch: 'Temuco Centro', status: 'Entregado', date: '2023-10-18' },
];

export const addSimulatedOrder = (order: any) => {
    trackingData = [order, ...trackingData];
};
