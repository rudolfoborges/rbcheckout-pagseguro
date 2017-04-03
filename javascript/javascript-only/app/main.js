var $scope = {
};

(function(){

  $scope.product = {};

  $.getJSON('data/products.json', (products)=>{
    $scope.product.data = products;
    $scope.product.controller = new ProductController(products);
  });

})();
