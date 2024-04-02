import React from 'react';
import { Header, Pie as PieChartData} from '../../components';

const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Sales"/>
      <div className='w-full'>
        <PieChartData/>
      </div>
    </div>
  )
}

export default Pie