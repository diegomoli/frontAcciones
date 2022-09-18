import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { getAcciones } from "../service/getAcciones";
import { addSymbol } from "../store/accion/symbolSlice";

export const useAcciones = () => {
  const dispatch = useDispatch();
  const [acciones, setAcciones] = useState([]);
  const [arrAcciones, setArrAcciones] = useState([]);
  const [accionesPicked, setAccionesPicked] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAdd = () => {
    {
      accionesPicked
        ? setArrAcciones([...arrAcciones, accionesPicked])
        : Swal.fire("Seleccionar una acción", "El campo está vacio", "error");
    }

    setAccionesPicked(null);
  };

  const handleDelete = (value) => {
    setArrAcciones(arrAcciones.filter((a) => a.value !== value));
  };
  const handleNavigate = (e) => {
    dispatch(addSymbol(e));
  };

  useEffect(() => {
    getAcciones()
      .then((response) => {
        let arr = response.data.data.map(({ symbol, name, currency }) => {
          return {
            value: symbol,
            label: `${symbol} - ${name} `,
            money: currency,
          };
        });
        setAcciones(arr);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire(
          "Error",
          "Se produjo un error al obtener los datos de la api",
          "error"
        );
      });
  }, []);

  return {
    acciones,
    arrAcciones,
    accionesPicked,
    loading,
    handleAdd,
    handleDelete,
    handleNavigate,
    setAccionesPicked,
  };
};
