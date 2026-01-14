"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CanonicalURL() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure trailing slash
    const canonicalPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
    const canonicalURL = `https://www.farrellspainting.com${canonicalPath}`;

    // Remove existing canonical link if any
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical link
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalURL;
    document.head.appendChild(link);

    // Cleanup function
    return () => {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.remove();
      }
    };
  }, [pathname]);

  return null;
}
