import React from 'react'
//import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, Category, HiloOpenCloseSeries,  DataLabel } from '@syncfusion/ej2-react-charts';
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
import { ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { Header } from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const {currentMode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Inflation Rate in Percentage"/>
      <MapsComponent
      id="colored-charts"
      height="420px"
      primaryXAxis={ColorMappingPrimaryXAxis}
      primaryYAxis={ColorMappingPrimaryYAxis}
      chartArea={{border:{width:0}}}
      //dataSource={barChartData}
      tooltip={{enable:true}}
      background={currentMode==='Dark'?'#33373E':'#fff'}
      legendSettings={{background:'white'}}
      >
        
        <LayersDirective>
          {rangeColorMapping.map((item, index)=> <LayerDirective key={index} {...item}/>)}
        </LayersDirective>
      </MapsComponent>
    </div>
  )
}

export default ColorMapping