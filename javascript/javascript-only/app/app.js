class App{

  static bootstrap(callback){
    let $scope = {};
    $scope.product = {};

    $.getJSON('data/products.json', (products)=>{
      $scope.product.controller = new ProductController(products);
    });

    if(callback) callback($scope);
  }
}

var app;
App.bootstrap(($scope)=>{
  app = $scope;
});
