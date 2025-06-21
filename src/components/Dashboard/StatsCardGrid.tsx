import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DollarSign, Share2, ThumbsUp, Star } from 'lucide-react';

interface StatCardData {
  id: string;
  title: string;
  value: string;
  icon: React.ElementType;
  isPrimary?: boolean;
}

const statsData: StatCardData[] = [
  {
    id: 'earning',
    title: 'Earning',
    value: '$ 628',
    icon: DollarSign,
    isPrimary: true,
  },
  {
    id: 'share',
    title: 'Share',
    value: '2434',
    icon: Share2,
  },
  {
    id: 'likes',
    title: 'Likes',
    value: '1259',
    icon: ThumbsUp,
  },
  {
    id: 'rating',
    title: 'Rating',
    value: '8,5',
    icon: Star,
  },
];

const StatsCardGrid: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((stat) => (
        <Card
          key={stat.id}
          className={cn(
            stat.isPrimary ? 'bg-primary text-primary-foreground' : 'bg-card'
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon
              className={cn(
                'h-4 w-4',
                stat.isPrimary
                  ? 'text-primary-foreground/70'
                  : 'text-muted-foreground'
              )}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCardGrid;
