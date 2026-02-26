import React from 'react';
import { Calendar, User, FileText, Activity, Save, Printer } from 'lucide-react';

export const ClinicalView: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1 className="text-2xl" style={{ marginBottom: '0.5rem' }}>Gestión Clínica</h1>
                    <p className="text-muted text-sm">Administración de pacientes, agenda y recetas</p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button className="btn btn-outline">
                        <Calendar size={18} /> Ver Agenda
                    </button>
                    <button className="btn btn-primary">
                        <User size={18} /> Nuevo Paciente
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 350px) 1fr', gap: '1.5rem' }}>

                {/* Patient Profile */}
                <div className="card" style={{ alignSelf: 'start' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', textAlign: 'center' }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary-light)',
                            color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '2rem', fontWeight: 'bold'
                        }}>
                            MG
                        </div>
                        <h2 className="text-lg">María González</h2>
                        <p className="text-muted text-sm" style={{ marginTop: '0.25rem' }}>ID: PAC-2023-8492</p>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                            <span className="badge" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>Paciente Frecuente</span>
                            <span className="badge badge-success">Isapre CruzBlanca</span>
                        </div>
                    </div>

                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <p className="text-muted text-sm" style={{ marginBottom: '0.25rem' }}>Edad / Sexo</p>
                            <p className="font-medium">45 años / Femenino</p>
                        </div>
                        <div>
                            <p className="text-muted text-sm" style={{ marginBottom: '0.25rem' }}>Contacto</p>
                            <p className="font-medium">+56 9 8765 4321</p>
                            <p className="font-medium">maria.gonzalez@email.com</p>
                        </div>
                        <div>
                            <p className="text-muted text-sm" style={{ marginBottom: '0.25rem' }}>Última Visita</p>
                            <p className="font-medium flex items-center gap-2"><Calendar size={14} className="text-muted" /> 15 Oct 2023</p>
                        </div>
                    </div>
                </div>

                {/* Prescription Form (UI Crítica) */}
                <div className="card">
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h3 style={{ fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)' }}>
                                <Activity size={20} />
                                Formulario de Receta Optométrica
                            </h3>
                        </div>
                        <span className="text-muted text-sm flex items-center gap-2"><FileText size={16} /> Folio: #8492</span>
                    </div>

                    <div style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>

                            {/* Ojo Derecho */}
                            <div style={{ border: '2px solid var(--color-primary-light)', borderRadius: 'var(--radius-md)', padding: '1.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-12px', left: '16px', backgroundColor: 'var(--color-surface)', padding: '0 8px', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    OJO DERECHO (OD)
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Esfera (SPH)</label>
                                        <input type="text" placeholder="-2.00" defaultValue="-2.00" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Cilindro (CYL)</label>
                                        <input type="text" placeholder="-0.75" defaultValue="-0.75" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>EJE (Axis)</label>
                                        <input type="text" placeholder="180°" defaultValue="180" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>ADD</label>
                                        <input type="text" placeholder="+1.50" defaultValue="" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Ojo Izquierdo */}
                            <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', top: '-12px', left: '16px', backgroundColor: 'var(--color-surface)', padding: '0 8px', color: 'var(--color-text-muted)', fontWeight: 'bold', fontSize: '0.875rem' }}>
                                    OJO IZQUIERDO (OS)
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: '0.5rem' }}>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Esfera (SPH)</label>
                                        <input type="text" placeholder="-2.25" defaultValue="-2.25" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Cilindro (CYL)</label>
                                        <input type="text" placeholder="-0.50" defaultValue="-0.50" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>EJE (Axis)</label>
                                        <input type="text" placeholder="175°" defaultValue="175" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                    <div>
                                        <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>ADD</label>
                                        <input type="text" placeholder="+1.50" defaultValue="" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Medidas Generales y Preferencias */}
                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1.5rem' }}>
                            <div>
                                <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Distancia Pupilar (DP)</label>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <input type="text" defaultValue="62" style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }} />
                                    <span className="text-muted">mm</span>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                    <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Tipo de Cristal</label>
                                    <select style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                                        <option value="monofocal">Monofocal</option>
                                        <option value="bifocal">Bifocal</option>
                                        <option value="progresivo">Progresivo (Multifocal)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Tratamiento/Filtro</label>
                                    <select style={{ width: '100%', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                                        <option value="antireflejo">Anti-Reflejo Básico</option>
                                        <option value="luz-azul" selected>Filtro Luz Azul (Blueblock)</option>
                                        <option value="fotocromatico">Fotocromático (Transitions)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <label className="text-muted text-sm font-medium" style={{ display: 'block', marginBottom: '0.5rem' }}>Diagnóstico / Observaciones Clínícas</label>
                            <textarea
                                rows={3}
                                defaultValue="Miopía leve con astigmatismo. Paciente reporta fatiga visual por uso prolongado de pantallas. Se recomienda filtro de luz azul."
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', resize: 'vertical' }}
                            />
                        </div>

                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                            <button className="btn btn-outline" style={{ color: 'var(--color-text-muted)' }}>
                                Limpiar Formulario
                            </button>
                            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Printer size={18} /> Imprimir Receta
                            </button>
                            <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Save size={18} /> Guardar Ficha
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
