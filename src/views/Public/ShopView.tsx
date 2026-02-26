import { useState } from 'react';
import { catalogProducts, addSimulatedOrder } from '../../data/mockData';
import type { OpticalPrescription } from '../../data/mockData';
import { X, ChevronRight, ChevronLeft, CheckCircle, Eye, User, ShoppingBag } from 'lucide-react';

const formatCLP = (value: number) =>
    '$' + value.toLocaleString('es-CL');

const BRANCHES = ['Temuco Centro', 'Portal Temuco', 'Padre Las Casas'];

interface PatientData {
    name: string;
    rut: string;
    email: string;
    phone: string;
    branch: string;
}

const emptyPatient: PatientData = { name: '', rut: '', email: '', phone: '', branch: BRANCHES[0] };
const emptyRx: OpticalPrescription = {
    odSphere: '', odCylinder: '', odAxis: '', odAddition: '',
    oiSphere: '', oiCylinder: '', oiAxis: '', oiAddition: '',
    dp: '',
};

const CATEGORIES = ['Todos', 'Hombre', 'Mujer', 'Unisex', 'Deportivo'];

export const ShopView = () => {
    const [selectedProduct, setSelectedProduct] = useState<typeof catalogProducts[0] | null>(null);
    const [step, setStep] = useState(1); // 1: patient, 2: Rx, 3: confirm
    const [patient, setPatient] = useState<PatientData>(emptyPatient);
    const [rx, setRx] = useState<OpticalPrescription>(emptyRx);
    const [orderSuccess, setOrderSuccess] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filtered = activeCategory === 'Todos'
        ? catalogProducts
        : catalogProducts.filter(p => p.category === activeCategory);

    const openModal = (product: typeof catalogProducts[0]) => {
        setSelectedProduct(product);
        setStep(1);
        setPatient(emptyPatient);
        setRx(emptyRx);
    };

    const closeModal = () => setSelectedProduct(null);

    const handleConfirm = () => {
        if (!selectedProduct) return;
        const orderId = `WEB-${Math.floor(Math.random() * 90000) + 10000}`;
        addSimulatedOrder({
            id: orderId,
            patient: patient.name || 'Cliente Web (Demo)',
            email: patient.email,
            phone: patient.phone,
            product: `${selectedProduct.name} - ${selectedProduct.brand} + Cristal según Receta`,
            branch: patient.branch,
            status: 'Receta Recibida',
            date: new Date().toISOString().split('T')[0],
            prescription: rx,
            isWebOrder: true,
            total: selectedProduct.price,
        });
        closeModal();
        setOrderSuccess(`¡Pedido ${orderId} confirmado! Puedes verlo en el Dashboard de Gestión.`);
        setTimeout(() => setOrderSuccess(null), 5000);
    };

    const patientValid = patient.name.trim().length > 2 && patient.email.includes('@');

    return (
        <div className="flex-1 flex flex-col items-center w-full px-4 sm:px-8 py-8">

            {/* Toast */}
            {orderSuccess && (
                <div style={{
                    position: 'fixed', top: '5rem', left: '50%', transform: 'translateX(-50%)',
                    zIndex: 9999, background: 'linear-gradient(135deg,#0f172a,#1e3a5f)',
                    color: 'white', padding: '1rem 2rem', borderRadius: '0.75rem',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)', maxWidth: '520px', width: '90%',
                    display: 'flex', alignItems: 'center', gap: '0.75rem', animation: 'fadeIn 0.3s ease'
                }}>
                    <CheckCircle size={24} color="#10b981" />
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>{orderSuccess}</p>
                </div>
            )}

            {/* Modal Overlay */}
            {selectedProduct && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 1000,
                    backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
                }} onClick={closeModal}>
                    <div style={{
                        background: 'white', borderRadius: '1.25rem', width: '100%', maxWidth: '640px',
                        maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 25px 80px rgba(0,0,0,0.3)',
                        animation: 'fadeIn 0.25s ease'
                    }} onClick={e => e.stopPropagation()}>

                        {/* Modal Header */}
                        <div style={{
                            padding: '1.5rem 2rem', borderBottom: '1px solid #e2e8f0',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 100%)', borderRadius: '1.25rem 1.25rem 0 0'
                        }}>
                            <div>
                                <p style={{ color: '#93c5fd', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Configurar Lente Óptico</p>
                                <h2 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>{selectedProduct.name} — {selectedProduct.brand}</h2>
                            </div>
                            <button onClick={closeModal} style={{ color: 'white', opacity: 0.7, background: 'none', border: 'none', cursor: 'pointer' }}>
                                <X size={22} />
                            </button>
                        </div>

                        {/* Step Indicator */}
                        <div style={{ padding: '1.25rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                            {[
                                { n: 1, label: 'Datos', icon: <User size={14} /> },
                                { n: 2, label: 'Receta', icon: <Eye size={14} /> },
                                { n: 3, label: 'Confirmar', icon: <ShoppingBag size={14} /> },
                            ].map((s, i) => (
                                <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <div style={{
                                        width: '32px', height: '32px', borderRadius: '50%', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700,
                                        backgroundColor: step >= s.n ? '#1e40af' : '#e2e8f0',
                                        color: step >= s.n ? 'white' : '#94a3b8',
                                        transition: 'all 0.3s'
                                    }}>
                                        {step > s.n ? <CheckCircle size={16} /> : s.icon}
                                    </div>
                                    <span style={{ fontSize: '0.8rem', fontWeight: step === s.n ? 700 : 400, color: step === s.n ? '#1e40af' : '#64748b' }}>{s.label}</span>
                                    {i < 2 && <div style={{ width: '24px', height: '1px', backgroundColor: step > s.n ? '#1e40af' : '#e2e8f0' }} />}
                                </div>
                            ))}
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '2rem' }}>

                            {/* STEP 1: Patient Data */}
                            {step === 1 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                        <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                                        <div>
                                            <p style={{ fontWeight: 700, color: '#0f172a' }}>{selectedProduct.name}</p>
                                            <p style={{ color: '#64748b', fontSize: '0.85rem' }}>{selectedProduct.brand} · {selectedProduct.material}</p>
                                            <p style={{ color: '#1e40af', fontWeight: 700, marginTop: '0.25rem' }}>{formatCLP(selectedProduct.price)}</p>
                                        </div>
                                    </div>
                                    <hr style={{ borderColor: '#e2e8f0' }} />
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>Información del Paciente</h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>Nombre completo *</label>
                                            <input value={patient.name} onChange={e => setPatient({ ...patient, name: e.target.value })}
                                                placeholder="Ej: Ana García López"
                                                style={{ padding: '0.625rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>RUT</label>
                                            <input value={patient.rut} onChange={e => setPatient({ ...patient, rut: e.target.value })}
                                                placeholder="12.345.678-9"
                                                style={{ padding: '0.625rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>Email *</label>
                                            <input value={patient.email} onChange={e => setPatient({ ...patient, email: e.target.value })}
                                                placeholder="ana@correo.cl"
                                                style={{ padding: '0.625rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                            <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>Teléfono</label>
                                            <input value={patient.phone} onChange={e => setPatient({ ...patient, phone: e.target.value })}
                                                placeholder="+56 9 1234 5678"
                                                style={{ padding: '0.625rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', width: '100%' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>Sucursal de retiro</label>
                                        <select value={patient.branch} onChange={e => setPatient({ ...patient, branch: e.target.value })}
                                            style={{ padding: '0.625rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', width: '100%', backgroundColor: 'white' }}>
                                            {BRANCHES.map(b => <option key={b}>{b}</option>)}
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: Optical Prescription */}
                            {step === 2 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '0.75rem', padding: '0.875rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <Eye size={18} color="#2563eb" style={{ marginTop: '1px', flexShrink: 0 }} />
                                        <p style={{ color: '#1d4ed8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                                            Ingresa los datos de tu receta óptica. Puedes encontrarlos en el comprobante entregado por tu oftalmólogo u optómetra. Si no tienes receta, también puedes <strong>agendar un examen de vista</strong> en nuestra tienda.
                                        </p>
                                    </div>

                                    {/* OD */}
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#1e40af', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>OD</div>
                                            <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>Ojo Derecho (OD)</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                                            {(['odSphere', 'odCylinder', 'odAxis', 'odAddition'] as const).map((k, i) => (
                                                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                                    <label style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                                        {['Esfera', 'Cilindro', 'Eje', 'Adición'][i]}
                                                    </label>
                                                    <input
                                                        value={rx[k]} onChange={e => setRx({ ...rx, [k]: e.target.value })}
                                                        placeholder={['-2.00', '-0.75', '90', '+1.00'][i]}
                                                        style={{ padding: '0.5rem 0.625rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', textAlign: 'center' }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* OI */}
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#0891b2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>OI</div>
                                            <span style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>Ojo Izquierdo (OI)</span>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                                            {(['oiSphere', 'oiCylinder', 'oiAxis', 'oiAddition'] as const).map((k, i) => (
                                                <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                                    <label style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>
                                                        {['Esfera', 'Cilindro', 'Eje', 'Adición'][i]}
                                                    </label>
                                                    <input
                                                        value={rx[k]} onChange={e => setRx({ ...rx, [k]: e.target.value })}
                                                        placeholder={['-1.75', '-0.50', '85', '+1.00'][i]}
                                                        style={{ padding: '0.5rem 0.625rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', textAlign: 'center' }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* DP */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', maxWidth: '160px' }}>
                                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569' }}>Distancia Pupilar (DP)</label>
                                        <input value={rx.dp} onChange={e => setRx({ ...rx, dp: e.target.value })}
                                            placeholder="63 mm"
                                            style={{ padding: '0.625rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.5rem', fontSize: '0.875rem', outline: 'none', textAlign: 'center' }} />
                                    </div>
                                </div>
                            )}

                            {/* STEP 3: Confirmation */}
                            {step === 3 && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                                        <CheckCircle size={48} color="#10b981" style={{ margin: '0 auto 0.75rem' }} />
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>¡Casi listo!</h3>
                                        <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Revisa el resumen de tu pedido antes de confirmar.</p>
                                    </div>
                                    <div style={{ backgroundColor: '#f8fafc', borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '80px', height: '55px', objectFit: 'cover', borderRadius: '0.5rem' }} />
                                            <div>
                                                <p style={{ fontWeight: 700 }}>{selectedProduct.name}</p>
                                                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>{selectedProduct.brand} · {selectedProduct.material}</p>
                                                <p style={{ color: '#1e40af', fontWeight: 700 }}>{formatCLP(selectedProduct.price)}</p>
                                            </div>
                                        </div>
                                        <hr style={{ borderColor: '#e2e8f0' }} />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.82rem' }}>
                                            <div><span style={{ color: '#94a3b8' }}>Paciente:</span><br /><strong>{patient.name || '—'}</strong></div>
                                            <div><span style={{ color: '#94a3b8' }}>Sucursal:</span><br /><strong>{patient.branch}</strong></div>
                                            <div><span style={{ color: '#94a3b8' }}>Email:</span><br /><strong>{patient.email || '—'}</strong></div>
                                            <div><span style={{ color: '#94a3b8' }}>Teléfono:</span><br /><strong>{patient.phone || '—'}</strong></div>
                                        </div>
                                        <hr style={{ borderColor: '#e2e8f0' }} />
                                        <div style={{ fontSize: '0.82rem' }}>
                                            <span style={{ color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Receta Óptica</span>
                                            <div style={{ marginTop: '0.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '0.625rem' }}>
                                                    <p style={{ fontWeight: 700, color: '#1e40af', fontSize: '0.75rem', marginBottom: '0.25rem' }}>OD (Derecho)</p>
                                                    <p>Esf: <strong>{rx.odSphere || '—'}</strong> | Cil: <strong>{rx.odCylinder || '—'}</strong></p>
                                                    <p>Eje: <strong>{rx.odAxis || '—'}</strong> | Add: <strong>{rx.odAddition || '—'}</strong></p>
                                                </div>
                                                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '0.625rem' }}>
                                                    <p style={{ fontWeight: 700, color: '#0891b2', fontSize: '0.75rem', marginBottom: '0.25rem' }}>OI (Izquierdo)</p>
                                                    <p>Esf: <strong>{rx.oiSphere || '—'}</strong> | Cil: <strong>{rx.oiCylinder || '—'}</strong></p>
                                                    <p>Eje: <strong>{rx.oiAxis || '—'}</strong> | Add: <strong>{rx.oiAddition || '—'}</strong></p>
                                                </div>
                                            </div>
                                            {rx.dp && <p style={{ marginTop: '0.5rem' }}>Dist. Pupilar: <strong>{rx.dp}</strong></p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div style={{ padding: '1.25rem 2rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {step > 1 ? (
                                <button onClick={() => setStep(s => s - 1)} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: '#64748b', fontSize: '0.875rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}>
                                    <ChevronLeft size={16} /> Atrás
                                </button>
                            ) : <div />}

                            {step < 3 ? (
                                <button
                                    onClick={() => setStep(s => s + 1)}
                                    disabled={step === 1 && !patientValid}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        background: step === 1 && !patientValid ? '#e2e8f0' : 'linear-gradient(135deg,#1e40af,#0891b2)',
                                        color: step === 1 && !patientValid ? '#94a3b8' : 'white',
                                        padding: '0.7rem 1.5rem', borderRadius: '0.625rem', border: 'none',
                                        fontWeight: 700, fontSize: '0.875rem', cursor: step === 1 && !patientValid ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.2s'
                                    }}>
                                    Continuar <ChevronRight size={16} />
                                </button>
                            ) : (
                                <button onClick={handleConfirm} style={{
                                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'linear-gradient(135deg,#059669,#10b981)',
                                    color: 'white', padding: '0.7rem 1.75rem', borderRadius: '0.625rem',
                                    border: 'none', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer'
                                }}>
                                    <CheckCircle size={16} /> Confirmar Pedido
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1 gap-12">

                {/* Hero Banner */}
                <div className="w-full relative flex items-center overflow-hidden" style={{ minHeight: '420px' }}>
                    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                        <img src="https://images.unsplash.com/photo-1588612140417-64047a057279?auto=format&fit=crop&q=80&w=1400" alt="Hero Eyewear" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    </div>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)', zIndex: 1 }} />
                    <div style={{ position: 'relative', zIndex: 2, padding: '3rem 4rem', maxWidth: '600px' }}>
                        <p style={{ color: '#93c5fd', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Nueva Colección 2026</p>
                        <h1 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', marginBottom: '1rem' }}>DISEÑO<br />QUE DEFINE</h1>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Elige tu armazón y configura tus lentes con receta en línea.
                        </p>
                        <button style={{ background: 'white', color: '#0f172a', padding: '0.875rem 2rem', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', border: 'none', cursor: 'pointer' }}>
                            Ver Colección
                        </button>
                    </div>
                </div>

                {/* Category Filters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                            {CATEGORIES.map(cat => (
                                <button key={cat} onClick={() => setActiveCategory(cat)}
                                    style={{
                                        padding: '0.4rem 1rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                                        border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                                        backgroundColor: activeCategory === cat ? '#0f172a' : 'transparent',
                                        color: activeCategory === cat ? 'white' : '#64748b',
                                        borderRadius: '0.375rem'
                                    }}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500 }}>{filtered.length} productos</span>
                    </div>
                </div>

                {/* Product Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2.5rem', paddingBottom: '3rem' }}>
                    {filtered.map((product, idx) => (
                        <div key={product.id} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', cursor: 'pointer' }}
                            className="group">

                            {/* Badge */}
                            {idx === 0 && <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 10, background: '#0f172a', color: 'white', padding: '0.2rem 0.625rem', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Top Ventas</div>}
                            {idx === 4 && <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 10, background: '#dc2626', color: 'white', padding: '0.2rem 0.625rem', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nuevo</div>}
                            {product.price >= 250000 && <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 10, background: '#7c3aed', color: 'white', padding: '0.2rem 0.625rem', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Premium</div>}

                            {/* Image Card */}
                            <div style={{
                                position: 'relative', width: '100%', aspectRatio: '4/3', backgroundColor: '#f8fafc',
                                overflow: 'hidden', borderRadius: '0.5rem', border: '1px solid #e2e8f0'
                            }}>
                                <img
                                    src={product.image} alt={product.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
                                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                                {/* Hover CTA */}
                                <div style={{
                                    position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                                    display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '1.25rem',
                                    opacity: 0, transition: 'opacity 0.3s'
                                }}
                                    onMouseOver={e => { e.currentTarget.style.opacity = '1'; }}
                                    onMouseOut={e => { e.currentTarget.style.opacity = '0'; }}>
                                    <button
                                        onClick={() => openModal(product)}
                                        style={{
                                            width: '100%', background: 'white', color: '#0f172a', border: 'none',
                                            padding: '0.7rem', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase',
                                            letterSpacing: '0.1em', cursor: 'pointer', transition: 'background 0.2s'
                                        }}>
                                        Comprar con Receta
                                    </button>
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.25rem' }}>
                                <p style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{product.brand}</p>
                                <h3 style={{ color: '#0f172a', fontSize: '0.95rem', fontWeight: 700 }}>{product.name}</h3>
                                <p style={{ color: '#0f172a', fontSize: '0.9rem', fontWeight: 600 }}>{formatCLP(product.price)}</p>
                            </div>

                            {/* Color Swatches */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.375rem' }}>
                                {product.colors.map((c, ci) => (
                                    <div key={ci} title={c} style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: c, border: '2px solid #e2e8f0', cursor: 'pointer' }} />
                                ))}
                            </div>

                            {/* Quick Buy Button */}
                            <button
                                onClick={() => openModal(product)}
                                style={{
                                    width: '100%', padding: '0.6rem', border: '1.5px solid #0f172a', backgroundColor: 'transparent',
                                    color: '#0f172a', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase',
                                    letterSpacing: '0.08em', cursor: 'pointer', transition: 'all 0.2s',
                                    borderRadius: '0.25rem'
                                }}
                                onMouseOver={e => { e.currentTarget.style.backgroundColor = '#0f172a'; e.currentTarget.style.color = 'white'; }}
                                onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0f172a'; }}>
                                Configurar Lente
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div style={{ width: '100%', background: '#0f172a', color: 'white', display: 'flex', flexDirection: 'row', marginBottom: '3rem', overflow: 'hidden', borderRadius: '0.5rem' }}>
                    <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <p style={{ color: '#93c5fd', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Cuida tu visión</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1 }}>AGENDA TU EXAMEN VISUAL</h2>
                        <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Reserva con nuestros especialistas y obtén tu receta en el día.</p>
                        <button style={{ width: 'fit-content', background: 'white', color: '#0f172a', padding: '0.875rem 2rem', border: 'none', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                            Agendar Hora
                        </button>
                    </div>
                    <div style={{ width: '45%', minHeight: '240px', backgroundImage: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
            </div>
        </div>
    );
};
