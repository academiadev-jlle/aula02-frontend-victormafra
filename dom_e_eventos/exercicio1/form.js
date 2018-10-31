document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    atualizaSugestoes();

    document.querySelector('#btn-cadastrar').addEventListener('click', btnCadastrarClick);
}

function btnCadastrarClick(evet) {
    const form = document.querySelector('.form-acoes');
    const sigla = form.sigla.value;
    const cotacao = form.cotacao.value;

    const row = document.createElement('tr');
    const infoSigla = document.createElement('td');
    const infoCotacao = document.createElement('td');
    const infoSugestao = document.createElement('td');

    infoSigla.textContent = sigla;
    infoCotacao.textContent = cotacao;
    infoSugestao.textContent = sugere(cotacao);


    row.appendChild(infoSigla);
    row.appendChild(infoCotacao);
    row.appendChild(infoSugestao);

    const tabela = document.querySelector('.tabela-cotacoes tbody');
    tabela.append(row);

    form.reset();
}

function atualizaSugestoes() {
    const acoes = document.querySelectorAll('.acao');

    acoes.forEach(acao => {
        const cotacao = acao.querySelector('.info-cotacao').textContent;
        const sugestao = acao.querySelector('.info-sugestao');
        const novaSugestao = sugere(cotacao);
        
        sugestao.textContent = novaSugestao;
        sugestao.classList.add(sugereClasse(cotacao));
    });
}

function sugere(cotacao) {
    if(cotacao==50)
        return "Manter em carteira";
    if(cotacao<50)
        return "Comprar";
    return "Vender";
}

function sugereClasse(cotacao){
    if(cotacao==50)
        return "manter";
    if(cotacao<50)
        return "comprar";
    return "vender";
}