import { useState } from 'react';
import { MainLayout } from './components/Layout/MainLayout';
import { PublicLayout } from './components/PublicLayout/PublicLayout';

/* Vistas de Dashboard (Gestión Interna) */
import { DashboardView } from './views/Dashboard/DashboardView';
import { ClinicalView } from './views/Clinical/ClinicalView';
import { POSView } from './views/POS/POSView';
import { InventoryView } from './views/Inventory/InventoryView';
import { CommunicationView } from './views/Communication/CommunicationView';

/* Vistas Públicas (E-commerce) */
import { HomeView } from './views/Public/HomeView';
import { ShopView } from './views/Public/ShopView';
import { BookingView } from './views/Public/BookingView';
import { PortalView } from './views/Public/PatientPortalView';

import './index.css';
import './styles/public.css';

function App() {
  const [appMode, setAppMode] = useState<'selector' | 'admin' | 'public'>('selector');
  const [adminView, setAdminView] = useState('dashboard');
  const [publicView, setPublicView] = useState('home');

  // Pantalla de Selección de Rol (Demo Chooser)
  if (appMode === 'selector') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>OptiVision Demo</h1>
          <p style={{ color: '#64748b' }}>Selecciona el entorno que deseas visualizar</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', width: '100%', maxWidth: '800px' }}>
          {/* Tarjeta Admin */}
          <div
            onClick={() => setAppMode('admin')}
            style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s', border: '2px solid transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            className="hover-border-primary"
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e0f2fe', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>Dashboard Interno</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Gestión clínica, punto de venta (POS), inventario multisucursal y KPIs para equipo médico.</p>
          </div>

          {/* Tarjeta Pública */}
          <div
            onClick={() => setAppMode('public')}
            style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.2s', border: '2px solid transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            className="hover-border-accent"
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ccfbf1', color: '#2dd4bf', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>Vitrina E-commerce</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Portal de cara al cliente. Catálogo de productos, agendamiento de exámenes y acceso a recetas.</p>
          </div>
        </div>
      </div>
    );
  }

  // Renderizado del Dashboard de Admin
  if (appMode === 'admin') {
    const renderAdminView = () => {
      switch (adminView) {
        case 'dashboard': return <DashboardView />;
        case 'clinical': return <ClinicalView />;
        case 'pos': return <POSView />;
        case 'inventory': return <InventoryView />;
        case 'communication': return <CommunicationView />;
        default: return <DashboardView />;
      }
    };

    return (
      <>
        {/* Pequeño botón de salida flotante sobre el dashboard */}
        <button
          onClick={() => setAppMode('selector')}
          style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999, padding: '8px 16px', backgroundColor: '#0f172a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', opacity: 0.5, transition: 'opacity 0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '0.5'}
        >
          ← Volver al Selector
        </button>
        <MainLayout activeView={adminView} setActiveView={setAdminView}>
          {renderAdminView()}
        </MainLayout>
      </>
    );
  }

  // Renderizado de la Web Pública
  if (appMode === 'public') {
    const renderPublicView = () => {
      switch (publicView) {
        case 'home': return <HomeView />;
        case 'shop': return <ShopView />;
        case 'booking': return <BookingView />;
        case 'portal': return <PortalView />;
        default: return <HomeView />;
      }
    };

    return (
      <PublicLayout activeView={publicView} setActiveView={setPublicView} onExit={() => setAppMode('selector')}>
        {renderPublicView()}
      </PublicLayout>
    );
  }

  return null;
}

export default App;
