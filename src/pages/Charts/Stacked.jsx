import React from 'react';
import { Header , Stacked as StackedChartComponent} from '../../components';

const Stacked = () => {
  //const {currentMode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Revenue Breakdown"/>
      <div>
        <StackedChartComponent/>
      </div>
    </div>
  )
}

export default Stacked