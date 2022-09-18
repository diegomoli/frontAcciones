import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Table } from 'reactstrap';
import { useAcciones } from '../../hooks/useAcciones';
export const MisAcciones = () => {
    const { acciones,
        arrAcciones,
        accionesPicked,
        loading,
        handleAdd,
        handleDelete,
        handleNavigate,
        setAccionesPicked} = useAcciones()
    return (
            <div className='container'>
                <div className="d-flex justify-content-around col-sm-12 col-md-8 col-lg-8 col-xl-8 p-0">
                    <div className='col-8'>
                        <Select
                        isLoading={loading}
                        placeholder={'Seleccione una acción'}
                        options={acciones}
                        isClearable={true}
                        onChange={(val) => {
                            setAccionesPicked(val);
                        }}
                        value={accionesPicked}
                        
                        />
                    </div>
                    <div className='col-3'>
                    <button className='btn btn-primary' onClick={handleAdd}>Agregar</button>
                    </div>
                </div>
                    <div className='col-6'>
                 <Table className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ml-3 mt-3 text-center">
                        <thead style={{ height: '100%', width: '100%' }}>
                          <tr
                            style={{
                              textAlign: 'center',
                              fontSize: 17,
                              backgroundColor: '#006985',
                            }}
                          >
                            <th>Símbolo</th>
                            <th>Nombre</th>
                            <th>Moneda</th>
                            <th>Acción</th>
                          </tr>
                        </thead>
                    <tbody>
                        {arrAcciones.length
                            ? arrAcciones.map(
                                    ({ label, value, money }, index) => {
                                    return (
                                            <tr
                                                key={index}
                                                style={{ backgroundColor: '#ccf4ff' }}
                                            >
                                            <td onClick={()=>handleNavigate({label,value,money})}>
                                                <Link
                                                    to={"/cotizacion"}
                                                    className="nav-link"
                                                >
                                                    {value}
                                                </Link>
                                            </td>
                                                <td>{label}</td>
                                                <td>{money}</td>
                                                <td>
                                                    <i
                                                        className="fas fa-times acciones"
                                                        style={{ color: 'red' }}
                                                        onClick={() => handleDelete(value)}
                                                    ></i>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )
                            : <tr>
                                <td>
                                    <h6>No hay acciones seleccionadas</h6>
                                </td>
                            </tr>}
                        </tbody>
                      </Table>
                
                </div>   
            </div>   
  )
}
