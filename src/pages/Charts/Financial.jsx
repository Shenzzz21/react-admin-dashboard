import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, DateTime, Zoom, Tooltip, Crosshair, Logarithmic } from '@syncfusion/ej2-react-charts';
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const date1 = new Date('2017, 1, 1');

function filterValue(value){
  if(value.x >= date1){
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Financial" title="APPLE Historical" />
      <div>
        <ChartComponent
          id='charts'
          height='420px'
          // to set appropriate x and y axis
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border : { width : 0 }}}
          tooltip={{ enable : true }}
          crosshair={{ enable: true, lineType: 'Vertical', line: { width : 0 }}}
          background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
        >
          <Inject services={[ HiloSeries, DateTime, Logarithmic, Tooltip, Crosshair, Zoom ]} />
          <SeriesCollectionDirective> 
            <SeriesDirective 
              dataSource={returnValue}
              xName='x'
              yName='low'
              name='Apple Inc'
              type='Hilo'
              low='low'
              high='high'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial;