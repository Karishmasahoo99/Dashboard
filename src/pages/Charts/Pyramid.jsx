import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, 
  PyramidSeries, AccumulationDataLabel, Inject, AccumulationTooltip} from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { Header} from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid= () => {
  const {currentMode}=useStateContext();
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Chart" title="Calorie Value"/>
      <div className='w-full'>
        <AccumulationChartComponent
        id="pyramid"
        height="80%"
        width="45%"
        gapRatio={0.03}
        neckWidth="15%"
        chartArea={{border:{width:0}}}
        tooltip={{enable:true}}
        explode
        emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
        background={currentMode==='Dark'?'#33373E':'#fff'}
        legendSettings={{visible:'full', background:'white'}}
        >
          <Inject services={[PyramidSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel]}/>
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid'  name="Sale" 
             dataLabel={{visible:true, name:'text', position:'Inside', 
            font:{fontWeight:600, color:'#fff'}}}/>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid