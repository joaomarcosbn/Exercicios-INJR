let nota = 0.0;
let i = 0;

for (i = 0; i < 3; i++) {
  // Get the current score
  const notaAtual = parseFloat(prompt(`Digite a ${i + 1}ª nota: `));

  // Add the current score to the total score
  nota += notaAtual;
}

// Calculate the average score
const media = nota / 3;

// Determine the result based on the average score
if (media >= 6.0) {
  // Student is approved
  console.log(`Aprovado com média: ${media.toFixed(2)}`);
} else {
  // Student is reprobated
  console.log(`Reprovado com média: ${media.toFixed(2)}`);
}