let sheetProduto = spreadsheet.getSheetByName('Produto');
var idProduto =  sheetProduto.getRange('A2').getValue();
var skuProduto = sheetProduto.getRange('B2').getValue();
//var nomeProduto = sheetProduto.getRange('C2').getValue();
var descProduto = sheetProduto.getRange('D2').getValue();

var endpoint = '';

function getProduto(params) {

  endpoint = '/produtos'

  var url = baseUrl + endpoint;

  let options = {
  'method': 'get',
  'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${acessToken}`
    }
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());
  console.log(ress);

  /*

  sheetProduto.getRange('B2').setValue(ress.data[0].saldoFisicoTotal);
  sheetProduto.getRange('C2').setValue(ress.data[0].saldoVirtualTotal);
  sheetProduto.getRange('D2').setValue(ress.data[0].depositos[0].id);
  sheetProduto.getRange('E2').setValue(ress.data[0].depositos[0].saldoFisico);
  sheetProduto.getRange('F2').setValue(ress.data[0].depositos[0].saldoVirtual);

  */

}


function getProdutoBySku(params) {

  endpoint = '/produtos'

  var url = baseUrl + endpoint;

  var params = {
    codigo: skuProduto
    };

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

  console.log(ress);

  sheetProduto.getRange('A2').setValue(ress.data[0].id);
  sheetProduto.getRange('C2').setValue(ress.data[0].nome);
  sheetProduto.getRange('D2').setValue(ress.data[0].descricaoCurta);

}

function getProdutoById(idProduto) {

  endpoint = `/produtos/${idProduto}`

  var url = baseUrl + endpoint;

  let options = {
  'method': 'get',
  'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${acessToken}`
    }
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());

  console.log(ress);

  sheetProduto.getRange('B2').setValue(ress.data.id);
  sheetProduto.getRange('C2').setValue(ress.data.nome);
  sheetProduto.getRange('D2').setValue(ress.data.descricaoCurta);

}


function teste2 () {
  getProdutoById(idProduto);
}








