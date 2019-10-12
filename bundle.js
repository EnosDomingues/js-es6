"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Desafio 1 - Exercício 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
//Desafio 1 - Exercício 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // a) Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var idades = usuarios.map(function (element) {
  return element.idade;
}); // b) Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18

var usuariosRocket = usuarios.filter(function (element) {
  return element.empresa === 'Rocketseat' && element.idade > 18;
}); // c) Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

var usuarioGoogle = usuarios.find(function (element) {
  return element.empresa === 'Google';
}); // d) Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

console.log(usuarios.map(function (element) {
  return _objectSpread({}, element, {
    "idade": element.idade * 2
  });
}).filter(function (element) {
  return element.idade <= 50;
})); // Desafio 1 - Exercício 3
// a) Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
var arr2 = arr.map(function (item) {
  return item + 10;
});
console.log(arr2); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);

var mostraIdade2 = function mostraIdade2(usuario) {
  return usuario.idade;
}; // 3.3
// Dica: Utilize uma constante pra function


var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);

var mostraUsuario2 = function mostraUsuario2() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario2(nome, idade));
console.log(mostraUsuario2(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var promise2 = function promise2() {
  return new Promisse(function (resolve, reject) {
    return resolve();
  });
}; // b) Desestruturação simples
// A partir do seguinte objeto:


var empresa = {
  nome1: 'Rocketseat',
  endereco1: {
    cidade1: 'Rio do Sul',
    estado1: 'SC'
  }
}; // Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
// fim deve ser possível fazer o seguinte:
// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

var nome1 = empresa.nome1,
    _empresa$endereco = empresa["endereco1"],
    cidade1 = _empresa$endereco.cidade1,
    estado1 = _empresa$endereco.estado1;
console.log(nome1);
console.log(cidade1);
console.log(estado1); // c) 4.2 Desestruturação em parâmetros
// Na seguinte função:

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
}); // Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
// separadamente e a função poder retornar apenas: return `${nome} tem ${idade} anos.`;

function mostraInfo2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo2({
  nome: 'Diego',
  idade: 23
})); // d) Utilizando o operador de rest/spread (...) realize as seguintes operações:
//5.1 Rest
//A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
//posição do vetor e outra variável y que recebe todo restante dos dados.

var arr1 = [1, 2, 3, 4, 5, 6];
var x1 = arr1[0],
    y1 = arr1.slice(1);
console.log(x1, y1); // Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

var soma = function soma() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  return parametros.reduce(function (a, b) {
    return a + b;
  });
};

console.log(soma(1, 2, 3, 4, 5)); // 5.2 Spread
// A partir do objeto e utilizando o operador spread:

var usuario11 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario22 = _objectSpread({}, usuario11, {
  nome: "Enos"
});

var usuario33 = _objectSpread({}, usuario11, {
  endereco: _objectSpread({}, usuario11.endereco, {
    cidade: "Recife",
    uf: "PE"
  })
}); // d) Converta o seguinte trecho de código utilizando Template Literals:


var usuario44 = 'Diego';
var idade44 = 23; //console.log('O usuário ' + usuario44 + ' possui ' + idade44 + ' anos');

console.log("O usu\xE1rio ".concat(usuario44, " possui ").concat(idade, " anos.")); // e) Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

var nome111 = 'Diego';
var idade111 = 23;
var usuario66 = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul'
};
var usuario77 = {
  nome111: nome111,
  idade111: idade111,
  cidade: "Recife"
};
console.log(usuario77);
