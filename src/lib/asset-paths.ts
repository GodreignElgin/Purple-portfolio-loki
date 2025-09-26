// Utility function to get the correct asset path based on environment
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.MODE === 'github' ? '/Purple-portfolio-loki' : '';
  return `${basePath}${path}`;
};

// Pre-configured paths for common asset types
export const getModelPath = (filename: string): string => getAssetPath(`/models/${filename}`);
export const getImagePath = (filename: string): string => getAssetPath(`/${filename}`);