let sheetEstoque = spreadsheet.getSheetByName('Estoque');
var idProduto = sheetEstoque.getRange('A2').getValue();
var idDeposito = sheetEstoque.getRange('D2').getValue();
var idEstoque;
var dataHora = new Date();
var dataHoraAtual = Utilities.formatDate(dataHora, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

var endpoint = '';

function getEstoque(params) {

  endpoint = '/estoques/saldos'

  var url = baseUrl + endpoint;

  var params = {idsProdutos: idProduto}

  if (params) {
    var queryString = buildQueryString(params)
    url += '?' + queryString;
  }

  let options = {
  'method': 'get',
  'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${acessToken}`
    }
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());
  console.log(ress.data[0]);

  sheetEstoque.getRange('B2').setValue(ress.data[0].saldoFisicoTotal);
  sheetEstoque.getRange('C2').setValue(ress.data[0].saldoVirtualTotal);
  sheetEstoque.getRange('D2').setValue(ress.data[0].depositos[0].id);
  sheetEstoque.getRange('E2').setValue(ress.data[0].depositos[0].saldoFisico);
  sheetEstoque.getRange('F2').setValue(ress.data[0].depositos[0].saldoVirtual);

}

function createEstoque(idProduto) {

  endpoint = '/estoques'

  var url = baseUrl + endpoint;

  let options = {
  'method': 'post',
  'payload': {
      'idProduto': idProduto,
      'idDeposito': 5939839409,
      "operacao": "B",
      "quantidade": 5,
      "preco": 0,
      "custo": 0,
      "observacoes": "Observações de estoque"
    },
  'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${acessToken}`
    },
  'muteHttpExceptions': true
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());
  console.log(ress);
}

function updateEstoque(idEstoque) {

  endpoint = `/estoques/${idEstoque}`

  var url = baseUrl + endpoint;

  let options = {
  'method': 'put',
  'payload': JSON.stringify(
    {
      "operacao": "B",
      "preco": 1500.75,
      "custo": 1500.75,
      "quantidade": 50.75,
      "observacoes": "Observações de estoque",
      "data": "2023-02-10 11:41:27"
    }),
  'headers': {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${acessToken}`
    },
  'muteHttpExceptions': true
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());
  console.log(ress);
}

function teste() {
  createEstoque(16113558560)
}









