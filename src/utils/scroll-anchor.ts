export function scrollToHashSection(hash: string) {
  if (typeof window === 'undefined') return;
  const id = hash.replace(/^#/, '');
  const el = document.getElementById(id);

  // When id is "top" or the element is not found, default to scrolling to page top
  if (!el || id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const header = document.querySelector('header');
  const headerOffset = header ? (header as HTMLElement).offsetHeight : 0;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset - 8; // extra 8px spacing
  window.scrollTo({ top: y, behavior: 'smooth' });
} 