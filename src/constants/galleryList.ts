// Image paths in /public – one file per size/variant
const bubbleBening125 = "/Bubble-Wrap-Bening-125cm.webp";
const bubbleBening60  = "/Bubble-Wrap-Bening-60cm.webp";
const bubbleBening30  = "/Bubble-Wrap-Bening-30cm.webp";

const bubbleHitam125 = "/Bubble-Wrap-Hitam-125cm.webp";
const bubbleHitam60  = "/Bubble-Wrap-Hitam-60cm.webp";
const bubbleHitam30  = "/Bubble-Wrap-Hitam-30cm.webp";

const comingSoonLakban       = "/Coming-Soon-Lakban.webp";
const comingSoonAntiStatis   = "/Coming-Soon-AntiStatis.webp";
const comingSoonBubbleMailer = "/Coming-Soon-BubbleMailer.webp";

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    imageUrl: bubbleBening30,
    title: 'Bubble Wrap Bening 30cm',
    category: 'bubble-wrap-bening',
  },
  {
    id: 'gallery-2',
    imageUrl: bubbleBening60,
    title: 'Bubble Wrap Bening 60cm',
    category: 'bubble-wrap-bening',
  },
  {
    id: 'gallery-3',
    imageUrl: bubbleBening125,
    title: 'Bubble Wrap Bening 125cm',
    category: 'bubble-wrap-bening',
  },
  {
    id: 'gallery-4',
    imageUrl: bubbleHitam30,
    title: 'Bubble Wrap Hitam 30cm',
    category: 'bubble-wrap-hitam',
  },
  {
    id: 'gallery-5',
    imageUrl: bubbleHitam60,
    title: 'Bubble Wrap Hitam 60cm',
    category: 'bubble-wrap-hitam',
  },
  {
    id: 'gallery-6',
    imageUrl: bubbleHitam125,
    title: 'Bubble Wrap Hitam 125cm',
    category: 'bubble-wrap-hitam',
  },
  {
    id: 'gallery-7',
    imageUrl: comingSoonLakban,
    title: 'Coming Soon - Lakban',
    category: 'coming-soon',
  },
  {
    id: 'gallery-8',
    imageUrl: comingSoonAntiStatis,
    title: 'Coming Soon - Bubble Wrap Anti Statis',
    category: 'coming-soon',
  },
  {
    id: 'gallery-9',
    imageUrl: comingSoonBubbleMailer,
    title: 'Coming Soon - Bubble Mailer',
    category: 'coming-soon',
  },
];

export const FEATURED_GALLERY_ITEMS = GALLERY_ITEMS.slice(0, 6);