//Armazena o nome do herói
let nome = "Deadpool";

// Exibe uma mensagem de boas-vindas ao Herói
console.log(`Bem-vindo, ${nome}!`);

//Armaneza o XP do herói
let xp = 10001;

//Armazena o nível do herói
let nivel = "";

//Verifica o nível do herói com base no XP apresentado
if (xp <= 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 6000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else if (xp >= 10001) {
  nivel = "Radiante";
}

//Exibe o resultado do nível do herói utilizando Interpolação de string
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

