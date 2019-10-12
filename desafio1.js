// Desafio 1 - Exercício 1
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin(){
    return this.admin;
  }

}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

//Desafio 1 - Exercício 2

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

  // a) Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const idades = usuarios.map(element => element.idade);

  // b) Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
const usuariosRocket = usuarios.filter(element => element.empresa === 'Rocketseat' && element.idade > 18);

  // c) Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const usuarioGoogle = usuarios.find(element => element.empresa === 'Google');

  // d) Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
  // no máximo 50 anos:
console.log((usuarios.map(element => ({ ...element, "idade": element.idade * 2 })).filter(element => element.idade <= 50)));

// Desafio 1 - Exercício 3

  // a) Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

const arr2 = arr.map(item => item + 10);
console.log(arr2);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);

const mostraIdade2 = usuario => usuario.idade;

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostraUsuario2 = (nome ='Diego', idade = 18) => ({nome, idade});
console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome));

// 3.4
const promise = function() {
  return new Promise(function(resolve, reject) {
  return resolve();
  })
 }

const promise2 = () => new Promisse((resolve, reject) => resolve());

  // b) Desestruturação simples
  // A partir do seguinte objeto:

const empresa = {
  nome1: 'Rocketseat',
  endereco1: {
  cidade1: 'Rio do Sul',
  estado1: 'SC',
  }
};
  // Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
  // fim deve ser possível fazer o seguinte:
 
  // console.log(nome); // Rocketseat
  // console.log(cidade); // Rio do Sul
  // console.log(estado); // SC

const { nome1, "endereco1": {cidade1, estado1} } = empresa;

console.log(nome1);
console.log(cidade1);
console.log(estado1);

  // c) 4.2 Desestruturação em parâmetros
  // Na seguinte função:

function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 });

  // Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
  // separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.`;

  function mostraInfo2({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
   }
   console.log(mostraInfo2({ nome: 'Diego', idade: 23 }));

   // d) Utilizando o operador de rest/spread (...) realize as seguintes operações:
   //5.1 Rest
   //A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
   //posição do vetor e outra variável y que recebe todo restante dos dados.

   const arr1 = [1, 2, 3, 4, 5, 6];

   var [x1, ...y1] = arr1;

   console.log(x1, y1);

   // Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

   const soma = (...parametros) => parametros.reduce((a, b) => a + b );
   console.log(soma(1,2,3,4,5));

   // 5.2 Spread
   // A partir do objeto e utilizando o operador spread:

   const usuario11 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

   const usuario22 = { ...usuario11, nome: "Enos" };
   const usuario33 = { ...usuario11, endereco: { ...usuario11.endereco, cidade: "Recife", uf: "PE" } };

   // d) Converta o seguinte trecho de código utilizando Template Literals:
   const usuario44 = 'Diego';
   const idade44 = 23;
   //console.log('O usuário ' + usuario44 + ' possui ' + idade44 + ' anos');
   console.log(`O usuário ${usuario44} possui ${idade} anos.`);

   // e) Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
   const nome111 = 'Diego';
   const idade111 = 23;
   const usuario66 = {
   nome: nome,
   idade: idade,
   cidade: 'Rio do Sul',
   };

   const usuario77 = {
    nome111,
    idade111,
    cidade: "Recife"
   };

   console.log(usuario77);


   


