import React from 'react';
import { LayoutDashboard, Users, ShoppingCart, Package, MessageSquare, Menu, Eye, ChevronLeft } from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  activeView: string;
  setActiveView: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed, activeView, setActiveView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard & KPIs', icon: LayoutDashboard },
    { id: 'clinical', label: 'Gestión Clínica', icon: Users },
    { id: 'pos', label: 'POS & Presupuestos', icon: ShoppingCart },
    { id: 'inventory', label: 'Inventario & Pedidos', icon: Package },
    { id: 'communication', label: 'Comunicación', icon: MessageSquare },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Eye className={styles.logoIcon} size={28} />
          <span className={styles.logoText}>OptiVision</span>
        </div>
        <button 
          className={styles.toggleBtn} 
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expandir menú" : "Colapsar menú"}
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
              onClick={() => setActiveView(item.id)}
              title={collapsed ? item.label : ''}
            >
              <Icon className={styles.navIcon} size={22} />
              <span className={styles.navText}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.avatar}>DR</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Dr. Ruiz</span>
          <span className={styles.userRole}>Oftalmólogo Jefe</span>
        </div>
      </div>
    </aside>
  );
};
