import React from 'react';
import { cn } from '@/lib/utils';
import {
  Home,
  FileText,
  MessageSquare,
  Bell,
  MapPin,
  BarChart2,
  type LucideIcon,
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

const navItems: NavItem[] = [
  { href: '#', label: 'home', icon: Home, active: true },
  { href: '#', label: 'file', icon: FileText },
  { href: '#', label: 'messages', icon: MessageSquare },
  { href: '#', label: 'notification', icon: Bell },
  { href: '#', label: 'location', icon: MapPin },
  { href: '#', label: 'graph', icon: BarChart2 },
];

const SidebarNav: React.FC = () => {
  return (
    <nav className="flex-1 px-4 py-6">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium capitalize transition-colors',
                item.active
                  ? 'text-primary-foreground font-bold'
                  : 'text-primary-foreground/80 hover:text-primary-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
