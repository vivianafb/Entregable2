const operacion = (num1: number, num2: number, operacion: string) => {
 const promesa =  new Promise((resolve, reject) => {
    import('./funciones.js')
    .then((modulo) => {
      if (operacion == 'resta'){
         resolve(modulo.resta(num1, num2));
      }
      else {
        resolve(modulo.suma(num1, num2));
      }
    });
  });
  return promesa;
};
  
  const operaciones = () => {
    operacion(21, 3, 'suma')
    .then((resultado) => {
      console.log(resultado);
    });
    operacion(21, 3, 'resta')
    .then((resultado) => {
      console.log(resultado);
    });
  };
  
  operaciones();