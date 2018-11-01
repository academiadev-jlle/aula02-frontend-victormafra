document.addEventListener('DOMContentLoaded', onLoadDOM);

function getJson(url, search){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            updateInfo(response, search);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function clearTable(){
    var tableRef = document.getElementById('tabela-pessoas');
    while ( tableRef.rows.length > 1 ){
        tableRef.deleteRow(1);
    }
}

function updateInfo(response, search) {
    clearTable();
    let allResults = response.results;

    for(let i=0; i<allResults.length; i++){
        const row = document.createElement('tr');
        const info1 = document.createElement('td');
        const info2 = document.createElement('td');
        const info3 = document.createElement('td');

        if(search=="people"){
            info1.textContent = allResults[i].name;
            info2.textContent = allResults[i].eye_color;
            info3.textContent = allResults[i].height;
        } else if(search=="planets"){
            info1.textContent = allResults[i].name;
            info2.textContent = allResults[i].diameter;
            info3.textContent = allResults[i].population;
        }
        row.appendChild(info1);
        row.appendChild(info2);
        row.appendChild(info3);

        const tabela = document.querySelector('.tabela-pessoas tbody');
        tabela.append(row);

    }
}

function updateHeader(content){

    let titulo = document.querySelector('#titulo');
    let field1 = document.querySelector('#header-1');
    let field2 = document.querySelector('#header-2');
    let field3 = document.querySelector('#header-3');
    if(content=="people"){
        titulo.textContent = "People";
        field1.textContent = "Nome";
        field2.textContent = "Cor dos Olhos";
        field3.textContent = "Altura";
    } else if (content=="planets") {
        titulo.textContent = "Planets";
        field1.textContent = "Nome";
        field2.textContent = "Diâmetro";
        field3.textContent = "População";
    }
}

function loadTable(content="people"){
    updateHeader(content);
    let apiURL = "https://swapi.co/api/";
    let url = apiURL + content.toString() + "/";
    getJson(url, content);
}


function onLoadDOM() {
    loadTable();    

    document.querySelector('#btn-cadastrar').addEventListener('click', btnCadastrarClick);
}


function btnCadastrarClick(evet) {
    const form = document.querySelector('.form-acoes');
    const pesquisa = form.pesquisa.value;
    loadTable(pesquisa);
    form.reset();
}