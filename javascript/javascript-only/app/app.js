class App{

  constructor(){
    this.$scope = {};
  }

  bootstrap(callback){
    this.$scope.product = {};
    $.getJSON('data/products.json', (products)=>{
      this.$scope.product.controller = new ProductController(products);
    });

    if(callback) callback(this.$scope);
  }
}

var app;
new App().bootstrap(($scope)=>{
  app = $scope;
});
