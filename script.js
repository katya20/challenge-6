var quantityInput = $(".element-quantity-input")

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < 5; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}

quantityInput.keydown(function(e) {
  var keyCode = e.keydown;
  var inputValue = quantityInput.val();
  
  // enter key!
  if (keyCode == 13) {	
    console.log("enter");
    addElementsToThePage(inputValue);  
  }
})

