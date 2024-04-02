import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const {currentMode}=useStateContext();
  return (
    <div>
      <AccumulationChartComponent
      id="pie-chart"
      height="420px"
      chartArea={{border:{width:0}}}
      tooltip={{enable:true}}
      background={currentMode==='Dark'?'#33373E':'#fff'}
      legendSettings={{visible:'full', background:'white'}}
      >
        <Inject services={[PieSeries, AccumulationTooltip, AccumulationLegend, AccumulationDataLabel]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' type='Pie' innerRadius='40%' name="Sale" 
          startAngle={0} endAngle={360} radius='80%' explode explodeOffset='10%'
          explodeIndex={2} dataLabel={{visible:true, name:'text', position:'Inside', 
          font:{fontWeight:600, color:'#fff'}}}/>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie