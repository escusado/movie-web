// const Fs = require("fs");

console.log("sup this is a node program");
// Fs.writeFileSync("myFile.txt", "this is a content");
// console.log("file written");

// const fileContent = Fs.readFileSync("myFile.txt", "utf-8");
// console.log(">>>>>fileContent", fileContent);

let list = [3, 5, 6, 4, 7, 1.2, 8, 9];
console.log("initial list", list);
/*
1. recorrer arreglo 0 hasta longitud del arreglo
2. tomo indice 0 y comparo indice 1
3. si el indice 1 es mayor hago el switch (los cambio de posicion)
4. y asi sucesivamente

empezar iteracion varias veces
contador
array nuevo con nuevos valores

recursividad? hasta que sucede algo
ocupar un contador y este contador me estaria sumando cada que yo tengo que hacer un cambio de valor hasta que el contador sea igual a 0 entonces estaria dejandose de llamar asi misma la fuincion

*/

const myIterator = function () {
  for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i + 1]) {
      console.log("entered if");
      const temp = list[i + 1];
      list[i + 1] = list[i];
      list[i] = temp;
    } else {
    }
    console.log(">for", i, list);
  }
};

myIterator();
