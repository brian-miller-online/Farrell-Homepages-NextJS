"use client";

import { getCloudinaryUrl, imageMap } from "@/lib/cloudinary";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw"
}: OptimizedImageProps) {
  // Check if we have a Cloudinary mapping for this image
  const publicId = imageMap[src];
  
  if (!publicId) {
    // Fallback to original image if not in Cloudinary
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
      />
    );
  }

  // Generate optimized URLs for different sizes
  const smallUrl = getCloudinaryUrl(publicId, { width: 400, quality: 'auto', format: 'auto' });
  const mediumUrl = getCloudinaryUrl(publicId, { width: 800, quality: 'auto', format: 'auto' });
  const largeUrl = getCloudinaryUrl(publicId, { width: 1200, quality: 'auto', format: 'auto' });
  const defaultUrl = width 
    ? getCloudinaryUrl(publicId, { width, height, quality: 'auto', format: 'auto' })
    : mediumUrl;

  return (
    <img
      src={defaultUrl}
      srcSet={`${smallUrl} 400w, ${mediumUrl} 800w, ${largeUrl} 1200w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
