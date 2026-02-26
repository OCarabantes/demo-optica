import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Check, CheckCheck } from 'lucide-react';

export const CommunicationView: React.FC = () => {
    const [activeChat, setActiveChat] = useState(1);
    const [message, setMessage] = useState('');

    const chats = [
        { id: 1, name: 'María González', lastMessage: '¿Ya están listos mis lentes?', time: '10:42 AM', unread: 2, avatar: 'MG' },
        { id: 2, name: 'Carlos Mendoza', lastMessage: 'Gracias, pasaré mañana por la tarde.', time: 'Ayer', unread: 0, avatar: 'CM' },
        { id: 3, name: 'Soporte Proveedor', lastMessage: 'El pedido #8490 fue despachado.', time: 'Ayer', unread: 0, avatar: 'SP' },
        { id: 4, name: 'Lucía Fernández', lastMessage: 'Necesito reagendar mi cita', time: 'Lun', unread: 0, avatar: 'LF' },
    ];

    const messages = [
        { id: 1, sender: 'them', text: 'Hola, buenas tardes.', time: '10:30 AM' },
        { id: 2, sender: 'them', text: 'Quería consultar sobre el estado de mi pedido de lentes progresivos que encargué la semana pasada.', time: '10:31 AM' },
        { id: 3, sender: 'me', text: 'Hola María. Con gusto revisaré el estado de su pedido. Deme un momento por favor.', time: '10:35 AM', status: 'read' },
        { id: 4, sender: 'me', text: 'He revisado el sistema. Su pedido se encuentra actualmente en la fase final de Control de Calidad en nuestro laboratorio. Estimamos que estará en la tienda Central el día de mañana.', time: '10:38 AM', status: 'read' },
        { id: 5, sender: 'them', text: '¡Excelente noticia! ¿Ya están listos mis lentes?', time: '10:42 AM' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
            <div>
                <h1 className="text-2xl" style={{ marginBottom: '0.5rem' }}>Centro de Comunicación</h1>
                <p className="text-muted text-sm">Soporte centralizado: WhatsApp, Web y Correo Electrónico</p>
            </div>

            <div className="card" style={{ display: 'flex', flex: 1, overflow: 'hidden', height: 'calc(100vh - 180px)' }}>

                {/* Chat List Sidebar */}
                <div style={{ width: '350px', borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                        <div style={{ position: 'relative' }}>
                            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Buscar chats o contactos..."
                                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.5rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)', fontSize: '0.875rem' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                            <span className="badge" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>Todos</span>
                            <span className="badge" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>No Leídos (2)</span>
                            <span className="badge" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)' }}>Pacientes</span>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto' }}>
                        {chats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveChat(chat.id)}
                                style={{
                                    display: 'flex', gap: '1rem', padding: '1rem 1.5rem', cursor: 'pointer',
                                    borderBottom: '1px solid var(--color-background)',
                                    backgroundColor: activeChat === chat.id ? 'var(--color-primary-light)' : 'transparent',
                                    transition: 'background-color var(--transition-fast)'
                                }}
                            >
                                <div style={{
                                    width: '45px', height: '45px', borderRadius: '50%', flexShrink: 0,
                                    backgroundColor: activeChat === chat.id ? 'var(--color-primary)' : 'var(--color-background)',
                                    color: activeChat === chat.id ? 'white' : 'var(--color-text-muted)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                                }}>
                                    {chat.avatar}
                                </div>

                                <div style={{ flex: 1, overflow: 'hidden' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                        <h4 className="font-semibold" style={{ fontSize: '0.9rem', color: activeChat === chat.id ? 'var(--color-primary)' : 'var(--color-text)' }}>{chat.name}</h4>
                                        <span className="text-muted" style={{ fontSize: '0.75rem' }}>{chat.time}</span>
                                    </div>
                                    <p
                                        className="text-muted"
                                        style={{
                                            fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                                            fontWeight: chat.unread > 0 ? 600 : 400, color: chat.unread > 0 ? 'var(--color-text)' : 'var(--color-text-muted)'
                                        }}
                                    >
                                        {chat.lastMessage}
                                    </p>
                                </div>

                                {chat.unread > 0 && (
                                    <div style={{
                                        width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'var(--color-danger)',
                                        color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.7rem', fontWeight: 'bold', alignSelf: 'center'
                                    }}>
                                        {chat.unread}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-surface)' }}>

                    {/* Chat Header */}
                    <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-primary)',
                                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                            }}>
                                MG
                            </div>
                            <div>
                                <h3 className="font-semibold">María González</h3>
                                <p className="text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-success)', display: 'inline-block' }}></span>
                                    En línea (Vía WebChat)
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)' }}>
                            <Phone size={20} style={{ cursor: 'pointer' }} className="hover-primary" />
                            <Video size={20} style={{ cursor: 'pointer' }} className="hover-primary" />
                            <MoreVertical size={20} style={{ cursor: 'pointer' }} className="hover-primary" />
                        </div>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', backgroundColor: 'var(--color-background)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                            <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', backgroundColor: 'var(--color-border)', borderRadius: 'var(--radius-full)', color: 'var(--color-text-muted)' }}>
                                Hoy
                            </span>
                        </div>

                        {messages.map((msg) => (
                            <div key={msg.id} style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: msg.sender === 'me' ? 'flex-end' : 'flex-start'
                            }}>
                                <div style={{
                                    maxWidth: '70%', padding: '0.75rem 1rem',
                                    backgroundColor: msg.sender === 'me' ? 'var(--color-primary)' : 'var(--color-surface)',
                                    color: msg.sender === 'me' ? 'white' : 'var(--color-text)',
                                    borderRadius: 'var(--radius-lg)',
                                    borderBottomRightRadius: msg.sender === 'me' ? 0 : 'var(--radius-lg)',
                                    borderBottomLeftRadius: msg.sender !== 'me' ? 0 : 'var(--radius-lg)',
                                    boxShadow: 'var(--shadow-sm)'
                                }}>
                                    <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{msg.text}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem', padding: '0 0.25rem' }}>
                                    <span className="text-muted" style={{ fontSize: '0.7rem' }}>{msg.time}</span>
                                    {msg.sender === 'me' && (
                                        <CheckCheck size={14} color="var(--color-primary)" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem' }}>
                            <button style={{ padding: '0.75rem', color: 'var(--color-text-muted)', borderRadius: '50%' }} className="btn-outline">
                                <Paperclip size={20} />
                            </button>

                            <div style={{ flex: 1, position: 'relative' }}>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Escribe un mensaje..."
                                    rows={2}
                                    style={{
                                        width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--color-border)', backgroundColor: 'var(--color-background)',
                                        resize: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '0.9rem'
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); setMessage(''); }
                                    }}
                                />
                            </div>

                            <button
                                className="btn btn-primary"
                                style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '45px', width: '45px' }}
                                onClick={() => setMessage('')}
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <p className="text-muted" style={{ fontSize: '0.7rem', textAlign: 'center', marginTop: '0.75rem' }}>
                            Presiona Enter para enviar. Shift + Enter para salto de línea.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};
