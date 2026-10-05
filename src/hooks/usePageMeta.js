import { useEffect } from 'react';
import { BRAND } from '../config/brand';

/**
 * Hook to update page meta tags for SEO
 * Updates title, description, OG tags, and Twitter cards
 */
export function usePageMeta({ 
  title, 
  description, 
  image = BRAND.seo?.ogImage,
  path = '/'
}) {
  useEffect(() => {
    // Update title
    const fullTitle = title ? `${title} — ${BRAND.name}` : `${BRAND.name} — ${BRAND.tagline}`;
    document.title = fullTitle;

    // Update description meta tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || BRAND.description);
    }

    // Update OG meta tags
    const updateMetaTag = (property, content) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description || BRAND.description);
    if (image) {
      updateMetaTag('og:image', image);
    }
    updateMetaTag('og:url', `https://desibreak.in${path}`);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://desibreak.in${path}`);

    // Update Twitter meta tags
    const updateTwitterTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:title', fullTitle);
    updateTwitterTag('twitter:description', description || BRAND.description);
    if (image) {
      updateTwitterTag('twitter:image', image);
    }
  }, [title, description, image, path]);
}

export default usePageMeta;
