let miUrl = null;
let miObjeto = null;
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);
function parsearUrl(laURL){
   try {
      const url = new URL(laURL);
      return {
         protocolo: url.protocol,
         host: url.host,
         puerto: url.port,
      };
   } catch (e) {
      console.error('Error al parsear la URL:', e.message || e);
      return {
         protocolo: null,
         host: null,
         puerto: null,
      };
   }

}