let totalGeral;
limpar();

function adicionar(){
    //recuperar nome, quantiade e valor do produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    //calcular  subtotal
    let precoProduto = valorUnitario * quantidade;
    //adicionar no carrinho
    let produtoCarrinho = document.getElementById('lista-produtos');
    produtoCarrinho.innerHTML = produtoCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;    
    //atualizar o valor total
    totalGeral = totalGeral + precoProduto;
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$${totalGeral}`;
    quantidade = document.getElementById('quantidade').value = 0;
}

function limpar (){
    totalGeral = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}