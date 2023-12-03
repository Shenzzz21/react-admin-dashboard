import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, AccumulationDataLabel, Inject, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import { PyramidData } from '../../data/dummy';

const Pyramid = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Pyramid" title="Food Comparison Chart" />
      <div className='w-full'>
        <AccumulationChartComponent
          id='pyramid-chart'
          legendSettings={{ background: 'white'}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff' }
          tooltip={{ enable : true }}
        >
          <Inject services={[ AccumulationLegend, PyramidSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection ]} />

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name='Food'
              dataSource={PyramidData}
              xName='x'
              yName='y'
              type='Pyramid'
              width='45%'
              height='80%'
              neckWidth='15%'
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid;