function adicionar(){
    //recuperar nome, quantiade e valor do produto
    let nomeValorProduto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    //calcular  subtotal
    let valor = nomeValorProduto.match(/R\$(\d+)/)[1];
    let produtoCarrinho = valor

    console.log("Produto:", nomeValorProduto);
    console.log("Valor unitário: R$", valor);
    console.log("Quantidade:", quantidade);

    //adicionar no carrinho
    //atualizar o valor total
}

function limpar (){

}