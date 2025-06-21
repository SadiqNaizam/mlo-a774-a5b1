import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const data = [
  { name: 'Completed', value: 45 },
  { name: 'Remaining', value: 55 },
];

const COLORS = ['hsl(var(--accent))', 'hsl(var(--primary))'];

const listItems = [
  'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'
];

const DonutChartVerticalList: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-2 xl:col-span-1 h-full flex flex-col">
      <CardContent className="p-6 flex-1 flex flex-col justify-between">
        <div className="relative w-full h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((_entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-foreground">45%</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
            {listItems.map((item, index) => (
                <React.Fragment key={index}>
                    <p className="text-sm text-muted-foreground text-center">{item}</p>
                    {index < listItems.length - 1 && <Separator className="bg-border/50"/>}
                </React.Fragment>
            ))}
        </div>

        <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
          Check Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonutChartVerticalList;
