import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onMenuClick: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, className }) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b bg-background px-6',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
          aria-label="Toggle Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">
          Dashboard User
        </h1>
      </div>
      <div className="flex items-center">
        <Button variant="ghost" size="icon" aria-label="Options">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
