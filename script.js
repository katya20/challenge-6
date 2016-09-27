var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  var keyCode = e.keydown;
  var inputValue = quantityInput.val();
  console.log (e.keyCode);
  // enter key!
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
    console.log("enter");
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < 5; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}