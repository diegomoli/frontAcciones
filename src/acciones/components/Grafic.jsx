import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from 'react-redux';


export const Grafic = ({ intervalo }) => {
   
    // console.log(intervalo)
    
    const { value,label } = useSelector((state) => state.simbolo.simbolo);


    const options = {
        title: {
            text: value
        },
        series: [{
            name:label,
            data: intervalo,
            // data: intervalo.map(a => a)
            // data: ["5","3","5","20","50"]
            // data: [5,10,20,24,44]
        }],
        yAxis: {
            title: {
            text: 'Cotizaciones'
            }
        },
        xAxis: {
            title: {
            text: 'Intervalo'
            }
        },
    }

  return (
        <div>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
            />
        </div>
  )
}
