import React from 'react';
import {
  Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const chartData = [
  { month: 'JAN', '2019': 22, '2020': 37 },
  { month: 'FEB', '2019': 28, '2020': 43 },
  { month: 'MAR', '2019': 15, '2020': 32 },
  { month: 'APR', '2019': 23, '2020': 5 },
  { month: 'MAY', '2019': 33, '2020': 25 },
  { month: 'JUNE', '2019': 25, '2020': 46 },
  { month: 'JULY', '2019': 34, '2020': 12 },
  { month: 'AUG', '2019': 22, '2020': 28 },
  { month: 'SEP', '2019': 18, '2020': 35 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 text-sm bg-background border rounded-md shadow-lg">
        <p className="font-bold text-foreground">{label}</p>
        <p style={{ color: payload[0].color }}>{`2020: ${payload[0].value}`}</p>
        <p style={{ color: payload[1].color }}>{`2019: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const ResultChart: React.FC = () => {
  return (
    <Card className="col-span-1 lg:col-span-4 xl:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Result</CardTitle>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">2019</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">2020</span>
          </div>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground h-8 px-3">
            Check Now
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))' }} />
            <Bar dataKey="2020" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="2019" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ResultChart;
