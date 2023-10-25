/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   //var x = 1;
   //var y = 1;
   //return x === y;
   if (x === y){
      return true;
   }else {
      return false;
   }
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   //var str1 = "Camila";
   //var str2 = "Carmen";
   //return (str1.length === str2.length);
   if (str1.length === str2.length){
      return true;
   } else {
      return false;
   }
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   //var num = 80;
   //return (num < 90);
   if (num < 90){
      return true;
   }else {
      return false;
   }
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50){
      return true;
   }else {
      return false;
   }
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   //var num = 10;
   //return (num % 2 === 0);
   if (num % 2 === 0){
      return true;
   }else {
      return false;
   }
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   //var num = 13;
   //return (num % 2 === 1);
   if (num % 2 === 1){
      return true;
   }else {
      return false;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
