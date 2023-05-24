
var addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    alert('Product added to cart');
  });
});

