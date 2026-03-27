
import axios from "axios";
const APIKEY = "5b3538ac"; 
const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};


console.log('respuesta', respuesta);


  const requestString = `http://www.omdbapi.com/?t=avenger&apikey=5b3538ac` + searchText + "&page" + page;

  const apiResponse = await axios.get(requestString);
  returnObject.respuesta=apiResponse.data
  returnObject.cantidadTotal=apiResponse.Search.TotalResult

  return apiResponse.data;


return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};