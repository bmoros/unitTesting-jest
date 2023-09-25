
function sumAndCheck(num1, num2) {
    const result = num1 + num2;
    if (result > 10) {
        return true;
    } else {
        return false;
    }
}

function ordenar(lista) {
  let i = 1;
  while (i < lista.length) {
    let j = i - 1;
    while (j >= 0 && lista[j] > lista[j + 1]) {
      let temp = lista[j];
      lista[j] = lista[j + 1];
      lista[j + 1] = temp;
      j = j - 1;
    }
    i = i + 1;
  }
  return lista;
}

module.exports = {
  sumAndCheck,
  ordenar,
};