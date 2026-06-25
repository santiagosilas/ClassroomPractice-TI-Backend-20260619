class Endereco {
  constructor(log, num, cid, est, cep) {
    this.logradouro = log;
    this.numero = num;
    this.cidade = cid;
    this.estado = est;
    this.cep = cep;
  }
  obterEnderecoCompleto() {
    const enderecoCompleto = `
    ${this.logradouro} ${this.numero}
    ${this.cidade}-${this.estado}
    ${this.cep}
    `;
    return enderecoCompleto;
  }
}

class Pessoa {
  constructor(nome, cpf, email, endereco) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.endereco = endereco;
  }
  validarCpf() {
    if (this.cpf.length == 11) return true;
    else return false;
  }
}

class Cavaleiro extends Pessoa {
  constructor(nome, cpf, email, armadura, tipo, endereco) {
    super(nome, cpf, email, endereco); // super: chama o ctor da suplerclasse
    this.armadura = armadura;
    this.tipo = tipo;
  }
}

class Empresa {
  constructor(nome, cnpj, end) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.endereco = end;
  }
}

// Uso das Classes
const endIFCE = new Endereco(
  "Rodovia CE-040",
  "S/N",
  "Aracati",
  "CE",
  "62900-000",
);
const endCoelce = new Endereco(
  "Rua Cel. Alexanzito",
  123,
  "Aracati",
  "CE",
  "62900-000",
);
console.log(endIFCE.logradouro);
console.log(endCoelce.logradouro);

const endIFCEComp = endIFCE.obterEnderecoCompleto();
const endCoelceComp = endCoelce.obterEnderecoCompleto();
console.log("End Compl:" + endIFCEComp);
console.log("End Compl:" + endCoelceComp);

const ifce1 = new Empresa("IFCE", 123456, endIFCE);
const cantina = new Empresa("Cantina", 12343223, endIFCE);
const ifce2 = new Empresa(
  "IFCE",
  123456,
  new Endereco("Rod CE-040", "S/N", "Aracati", "CE", "62900-000"),
);
console.log("---");
console.log(ifce1.endereco.obterEnderecoCompleto());
console.log(cantina.endereco.obterEnderecoCompleto());

const endSeya = new Endereco(
  "Rodovia CE-040",
  "S/N",
  "Aracati",
  "CE",
  "62900-000",
);
const endShiryu = new Endereco(
  "Rodovia CE-040",
  "S/N",
  "Aracati",
  "CE",
  "62900-000",
);
const endIkki = new Endereco(
  "Rodovia CE-040",
  "S/N",
  "Aracati",
  "CE",
  "62900-000",
);

const p1 = new Pessoa("Seya", "12345678901", "seya@gmail.com", endSeya);
const p2 = new Pessoa("Shiryu", "223456", "shiryu@gmail.com", endShiryu);
const p3 = new Pessoa("Ikki", "32345678901", "ikki@gmail.com", endIkki);
const pessoas = [p1, p2, p3];

pessoas.forEach((pessoa) => {
  console.log(`
    ${pessoa.nome} 
    ${pessoa.validarCpf() ? "Válido!" : "Inválido"}`);
});

const cavaleiros = [];
const clothes = [
  { arm: "Pégaso", tipo: "Bronze" },
  { arm: "Dragão", tipo: "Bronze" },
  { arm: "Fenix", tipo: "Bronze" },
];
let count = 0;
pessoas.forEach((p) => {
  const { arm, tipo } = clothes[count];
  const c = new Cavaleiro(p.nome, p.cpf, p.email, arm, tipo, p.endereco);
  cavaleiros.push(c);
  count++;
});
cavaleiros.forEach((c) => {
  console.log(`
    ${c.nome} ${c.armadura} ${c.endereco.logradouro} 
    ${c.validarCpf() ? "Válido!" : "Inválido"}`);
});
// PESSOA TEM ENDEREÇO. REFATORAR CÓDIGO.
