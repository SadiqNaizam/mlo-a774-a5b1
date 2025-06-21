import React from 'react';
import { cn } from '@/lib/utils';
import UserProfileCard from '../Dashboard/UserProfileCard';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'flex h-full w-64 flex-col bg-primary text-primary-foreground',
        className
      )}
    >
      <UserProfileCard />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
