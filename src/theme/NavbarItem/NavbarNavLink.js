import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { useLocation } from '@docusaurus/router';

export default function NavbarNavLink({
  activeBasePath,
  activeBaseRegex,
  to,
  href,
  label,
  html,
  isDropdownLink,
  prependBaseUrlToHref,
  ...props
}) {
  const location = useLocation();
  const toUrl = useBaseUrl(to);
  const activeBaseUrl = useBaseUrl(activeBasePath);
  
  // Determinamos si este enlace debe estar activo
  const isActive = () => {
    if (href) {
      return false;
    }
    
    if (!to) {
      return false;
    }
    
    if (activeBaseRegex) {
      return new RegExp(activeBaseRegex).test(location.pathname);
    }
    
    if (activeBasePath) {
      return location.pathname.startsWith(activeBaseUrl);
    }
    
    // Caso especial para la página de inicio: solo activo cuando estamos exactamente en '/'
    if (toUrl === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    
    // Comprobación exacta de la ruta actual
    if (location.pathname === toUrl) {
      return true;
    }
    
    // Para evitar que todos los elementos aparezcan como activos
    // solo marcamos como activo si es exactamente la ruta o si es un prefijo específico
    const cleanPathname = location.pathname.endsWith('/') 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
      
    const cleanToUrl = toUrl.endsWith('/') 
      ? toUrl.slice(0, -1) 
      : toUrl;
      
    return cleanToUrl !== '/' && cleanPathname.startsWith(cleanToUrl);
  };
  
  const isActiveLink = isActive();

  const linkProps = {
    ...props,
    className: isDropdownLink 
      ? 'dropdown__link'
      : `navbar__item navbar__link ${isActiveLink ? 'navbar__link--active' : ''}`,
    to: toUrl,
    ...(href
      ? {
          href: prependBaseUrlToHref ? useBaseUrl(href) : href,
          target: '_blank',
          rel: 'noopener noreferrer',
        }
      : null),
    'aria-current': isActiveLink ? 'page' : undefined,
  };

  if (html) {
    return <span {...props} dangerouslySetInnerHTML={{__html: html}} />;
  }

  return (
    <Link {...linkProps}>
      {label}
    </Link>
  );
} 