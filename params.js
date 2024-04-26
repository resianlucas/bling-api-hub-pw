function buildQueryString(params) {
    var queryString = '';
    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        if (queryString.length > 0) {
          queryString += '&';
        }
        queryString += encodeURIComponent(key) + '%5B%5D=' + encodeURIComponent(params[key]);
      }
    }
    return queryString;
  }