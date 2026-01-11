// Cloudinary configuration and helper functions
const CLOUD_NAME = 'dlnb17xz7';

// Build optimized Cloudinary URL with transformations
export function getCloudinaryUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: 'auto' | number;
    format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
    crop?: 'fill' | 'fit' | 'scale' | 'crop';
    gravity?: 'auto' | 'face' | 'center';
  } = {}
): string {
  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    gravity = 'auto'
  } = options;

  const transformations: string[] = [];
  
  // Add quality
  transformations.push(`q_${quality}`);
  
  // Add format
  transformations.push(`f_${format}`);
  
  // Add dimensions if specified
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  
  // Add crop mode if dimensions are specified
  if (width || height) {
    transformations.push(`c_${crop}`);
    transformations.push(`g_${gravity}`);
  }

  const transformString = transformations.join(',');
  
  // Encode the public ID for URL safety
  const encodedPublicId = encodeURIComponent(publicId).replace(/%2F/g, '/');
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transformString}/${encodedPublicId}`;
}

// Mapping of original paths to Cloudinary public IDs
export const imageMap: Record<string, string> = {
  // Hero image (most critical for LCP)
  '/Farrells-painting-lake-house-1_1766774717727.png': "Farrell's Painting/Farrells-painting-lake-house-1_1766774717727",
  
  // Joe's headshot
  '/joe-farrell-headshot.jpg': "Farrell's Painting/joe-farrell-headshot",
  
  // Van image
  "/Farrell's-Painting-Van_1766778063353.jpg": "Farrell's Painting/Farrells-Painting-Van_1766778063353",
  
  // Portfolio - Before images
  '/portfolio/Joebefore1.jpg': "Farrell's Painting/portfolio/Joebefore1",
  '/portfolio/Joebefore3.jpg': "Farrell's Painting/portfolio/Joebefore3",
  '/portfolio/Joebefore4.jpg': "Farrell's Painting/portfolio/Joebefore4",
  '/portfolio/Joebefore5.jpg': "Farrell's Painting/portfolio/Joebefore5",
  '/portfolio/Joebefore6.jpg': "Farrell's Painting/portfolio/Joebefore6",
  '/portfolio/Joebefore7.jpg': "Farrell's Painting/portfolio/Joebefore7",
  '/portfolio/Joebefore8.jpg': "Farrell's Painting/portfolio/Joebefore8",
  '/portfolio/Joebefore9.jpg': "Farrell's Painting/portfolio/Joebefore9",
  '/portfolio/Joebefore11.jpg': "Farrell's Painting/portfolio/Joebefore11",
  '/portfolio/Joebefore12.jpg': "Farrell's Painting/portfolio/Joebefore12",
  '/portfolio/Joebefore13.jpg': "Farrell's Painting/portfolio/Joebefore13",
  
  // Portfolio - After images
  '/portfolio/Joeafter1.jpg': "Farrell's Painting/portfolio/Joeafter1",
  '/portfolio/Joeafter3.jpg': "Farrell's Painting/portfolio/Joeafter3",
  '/portfolio/Joeafter4.jpg': "Farrell's Painting/portfolio/Joeafter4",
  '/portfolio/Joeafter5.jpg': "Farrell's Painting/portfolio/Joeafter5",
  '/portfolio/Joeafter6.jpg': "Farrell's Painting/portfolio/Joeafter6",
  '/portfolio/Joeafter7.jpg': "Farrell's Painting/portfolio/Joeafter7",
  '/portfolio/Joeafter8.jpg': "Farrell's Painting/portfolio/Joeafter8",
  '/portfolio/Joeafter9.jpg': "Farrell's Painting/portfolio/Joeafter9",
  '/portfolio/Joeafter10.jpg': "Farrell's Painting/portfolio/Joeafter10",
  '/portfolio/Joeafter10b.jpg': "Farrell's Painting/portfolio/Joeafter10b",
  '/portfolio/Joeafter11.jpg': "Farrell's Painting/portfolio/Joeafter11",
  '/portfolio/Joeafter12.jpg': "Farrell's Painting/portfolio/Joeafter12",
  '/portfolio/Joeafter13.jpg': "Farrell's Painting/portfolio/Joeafter13",
  
  // Services
  '/services/exterior.jpg': "Farrell's Painting/services/exterior",
  '/services/interior-spindles.jpg': "Farrell's Painting/services/interior-spindles",
  '/services/deck.jpg': "Farrell's Painting/services/deck",
  '/services/lake-house.jpg': "Farrell's Painting/services/lake-house",
  
  // Problems
  '/problems/uv-damage.jpg': "Farrell's Painting/problems/uv-damage",
  '/problems/humidity-damage.jpg': "Farrell's Painting/problems/humidity-damage",
  '/problems/freeze-thaw-damage.jpg': "Farrell's Painting/problems/freeze-thaw-damage",
};

// Helper to get optimized URL from original path
export function getOptimizedImageUrl(
  originalPath: string,
  options?: Parameters<typeof getCloudinaryUrl>[1]
): string {
  const publicId = imageMap[originalPath];
  if (!publicId) {
    // Fallback to original path if not in map
    console.warn(`Image not found in Cloudinary map: ${originalPath}`);
    return originalPath;
  }
  return getCloudinaryUrl(publicId, options);
}

// Presets for common use cases
export const imagePresets = {
  hero: { width: 1920, height: 1080, quality: 'auto' as const, format: 'auto' as const },
  thumbnail: { width: 400, height: 300, quality: 'auto' as const, format: 'auto' as const },
  portfolio: { width: 800, height: 600, quality: 'auto' as const, format: 'auto' as const },
  avatar: { width: 200, height: 200, quality: 'auto' as const, format: 'auto' as const, crop: 'fill' as const, gravity: 'face' as const },
};
