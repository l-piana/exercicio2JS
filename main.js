const joao = new Aluno("João",10,6);
const maria = new Aluno("Maria",9, 7);
const pedro = new Aluno("Pedro",5,6);
const listaAlunos = []


function Aluno(nome, nota1, nota2) {
  this.nome = nome,
  this.nota1 = Number(nota1),
  this.nota2 = Number(nota2)
}

const media = (num1, num2) => {
  let resultado = (num1 + num2) / 2;
  return resultado
}


listaAlunos.push(joao);
listaAlunos.push(maria);
listaAlunos.push(pedro);



for (i in listaAlunos){
  let aluno = listaAlunos[i];
  let mediaAluno = media(aluno.nota1,aluno.nota2)
  
 if (mediaAluno >= 7) {
  alert(`A média do(a) aluno(a) ${aluno.nome} é: ` + mediaAluno +
   `\nParabens ${aluno.nome}! Voce foi aprovado(a) no concurso!`)
 }
 else{
  alert(`A média do(a) aluno(a) ${aluno.nome} é: ` + mediaAluno +
  `\nNão foi dessa vez, ${aluno.nome}! Tente novamente!`)
 }
}
