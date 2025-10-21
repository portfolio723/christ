import data from '@/lib/placeholder-images.json' assert { type: 'json' };

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  videoSrc?: string;
};

export type VideoReel = ImagePlaceholder & {
  videoSrc: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = data.placeholderImages;
