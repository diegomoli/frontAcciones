import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useDetalle } from '../../hooks/useDetalle';

import { Chart } from '../components/Chart';


export const DetalleAccionPage = () => {
  const {  
    radioPicked,
    startDate,
    endDate,
    intervalo,
    tiempo,
    volume,
    handleRadio,
    handleFechaI,
    handleFechaF,
    handleIntervalo,
    handleCotizacionHistorico,} = useDetalle()  

    return (
      <div className='container'>
        <Form >
          <FormGroup className="formGroupRadios">
            <FormGroup>
              <Input
                id="real"
                type="radio"
                value="1"
                checked={radioPicked == 1 ? true : false}
                onChange={handleRadio}
              />
              &nbsp;
              <Label for="real">
                Real
              </Label>
            </FormGroup>

            <FormGroup>
              <Input
                id="historico"
                type="radio"
                value="2"
                checked={radioPicked == 2 ? true : false}
                onChange={handleRadio}
              />
              &nbsp;
              <Label for="historico">
                Histórico
              </Label>
            </FormGroup>
            {
              radioPicked === "2"
                ? <>
                  <FormGroup className='col-2'>
          
                    <Label for="inicio">Fecha inicio:</Label>
                    <Input type="date" name="startDate" id="startDate" placeholder="Fecha desde:" onChange={handleFechaI} value={startDate} />
                  </FormGroup>
                  <FormGroup className='col-2'>
                    <Label for="finDate">Fecha hasta:</Label>
                    <Input type="date" name="endDate" id="endDate" placeholder="Fecha hasta:"onChange={handleFechaF} value={ endDate} />
                  </FormGroup>
                </>
       
                : null
            }
            
          </FormGroup>

          <FormGroup className='col-1'>
            <Label for="intervalo">Intervalo</Label>
            <Input type="select" name="intervalo" onChange={handleIntervalo} value={intervalo} >
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={15}>15</option>
              
            </Input>
          </FormGroup>
          {/* <button type="submit" className='btn btn-primary'>Graficar</button> */}
          {
            radioPicked === "2"
              ? < Button onClick={handleCotizacionHistorico} >Graficar</Button>
              : null
          }
        </Form>
        {tiempo.length
          // ?<Grafic intervalo={tiempo} />
          ? <Chart intervalo={tiempo} volume={ volume} />
          :null
        }

      </div>
    )
  }

