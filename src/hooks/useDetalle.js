import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  getCotizacionHistorico,
  getCotizacionReal,
} from "../service/getAcciones";

export const useDetalle = () => {
  const { value: symbol } = useSelector((state) => state.simbolo.simbolo);
  const [radioPicked, setRadioPicked] = useState(1);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [intervalo, setIntervalo] = useState(5);
  const [tiempo, setTiempo] = useState([]);
  const [volume, setVolume] = useState([]);

  const handleRadio = (e) => {
    setRadioPicked(e.target.value);
    setStartDate(null);
    setEndDate(null);
  };

  const handleFechaI = (e) => {
    setStartDate(e.target.value);
  };

  const handleFechaF = (e) => {
    setEndDate(e.target.value);
  };

  const handleIntervalo = (e) => {
    setIntervalo(e.target.value);
  };

  const getCotizaciones = () => {
    getCotizacionReal(symbol, intervalo)
      .then((rta) => {
        let arrRta = rta.data.values.map(({ datetime, volume }) => {
          return {
            date: datetime.split(" ", 2)[1],
            volume,
          };
        });
        setTiempo(arrRta.map((a) => a.date));
        setVolume(arrRta.map((a) => a.volume));
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire("Error", `${err.message}`, "error");
      });
  };

  const handleCotizacionHistorico = () => {
    console.log(radioPicked);
    radioPicked === 1
      ? getCotizaciones()
      : getCotizacionHistorico(symbol, intervalo, startDate, endDate).then(
          (rta) => console.log(rta)
        );
  };

  useEffect(() => {
    handleCotizacionHistorico();
  }, [intervalo, startDate, endDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      getCotizaciones();
    }, 10000);
    return () => clearInterval(interval);
  }, [intervalo, radioPicked]);

  return {
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
    handleCotizacionHistorico,
  };
};
