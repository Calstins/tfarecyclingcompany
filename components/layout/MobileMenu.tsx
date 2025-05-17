'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ name: string; href: string }>;
}

const MobileMenu = ({ isOpen, onClose, navigation }: MobileMenuProps) => {
  const pathname = usePathname();
  const initialPathnameRef = useRef(pathname);

  // Close mobile menu only if actual route changes
  useEffect(() => {
    if (isOpen && pathname !== initialPathnameRef.current) {
      onClose();
    }
  }, [pathname, isOpen, onClose]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      initialPathnameRef.current = pathname; // Store the pathname when menu opens
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-end">
        <button
          className="text-foreground hover:text-primary transition-colors"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="container mx-auto px-4 py-8 flex flex-col items-center space-y-6">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'text-lg font-medium transition-colors hover:text-primary',
              pathname === item.href ? 'text-primary' : 'text-foreground'
            )}
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
        <div className="pt-6 w-full max-w-xs">
          <Button asChild className="w-full">
            <Link href="/contact#quote">Request Quote</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
