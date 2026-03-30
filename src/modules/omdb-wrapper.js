
import axios from "axios";
const APIKEY = "5b3538ac";
const BASE_URL = "http://www.omdbapi.com/?apikey=" + APIKEY
const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    let requestString = `${BASE_URL}&s=${searchText}&page=${page}`
    const apiResponse = await axios.get(requestString);


    if (apiResponse.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = (apiResponse.data.totalResults);
      returnObject.datos = apiResponse.data.Search;
    }
  } catch (error) {
    console.error("Error en la petición:", error);
  }

  return returnObject;



};
const OMDBSearchComplete = async (searchText) =>
  {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  let pagina = 1;
  let resultado = await OMDBSearchByPage(searchText, 1);
for(let i = 0 ; 1 <= 8 ; i++){

let requestString = `${BASE_URL}&s=${searchText}&page=${page}`
    const apiResponse = await axios.get(requestString);


    if (apiResponse.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = (apiResponse.data.totalResults);
      returnObject.datos = apiResponse.data.Search;
    }
   
}
  
    return resultado;
  };

const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };
  // No seas vago, acá hay que hacer el cuerpo de la función!!!
  return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID }