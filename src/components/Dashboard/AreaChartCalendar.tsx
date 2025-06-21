import React from 'react';
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';

const chartData = [
  { name: 'Day 1', series1: 4000, series2: 2400 },
  { name: 'Day 5', series1: 3000, series2: 1398 },
  { name: 'Day 10', series1: 2000, series2: 9800 },
  { name: 'Day 15', series1: 2780, series2: 3908 },
  { name: 'Day 20', series1: 1890, series2: 4800 },
  { name: 'Day 25', series1: 2390, series2: 3800 },
  { name: 'Day 30', series1: 3490, series2: 4300 },
];

const AreaChartCalendar: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Card className="col-span-1 lg:col-span-4 xl:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Lorem Ipsum</CardTitle>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
                <p className="text-xs text-muted-foreground">Lorem Ipsum</p>
            </div>
            <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <p className="text-xs text-muted-foreground">Dolor Amet</p>
            </div>
        </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                }}
              />
              <Area type="monotone" dataKey="series1" stroke="hsl(var(--accent))" fillOpacity={1} fill="url(#colorSeries1)" strokeWidth={2} />
              <Area type="monotone" dataKey="series2" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorSeries2)" strokeWidth={2}/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="p-0 scale-90 sm:scale-100"
                classNames={{
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary/90 focus:bg-primary",
                    day_today: "bg-accent text-accent-foreground"
                }}
            />
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaChartCalendar;
