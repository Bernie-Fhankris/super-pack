const bubbleBening = "/bubble-wrap-bening125cm.webp";
const bubbleHitam = "/bubble-wrap-hitam125cm.webp";
const bubbleAntiStatic = "/bubble-wrap-anti-static125cm.webp";

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    imageUrl: bubbleBening,
    title: 'Bubble Wrap Bening 30cm',
    category: 'bubble-wrap-bening',
  },
  {
    id: 'gallery-2',
    imageUrl: bubbleBening,
    title: 'Bubble Wrap Bening 60cm',
    category: 'bubble-wrap-bening',
  },
  {
    id: 'gallery-3',
    imageUrl: bubbleBening,
    title: 'Bubble Wrap Bening 125cm',
    category: 'bubble-wrap-bening',
  },
  {
    id: 'gallery-4',
    imageUrl: bubbleHitam,
    title: 'Bubble Wrap Hitam 30cm',
    category: 'bubble-wrap-hitam',
  },
  {
    id: 'gallery-5',
    imageUrl: bubbleHitam,
    title: 'Bubble Wrap Hitam 60cm',
    category: 'bubble-wrap-hitam',
  },
  {
    id: 'gallery-6',
    imageUrl: bubbleHitam,
    title: 'Bubble Wrap Hitam 125cm',
    category: 'bubble-wrap-hitam',
  },
  {
    id: 'gallery-7',
    imageUrl: bubbleAntiStatic,
    title: 'Coming Soon - Lakban',
    category: 'coming-soon',
  },
  {
    id: 'gallery-8',
    imageUrl: bubbleAntiStatic,
    title: 'Coming Soon - Bubble Wrap Anti Statis',
    category: 'coming-soon',
  },
  {
    id: 'gallery-9',
    imageUrl: bubbleAntiStatic,
    title: 'Coming Soon - Bubble Mailer',
    category: 'coming-soon',
  },
];

export const FEATURED_GALLERY_ITEMS = GALLERY_ITEMS.slice(0, 6);