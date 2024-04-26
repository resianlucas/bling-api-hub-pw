function criarGatilho (expiresIn) {
  
    let segInMilisseg = expiresIn * 1000;
  
      ScriptApp.newTrigger('getRefreshToken')
      .timeBased()
      .after(segInMilisseg)
      .create();
  
  }
  