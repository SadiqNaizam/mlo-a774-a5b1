import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

const UserProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 border-b border-white/10">
      <Avatar className="w-24 h-24 mb-4 ring-2 ring-offset-4 ring-offset-primary ring-white/50">
        <AvatarImage src="https://i.pravatar.cc/150?u=johndon" alt="John Don" />
        <AvatarFallback className="bg-white/20 text-primary-foreground">
          <User className="w-12 h-12" />
        </AvatarFallback>
      </Avatar>
      <h2 className="text-xl font-bold text-primary-foreground">JOHN DON</h2>
      <p className="text-sm text-primary-foreground/80">johndon@company.com</p>
    </div>
  );
};

export default UserProfileCard;
