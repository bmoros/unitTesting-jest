const { sumAndCheck, ordenar } = require("./utils");

describe("Test sumAndCheck function", () => {
  test("Adding 7 and 5 is greater than 10", () => {
    expect(sumAndCheck(7, 5)).toBe(true);
  });

  test("Adding 3 and 4 is lower than 10", () => {
    expect(sumAndCheck(3, 4)).toBe(false);
  });
});

describe("Test ordenar function", () => {
  
    test("array vacío devuelve un array vacío", () => {
        const arrayVacio = [];
        expect(ordenar(arrayVacio)).toEqual([]);
    });

    test("Array de un elemento devuelve el mismo array", () => {
        const arrayUno = [1];
        expect(ordenar(arrayUno)).toEqual([1]);   //¡ojo! toBe comparar los objetos no el contenido
    });

    test("Array de dos elementos ordenados devuelve el mismo array", () => {
        const arrayDos = [1, 2];
        expect(ordenar(arrayDos)).toEqual([1,2]);
    });
    
    test("Array de dos elementos desordenados devuelve el array ordenado", () => {
        const arrayDos = [2, 1];
        expect(ordenar(arrayDos)).toEqual([1, 2]);
    });

    test("Array de dos elementos iguales devuelve el mismo array", () => {
      const arrayDos = [1, 1];
      expect(ordenar(arrayDos)).toEqual([1, 1]);
    });

    test("Array de tres elementos ordenados devuelve el mismo array", () => {
      const arrayTres = [1, 2, 3];
      expect(ordenar(arrayTres)).toEqual([1, 2, 3]);
    });

    test("Array de tres elementos los dos últimos iguales devuelve el mismo array", () => {
      const arrayTres = [1, 2, 2];
      expect(ordenar(arrayTres)).toEqual([1, 2, 2]);
    });

    test("Array de tres elementos desordenados devuelve el array ordenado", () => {
      const arrayTres = [1, 3, 2];
      expect(ordenar(arrayTres)).toEqual([1, 2, 3]);
    });

    test("Array de más elementos desordenados devuelve el array ordenado", () => {
      const array = [5, 2, 1, 3];
      expect(ordenar(array)).toEqual([1, 2, 3, 5]);
    });
});
