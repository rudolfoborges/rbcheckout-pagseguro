class ProductController{

  constructor(products){
    this.products = products;
  }

  fill(el){
    el.html('');

    $.get('app/views/products.html', (view)=>{
      $.each(this.products, (index, product) => {
        var productView = view.replace('{{image}}', product.image)
                              .replace('{{name}}', product.name)
                              .replace('{{price}}', product.price)
                              .replace('{{about}}', product.about);
        $(productView).appendTo(el);
      });
    })

  }

}
