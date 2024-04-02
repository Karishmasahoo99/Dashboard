import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, Category, ColumnSeries,  DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy';
import { Header } from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const {currentMode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Metals"/>
      <ChartComponent
      id="bar-charts"
      height="420px"
      primaryXAxis={barPrimaryXAxis}
      primaryYAxis={barPrimaryYAxis}
      chartArea={{border:{width:0}}}
      //dataSource={barChartData}
      tooltip={{enable:true}}
      background={currentMode==='Dark'?'#33373E':'#fff'}
      legendSettings={{background:'white'}}
      >
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index)=> <SeriesDirective key={index} {...item}/>)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar