import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import { useThemeConfig } from '@docusaurus/theme-common';

// Componente personalizado para corregir el problema de enlaces activos
export default function NavbarLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const location = useLocation();
  const toUrl = useBaseUrl(to);
  const activeDocContext = useActiveDocContext();
  const themeConfig = useThemeConfig();
  
  // Determinamos si este enlace debe estar activo
  const isActive = () => {
    // Si es un enlace externo, nunca está activo
    if (href) {
      return false;
    }

    // Comprobar si coincide exactamente con la ruta actual
    if (location.pathname === toUrl) {
      return true;
    }

    // Comprobar si es parte de la ruta activa (para rutas anidadas)
    // Evitamos falsos positivos acortando
    const cleanPathname = location.pathname.endsWith('/') 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
      
    const cleanToUrl = toUrl.endsWith('/') 
      ? toUrl.slice(0, -1) 
      : toUrl;

    // Solo consideramos activo si la ruta coincide exactamente o si toUrl no es '/' y es un prefijo de la ruta actual
    return cleanToUrl !== '/' && cleanPathname.startsWith(cleanToUrl);
  };

  const isActiveLink = isActive();

  return (
    <Link
      {...props}
      to={to}
      href={href}
      className={`navbar__link ${isActiveLink ? 'navbar__link--active' : ''}`}
      data-active={isActiveLink ? 'true' : 'false'}
      aria-current={isActiveLink ? 'page' : undefined}
    >
      {label}
    </Link>
  );
} 