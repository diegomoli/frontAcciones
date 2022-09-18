import axios from "axios";

const API_URL = "https://api.twelvedata.com/";
const API_KEY = "0d46015caa8a4ad0adf673f6a0ca7f71";

export const getAcciones = () => {
  return axios.get(`${API_URL}stocks?source=docs&exchange=NYSE`);
};

export const getCotizacionReal = (symbol, intervalo) => {
  console.log("getReal");
  return axios.get(
    `${API_URL}time_series?symbol=${symbol}&interval=${intervalo}min&apikey=${API_KEY}`
  );
};
export const getCotizacionHistorico = (
  symbol,
  intervalo,
  startDate,
  endDate
) => {
  console.log("getHisotico");
  return axios.get(
    // `${API_URL}time_series?symbol=${symbol}&interval=${intervalo}min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=${API_KEY}`
    `${API_URL}time_series?symbol=TSLA&interval=5min&start_date=2021-04-16%2009:48:00&end_date=2021-04-16%2019:48:00&apikey=${API_KEY}`
  );
};
