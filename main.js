function Pessoa(nome) {
    this.nome = nome;
    this.nomeFuncionario = function() {
        console.log("Funcionário: " + this.nome)
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return `Salário: ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.cargoFuncionario = function() {
    console.log("Cargo: "+this.cargo);
    }

    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Carlos", "Gerente", 8000);
const funcionario2 = new Funcionario("Ana", "Ui-Ux", 5000);
const funcionario3 = new Funcionario("Rodrigo", "Dev Front-end", 5000);


funcionario1.nomeFuncionario();
funcionario1.cargoFuncionario();
funcionario1.setSalario();

console.log(funcionario1.getSalario());

funcionario2.nomeFuncionario();
funcionario2.cargoFuncionario();
funcionario2.setSalario();

console.log(funcionario2.getSalario());

funcionario3.nomeFuncionario();
funcionario3.cargoFuncionario();
funcionario3.setSalario();

console.log(funcionario3.getSalario());