import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import nextConfig from "../../../next.config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getAssetPath = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    // Ensure assetPrefix ends with a slash and path doesn't start with one.
    const prefix = nextConfig.assetPrefix?.endsWith('/') ? nextConfig.assetPrefix : `${nextConfig.assetPrefix}/`;
    const formattedPath = path.startsWith('/') ? path.substring(1) : path;
    return `${prefix}${formattedPath}`;
  }
  return path;
};
