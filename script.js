var quantityInput = $(".element-quantity-input")


quantityInput.keydown(function(e) {
  var keyCode = e.keyCode;
  var inputValue = quantityInput.val();
  console.log ("hi");
  // enter key!
  if (keyCode == 13) {	
    console.log("enter");
    addElementsToThePage(inputValue);  
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < numberOfElements; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}

