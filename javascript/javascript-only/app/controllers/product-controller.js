class ProductController{

  constructor(products){
    this.products = products;
  }

  fill(el){
    $.each(this.products, (index, product) => {
      let div = el.append('div');
      div.css('col-sm-6');
      div.html(product.name);
    });
  }

}
