const filme = {
    nome: prompt("Digite o nome do filme:"),
    classificacao: parseInt(prompt("Digite a classificação:"))
};

console.log(`Filme: ${filme.nome}`);
if (filme.classificacao >= 18) {
    console.log("Faixa etária: Adulto");
} else if (filme.classificacao >= 14) {
    console.log("Faixa etária: Adolescente");
} else if (filme.classificacao >= 10) {
    console.log("Faixa etária: Criança maior");
} else {
    console.log("Faixa etária: Livre");
}
