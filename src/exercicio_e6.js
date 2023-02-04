const alunos = [
    {nome: 'Juan', nota: 6.5},
    {nome: 'María', nota: 4.7},
    {nome: 'Pedro', nota: 9},
    {nome: 'Ana Paula', nota: 8},
    {nome: 'Rodrigo', nota: 3},
    {nome: 'Tháis', nota: 5},
    {nome: 'Lucas', nota: 2},
    {nome: 'Laura', nota: 10},
    {nome: 'João', nota: 5.5},
    {nome: 'Liliam', nota: 8.3},
    {nome: 'Eduardo', nota: 7},
];

function filtraAlunosNotaAcimaDeSete(alunos) {
    return alunos.filter(aluno => aluno.nota >= 7); // retorna todos alunos com nota maior ou igual que 7
}

// function filtraAlunosNotaAcimaDeSete(alunos) { 
//     return alunos.find(aluno => aluno.nota >= 7);  // retorna o primeiro aluno com nota maior que 7
// }

console.log(filtraAlunosNotaAcimaDeSete(alunos)); 

// console.log(alunos);

// const notas = alunos.map(aluno => aluno.nota); // retorna da const alunos o map das notas dos alunos

// console.log(notas);