function emprestimoLivro(aluno,livro, dataDevolução){
    if(aluno.data<=dataDevolução){
        return true
    }
    return false
}

module.exports=emprestimoLivro