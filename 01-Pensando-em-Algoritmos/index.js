const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++) {
  if (livros[atual].preco < livros[maisBarato].preco) {
    maisBarato = atual
  }
}

console.log(`o livro mais barato é o de: ${livros[maisBarato].titulo} que custa apenas ${livros[maisBarato].preco}`)