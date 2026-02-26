import React, { useState } from 'react';
import { MapPin, Calendar, Clock, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export const BookingView: React.FC = () => {
    const [step, setStep] = useState(1);
    const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState<number | null>(null);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const branches = [
        { id: 1, name: 'Sede Central', address: 'Av. Providencia 1234, Santiago', distance: '1.2 km' },
        { id: 2, name: 'Sucursal Norte', address: 'Av. Américo Vespucio 567, Huechuraba', distance: '8.5 km' },
        { id: 3, name: 'Sucursal Sur', address: 'Gran Avenida 8910, San Miguel', distance: '12.4 km' }
    ];

    const specialties = [
        { id: 1, name: 'Examen Visual Integral', desc: 'Medición de agudeza visual, receta de lentes y despistaje básico.', time: '30 min', price: 'Gratis con compra' },
        { id: 2, name: 'Adaptación Lentes de Contacto', desc: 'Prueba y entrenamiento para uso de lentes de contacto blandos o tóricos.', time: '45 min', price: '$15.000' },
        { id: 3, name: 'Oftalmología Pediátrica', desc: 'Especialista en niños. Control de estrabismo y miopía infantil.', time: '40 min', price: '$25.000' }
    ];

    const dates = [
        { id: 1, day: 'Lun', num: '14', month: 'Nov' },
        { id: 2, day: 'Mar', num: '15', month: 'Nov' },
        { id: 3, day: 'Mié', num: '16', month: 'Nov' },
        { id: 4, day: 'Jue', num: '17', month: 'Nov' },
        { id: 5, day: 'Vie', num: '18', month: 'Nov' }
    ];

    const times = ['09:30', '10:00', '11:15', '12:30', '14:00', '15:45', '16:30'];

    return (
        <div style={{ padding: '3rem 0', backgroundColor: 'var(--color-public-bg-alt)', minHeight: 'calc(100vh - 80px)' }}>
            <div className="container-public" style={{ maxWidth: '900px' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-public-primary)', marginBottom: '0.5rem' }}>Reserva tu Hora</h1>
                    <p style={{ color: 'var(--color-public-text-light)', fontSize: '1.1rem' }}>Atención personalizada con nuestros expertos visuales.</p>
                </div>

                {/* Wizard Container */}
                <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>

                    {/* Progress Indicator */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '15px', left: '10%', right: '10%', height: '2px', backgroundColor: 'var(--color-public-border)', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '15px', left: '10%', width: step === 1 ? '0%' : step === 2 ? '40%' : step === 3 ? '80%' : '100%', height: '2px', backgroundColor: 'var(--color-public-accent)', zIndex: 1, transition: 'width 0.3s ease' }}></div>

                        {[
                            { num: 1, label: 'Sucursal' },
                            { num: 2, label: 'Especialidad' },
                            { num: 3, label: 'Fecha y Hora' },
                            { num: 4, label: 'Confirmación' }
                        ].map((s) => (
                            <div key={s.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 2, width: '100px' }}>
                                <div style={{
                                    width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem',
                                    backgroundColor: step >= s.num ? 'var(--color-public-accent)' : 'white',
                                    color: step >= s.num ? 'white' : 'var(--color-public-text-light)',
                                    border: `2px solid ${step >= s.num ? 'var(--color-public-accent)' : 'var(--color-public-border)'}`,
                                    transition: 'all 0.3s ease'
                                }}>
                                    {step > s.num ? <CheckCircle size={16} /> : s.num}
                                </div>
                                <span style={{ fontSize: '0.8rem', fontWeight: step >= s.num ? 600 : 400, color: step >= s.num ? 'var(--color-public-primary)' : 'var(--color-public-text-light)', textAlign: 'center' }}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* STEP 1: Sucursales */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Elige una sucursal</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                {branches.map(branch => (
                                    <div
                                        key={branch.id}
                                        onClick={() => setSelectedBranch(branch.id)}
                                        style={{
                                            padding: '1.5rem', borderRadius: '1rem', cursor: 'pointer', transition: 'all 0.2s ease',
                                            border: `2px solid ${selectedBranch === branch.id ? 'var(--color-public-accent)' : 'var(--color-public-border)'}`,
                                            backgroundColor: selectedBranch === branch.id ? 'var(--color-public-bg-alt)' : 'white'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                            <MapPin size={24} color={selectedBranch === branch.id ? 'var(--color-public-accent)' : 'var(--color-public-text-light)'} />
                                            <div>
                                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{branch.name}</h3>
                                                <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{branch.address}</p>
                                                <span style={{ fontSize: '0.8rem', backgroundColor: '#e2e8f0', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>A {branch.distance} de ti</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Especialidad */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>¿Qué tipo de atención necesitas?</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {specialties.map(spec => (
                                    <div
                                        key={spec.id}
                                        onClick={() => setSelectedSpecialty(spec.id)}
                                        style={{
                                            padding: '1.5rem', borderRadius: '1rem', cursor: 'pointer', transition: 'all 0.2s ease', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                            border: `2px solid ${selectedSpecialty === spec.id ? 'var(--color-public-accent)' : 'var(--color-public-border)'}`,
                                            backgroundColor: selectedSpecialty === spec.id ? 'var(--color-public-bg-alt)' : 'white'
                                        }}
                                    >
                                        <div>
                                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{spec.name}</h3>
                                            <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.9rem' }}>{spec.desc}</p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <p style={{ fontWeight: 600, color: 'var(--color-public-primary)', fontSize: '1.1rem' }}>{spec.price}</p>
                                            <p style={{ color: 'var(--color-public-text-light)', fontSize: '0.85rem' }}>Duración aprox: {spec.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Fecha y Hora */}
                    {step === 3 && (
                        <div className="animate-fade-in">
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Selecciona Fecha y Hora</h2>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-public-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Noviembre 2026</h3>
                                <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                    {dates.map(date => (
                                        <div
                                            key={date.id}
                                            onClick={() => setSelectedDate(date.id)}
                                            style={{
                                                minWidth: '80px', padding: '1rem', borderRadius: '1rem', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'center',
                                                border: `2px solid ${selectedDate === date.id ? 'var(--color-public-accent)' : 'var(--color-public-border)'}`,
                                                backgroundColor: selectedDate === date.id ? 'var(--color-public-accent)' : 'white',
                                                color: selectedDate === date.id ? 'white' : 'var(--color-public-primary)'
                                            }}
                                        >
                                            <p style={{ fontSize: '0.9rem', opacity: selectedDate === date.id ? 0.9 : 0.6 }}>{date.day}</p>
                                            <p style={{ fontSize: '1.8rem', fontWeight: 700, margin: '0.25rem 0' }}>{date.num}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {selectedDate && (
                                <div className="animate-fade-in">
                                    <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--color-public-text-light)', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Clock size={16} /> Horarios Disponibles
                                    </h3>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '0.75rem' }}>
                                        {times.map(time => (
                                            <div
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                style={{
                                                    padding: '0.75rem', borderRadius: '0.5rem', cursor: 'pointer', transition: 'all 0.2s ease', textAlign: 'center', fontWeight: 600,
                                                    border: `1px solid ${selectedTime === time ? 'var(--color-public-accent)' : 'var(--color-public-border)'}`,
                                                    backgroundColor: selectedTime === time ? 'var(--color-public-accent)' : 'white',
                                                    color: selectedTime === time ? 'white' : 'var(--color-public-primary)'
                                                }}
                                            >
                                                {time}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* STEP 4: Checkout/Confirm */}
                    {step === 4 && (
                        <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ccfbf1', color: 'var(--color-public-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                <CheckCircle size={40} />
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>¡Hora Agendada con Éxito!</h2>
                            <p style={{ color: 'var(--color-public-text-light)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Acabamos de enviar los detalles a tu correo. Te esperamos el día seleccionado 10 minutos antes de tu hora.</p>

                            <div style={{ backgroundColor: 'var(--color-public-bg-alt)', borderRadius: '1rem', padding: '1.5rem', maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-public-text-light)', marginBottom: '0.25rem' }}>Tu Cita</p>
                                <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Examen Visual Integral</p>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
                                    <Calendar size={18} color="var(--color-public-text-light)" />
                                    <span>Jueves 17 Noviembre, 11:15 AM</span>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <MapPin size={18} color="var(--color-public-text-light)" />
                                    <span>Sucursal Sede Central</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Actions */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-public-border)' }}>
                        {step > 1 && step < 4 ? (
                            <button className="public-btn-outline" onClick={() => setStep(step - 1)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <ChevronLeft size={18} /> Volver
                            </button>
                        ) : <div></div>}

                        {step === 1 && (
                            <button
                                className={selectedBranch ? "public-btn-accent" : "public-btn-outline"}
                                disabled={!selectedBranch}
                                onClick={() => setStep(2)}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: selectedBranch ? 1 : 0.5 }}
                            >
                                Continuar Especialidad <ChevronRight size={18} />
                            </button>
                        )}

                        {step === 2 && (
                            <button
                                className={selectedSpecialty ? "public-btn-accent" : "public-btn-outline"}
                                disabled={!selectedSpecialty}
                                onClick={() => setStep(3)}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: selectedSpecialty ? 1 : 0.5 }}
                            >
                                Elegir Fecha <ChevronRight size={18} />
                            </button>
                        )}

                        {step === 3 && (
                            <button
                                className={(selectedDate && selectedTime) ? "public-btn-accent" : "public-btn-outline"}
                                disabled={!(selectedDate && selectedTime)}
                                onClick={() => setStep(4)}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: (selectedDate && selectedTime) ? 1 : 0.5 }}
                            >
                                Confirmar Reserva <CheckCircle size={18} />
                            </button>
                        )}

                        {step === 4 && (
                            <button className="public-btn-accent" onClick={() => window.location.reload()}>
                                Volver al Inicio
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
