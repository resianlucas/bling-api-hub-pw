let sheetDeposito = spreadsheet.getSheetByName('Deposito');
var idDeposito = sheetDeposito.getRange('D2').getValue();
var dataHora = new Date();
var dataHoraAtual = Utilities.formatDate(dataHora, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss");

var endpoint = '';


function getDeposito() {

  var endpoint = '/depositos'

  var url = baseUrl + endpoint; 

  let options = {
  'method': 'get',
  'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${acessToken}`
    },
    'muteHttpExceptions': true
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());
  console.log(ress);

  /*

  sheetDeposito.getRange('B2').setValue(ress.data[0].saldoFisicoTotal);
  sheetDeposito.getRange('C2').setValue(ress.data[0].saldoVirtualTotal);
  sheetDeposito.getRange('D2').setValue(ress.data[0].depositos[0].id);
  sheetDeposito.getRange('E2').setValue(ress.data[0].depositos[0].saldoFisico);
  sheetDeposito.getRange('F2').setValue(ress.data[0].depositos[0].saldoVirtual);

  */

}

function getDepositoById(idDeposito) {

  var endpoint = `/depositos/${idDeposito}`

  var url = baseUrl + endpoint;

  let options = {
  'method': 'get',
  'headers': {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${acessToken}`
    },
    'muteHttpExceptions': true
  };

  let reqs = UrlFetchApp.fetch(url, options);
  let ress = JSON.parse(reqs.getContentText());
  console.log(ress);

  /*

  sheetDeposito.getRange('B2').setValue(ress.data[0].saldoFisicoTotal);
  sheetDeposito.getRange('C2').setValue(ress.data[0].saldoVirtualTotal);
  sheetDeposito.getRange('D2').setValue(ress.data[0].depositos[0].id);
  sheetDeposito.getRange('E2').setValue(ress.data[0].depositos[0].saldoFisico);
  sheetDeposito.getRange('F2').setValue(ress.data[0].depositos[0].saldoVirtual);

  */

}

function teste1() {
  getDeposito()
}









