import React, { useState } from 'react';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
    activeView: string;
    setActiveView: (view: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, activeView, setActiveView }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--color-background)' }}>
            <Sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                activeView={activeView}
                setActiveView={setActiveView}
            />
            <main
                style={{
                    flex: 1,
                    marginLeft: collapsed ? '80px' : '280px',
                    transition: 'margin-left var(--transition-normal)',
                    padding: '2rem',
                    maxWidth: '1600px',
                    marginRight: 'auto'
                }}
            >
                <div className="animate-fade-in" style={{ height: '100%' }}>
                    {children}
                </div>
            </main>
        </div>
    );
};
