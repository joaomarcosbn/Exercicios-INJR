function multiplicarMatrizes(matriz1, matriz2) {
    //Para fazer o testo, vou criar uma função que facilita somente os inputs dos dados das matrizes
  
    // Verificando se as dimensões são compatíveis para multiplicação
    if (matriz1[0].length !== matriz2.length) {
      throw new Error(
        "O número de colunas da matriz 1 deve ser igual ao número de linhas da matriz 2."
      );
    }
  
    const matrizResultante = new Array(matriz1.length).fill(0).map((linha) =>
      new Array(matriz2[0].length).fill(0)
    );
  
    // Realizando a multiplicação elemento a elemento
    for (let i = 0; i < matriz1.length; i++) {
      for (let j = 0; j < matriz2[0].length; j++) {
        for (let k = 0; k < matriz2.length; k++) {
          matrizResultante[i][j] += matriz1[i][k] * matriz2[k][j];
        }
      }
    }
  
    return matrizResultante;
  }
  
  //Teste A
  const matriz1Teste1 = [[2, -1], [2, 0]];
  const matriz2Teste1 = [[2, 3], [-2, 1]];
  const matrizResultanteTeste1 = multiplicarMatrizes(matriz1Teste1, matriz2Teste1);
  console.log("Resultado teste 1:", matrizResultanteTeste1);
  
  //Teste B
  const matriz1Teste2 = [[4, 0], [-1, -1]];
  const matriz2Teste2 = [[-1, 3], [2, 7]];
  const matrizResultanteTeste2 = multiplicarMatrizes(matriz1Teste2, matriz2Teste2);
  console.log("Resultado teste 2:", matrizResultanteTeste2);