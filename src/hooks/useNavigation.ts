'use client';

import { usePathname, useRouter } from 'next/navigation';
import { scrollToHashSection } from '@/utils/scroll-anchor';

interface UseNavigationOptions {
  smooth?: boolean;
  onNavigate?: () => void;
}

export const useNavigation = (options: UseNavigationOptions = {}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { smooth = true, onNavigate } = options;

  const handleNavigation = (path: string) => {
    const isSamePath = pathname === path.replace(/#.*$/, '');
    const hash = path.includes('#') ? path.split('#')[1] : '';

    if (isSamePath) {
      if (hash) {
        scrollToHashSection(hash);
      } else {
        window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
      }
      onNavigate?.();
      return;
    }

    router.push(path, { scroll: false });
    if (hash) {
      setTimeout(() => scrollToHashSection(hash), 50);
    } else {
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    }
    onNavigate?.();
  };

  return {
    handleNavigation,
    currentPath: pathname,
  };
}; 