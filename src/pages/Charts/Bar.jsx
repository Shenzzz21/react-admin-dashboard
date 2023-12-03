import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DataLabel, Category, Tooltip, Legend, ColumnSeries } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';

const Bar = () => {

  const { currentMode } = useStateContext();

  return (
    <div>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Bar" title="Olympic Medal Counts - RIO" />

      <ChartComponent
        id='bar-chart'
        height='420px'
        // to set appropriate x and y axis
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border : { width : 0 }}}
        tooltip={{ enable : true }}
        legendSettings={{ background: 'white' }}
        background={ currentMode === 'Dark' ? '#33373E' : '#fff' }
      >
        <Inject services={[ DataLabel, Category, Legend, Tooltip, ColumnSeries ]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
      </div>
    </div>
  )
}

export default Bar;