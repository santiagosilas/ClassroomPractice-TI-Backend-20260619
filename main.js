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
