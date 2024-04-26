let app = SpreadsheetApp;
let spreadsheet = app.getActiveSpreadsheet();
let sheetConfig = spreadsheet.getSheetByName('Config');
let clientId = sheetConfig.getRange('B3').getValue();
let secretkey = sheetConfig.getRange('B4').getValue();
let code = sheetConfig.getRange('B2').getValue();
let acessToken = sheetConfig.getRange('B5').getValue();
let refreshToken = sheetConfig.getRange('B6').getValue();
let baseUrl = 'https://www.bling.com.br/Api/v3';

function getToken (token ='token')
{
  let credentials = Utilities.base64Encode(clientId+':'+secretkey);

  if(token == 'token')

  {
    let options = {
      'method': 'post',
      'payload' : {
        'grant_type':'authorization_code',
        'code':code
      },
      'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${credentials}`
        }
    };
    let reqs = UrlFetchApp.fetch('https://www.bling.com.br/Api/v3/oauth/token', options);
    let ress = JSON.parse(reqs.getContentText());
    console.log(ress)
  }

  else if(token == 'refresh_token')

  {
    let options = {
      'method': 'post',
      'payload' : {
        'grant_type':'refresh_token',
        'refresh_token': refreshToken
      },
      'headers': {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${credentials}`
        }
    };
    let reqs = UrlFetchApp.fetch('https://www.bling.com.br/Api/v3/oauth/token', options);
    let ress = JSON.parse(reqs.getContentText());
    sheetConfig.getRange('B5').setValue(ress.access_token);
    sheetConfig.getRange('B6').setValue(ress.refresh_token);
    console.log(ress)
    
    criarGatilho(ress.expires_in);
  }
}

function getRefreshToken() {
  getToken(token = 'refresh_token');
}

 










