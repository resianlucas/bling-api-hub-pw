// Objeto para itens de coleção de campos de erro padrão
var DefaultErrorFieldsCollectionItemResponse = {
    index: 0,
    code: 0,
    msg: "",
    element: "",
    namespace: ""
  };
  
  // Objeto para campos de erro padrão
  var DefaultErrorFieldsResponse = {
    code: 0,
    msg: "",
    element: "",
    namespace: "",
    collection: [DefaultErrorFieldsCollectionItemResponse]
  };
  
  /**
   * Objeto padrão para erros da API.
   */
  var DefaultErrorResponse = {
    error: {
      type: "",
      message: "",
      description: "",
      fields: [DefaultErrorFieldsResponse]
    }
  };
  