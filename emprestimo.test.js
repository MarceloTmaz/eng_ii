const emprestimo=require("./emprestimo")
const Aluno=require("./Aluno");
const Livro=require("./Livro")
const emprestimoLivro = require("./emprestimo");
test('entrega 22/10 to equal false', () => {
    const today=new Date('Jul 12 2022')
    const espectativa=new Date('Jul 12 2019')
    const aluno=new Aluno("Kai",today)
    const livro=new Livro("your name");
    expect(emprestimoLivro(aluno,livro,espectativa)).toBeFalsy();
  });