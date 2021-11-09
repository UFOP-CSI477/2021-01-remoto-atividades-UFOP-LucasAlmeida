$(document).ready(function () {
    let dropdown = $('#instituicao');

    dropdown.empty();
    
    dropdown.append('<option selected="true" disabled>Selecione a Instituicao</option>');
    dropdown.prop('selectedIndex', 0);
    
    const url = 'https://brasilapi.com.br/api/banks/v1';
    
    // Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
      $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.fullName).text(entry.name));
      })
    });
    
});

function popularTabela(){
    tabela = document.getElementById("tabela");
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    if(document.getElementById('recebimento').checked) {
        td3.innerHTML = document.getElementById('recebimento').value;
      }else if(document.getElementById('pagamento').checked) {
        td3.innerHTML = document.getElementById('pagamento').value;
    }
    td2.innerHTML = document.getElementById('valor').value;
    td1.innerHTML = document.getElementById('data').value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    tabela.children[0].appendChild(row);
}

function calcularSaldo(){
    tabela = document.getElementById("tabela");
}