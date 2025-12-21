export const updateMetaTags = (title: string, description: string) => {
  // Update title
  document.title = title;
  
  // Update or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  } else {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    document.head.appendChild(metaDescription);
  }
  
  // Update Open Graph tags for social sharing
  updateOrCreateMetaTag('property', 'og:title', title);
  updateOrCreateMetaTag('property', 'og:description', description);
  updateOrCreateMetaTag('property', 'og:url', window.location.href);
  
  // Update Twitter Card tags
  updateOrCreateMetaTag('name', 'twitter:title', title);
  updateOrCreateMetaTag('name', 'twitter:description', description);
};

const updateOrCreateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
  let tag = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  } else {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, attributeValue);
    tag.setAttribute('content', content);
    document.head.appendChild(tag);
  }
};
