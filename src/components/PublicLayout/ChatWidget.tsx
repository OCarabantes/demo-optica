import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    return (
        <>
            {/* Botón Flotante */}
            <button
                className="chat-widget-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Abrir chat de soporte"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Ventana de Chat */}
            {isOpen && (
                <div className="chat-widget-popup">
                    <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-public-primary)', color: 'white' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.25rem' }}>Especialista Óptico</h3>
                        <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>En línea • Tiempo de resp. usual: &lt; 5 min</p>
                    </div>

                    <div style={{ height: '300px', backgroundColor: 'var(--color-public-bg-alt)', padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ alignSelf: 'center', backgroundColor: '#e2e8f0', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', color: '#64748b', marginTop: '0.5rem' }}>
                            Hoy
                        </div>

                        <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '85%' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--color-public-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '0.8rem', fontWeight: 'bold' }}>
                                OP
                            </div>
                            <div style={{ backgroundColor: 'white', padding: '0.8rem 1rem', borderRadius: '0.75rem', borderTopLeftRadius: 0, boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-public-text)', lineHeight: 1.4 }}>
                                    Hola, ¿tienes dudas con tu receta clínica o buscas un estilo de lente en particular? Habla con uno de nuestros especialistas.
                                </p>
                                <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block', marginTop: '0.25rem', textAlign: 'right' }}>Ahora</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ padding: '1rem', borderTop: '1px solid var(--color-public-border)', backgroundColor: 'white', display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '99px', border: '1px solid var(--color-public-border)', outline: 'none', fontSize: '0.9rem' }}
                        />
                        <button
                            style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: message ? 'var(--color-public-primary)' : '#e2e8f0', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: message ? 'pointer' : 'default', transition: 'background-color 0.2s ease' }}
                        >
                            <Send size={18} style={{ position: 'relative', left: '-1px' }} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
