//Variables
/*
var numero = 5;
var numero = 10;

Esto es posible usando "var", puede declararse varias veces 
no marcra ningun error
*/

/**
 * En cambio con let no es posible
 * let numero = 5;
 * let numero = 10;
 * el codigo de arriba marcaria error
 */

 /**
  * Las variables const no son variables, son constantes y 
  * una vez que estas son definidas ya no se pueden modificar
  * tambien es importante mencionar que const se debe inicializar
  * cuando es declarada
  */

/**
 * for (var i = 0; i <= 5; i++)
 * {
 *      console.log(i);
 * }
 * 
 * console.log(i);
 * El codigo de arriba funciona con var, ya que var no se destruye 
 * una vez que termina el ciclo, asi que se vuelve a imprimir con un valor de 6
 */

 /**
 * for (let i = 0; i <= 5; i++)
 * {
 *      console.log(i);
 * }
 * 
 * console.log(i);
 * 
 * El codigo de arriba no funciona con let, ya que let es una variable de 
 * ambiente o scope, por lo tanto esta no puede ser impresa una vez que 
 * el ciclo ha terminado, por lo tanto este codigo marcara un error
 */

/**
 * let i = 50;
 * 
 * for (let i = 0; i <= 5; i++)
 * {
 *      console.log(i);
 * }
 * 
 * console.log(i);
 * 
 * El codigo de arriba funciona sin importar que i se haya declarado 
 * dos veces ya que la i que se declaro para  el ciclo 
 * es distinta de la primera i que se declaro, es como si la 
 * primera fuese global, y la segunda local dentro del ciclo
 */

/**
 * un caso especial de const es que tambien se pueden declara
 * como un areglo, const numeros = [1, 2, 3];
 * para posteriormente ingresar otro valor 
 */
