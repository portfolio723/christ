'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Map paths to breadcrumb names
  const breadcrumbMap: Record<string, string> = {
    '': 'Home',
    'about': 'About',
    'videos': 'Videos',
    'blog': 'Blog',
    'testimonials': 'Testimonials',
    'contact': 'Contact',
  };

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = (path: string): BreadcrumbItem[] => {
    // Don't show breadcrumbs on the homepage
    if (path === '/') {
      return [];
    }
    
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', path: '/' }
    ];

    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      
      // Use the map for main sections
      const displayName = breadcrumbMap[segment];
      
      // If not in map, format the segment (remove hyphens, capitalize)
      const name = displayName || segment
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({ name, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(pathname);
  if (breadcrumbs.length === 0) {
    return null;
  }

  // Generate schema markup
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://godsspiritsays.com${item.path}`
    }))
  };

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        suppressHydrationWarning
      />

      {/* Visual Breadcrumb Navigation */}
      <nav 
        className="breadcrumb-nav" 
        aria-label="Breadcrumb"
        role="navigation"
      >
        <ol className="breadcrumb-list">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="breadcrumb-item">
              {index === breadcrumbs.length - 1 ? (
                <span aria-current="page" className="breadcrumb-current">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link 
                    href={item.path}
                    className="breadcrumb-link"
                  >
                    {item.name}
                  </Link>
                  <span className="breadcrumb-separator"> / </span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
