'use client';

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

interface DrawerState {
  isDrawerOpen: boolean;
  isTransitioning: boolean;
  isClosing: boolean;
}

interface DrawerContextType extends DrawerState {
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export const useDrawerContext = () => {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error('useDrawerContext must be used within DrawerProvider');
  return ctx;
};

const TRANSITION_DURATION = 300;

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const clear = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clear();
  }, []);

  const openDrawer = useCallback(() => {
    if (isDrawerOpen || isTransitioning) return;
    clear();
    setIsTransitioning(true);
    setIsDrawerOpen(true);
    timeoutRef.current = window.setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION);
  }, [isDrawerOpen, isTransitioning]);

  const closeDrawer = useCallback(() => {
    if (!isDrawerOpen || isTransitioning) return;
    clear();
    setIsTransitioning(true);
    setIsClosing(true);
    setIsDrawerOpen(false);
    timeoutRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
      setIsClosing(false);
    }, TRANSITION_DURATION);
  }, [isDrawerOpen, isTransitioning]);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, isTransitioning, isClosing, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}; 