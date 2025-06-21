import React from 'react';

// Layout Component
import MainAppLayout from '../components/layout/MainAppLayout';

// Dashboard Organism Components
import StatsCardGrid from '../components/Dashboard/StatsCardGrid';
import ResultChart from '../components/Dashboard/ResultChart';
import AreaChartCalendar from '../components/Dashboard/AreaChartCalendar';
import DonutChartVerticalList from '../components/Dashboard/DonutChartVerticalList';

/**
 * The main dashboard overview page.
 * It composes various data visualization components within the main application layout.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="space-y-6">
        {/* Section 1: Key Performance Indicator Stats */}
        {/* Renders a grid of 4 stat cards. The component itself handles the grid layout. */}
        <StatsCardGrid />

        {/* Section 2: Detailed Charts and Data Visualizations */}
        {/* This grid arranges the larger chart components. Each component specifies its own column span
            at different breakpoints, allowing for a flexible and responsive arrangement. */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* On XL screens, ResultChart and AreaChartCalendar will sit side-by-side. */}
          {/* On smaller screens (like LG), they will stack vertically, each taking the full width. */}
          <ResultChart />
          <AreaChartCalendar />

          {/* The DonutChartVerticalList will flow onto the next row on XL screens. */}
          <DonutChartVerticalList />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
