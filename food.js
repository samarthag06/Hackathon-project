document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const pizzaQuantity = parseInt(document.getElementById('pizza-quantity').value) || 0;
    const burgerQuantity = parseInt(document.getElementById('burger-quantity').value) || 0;
    const saladQuantity = parseInt(document.getElementById('salad-quantity').value) || 0;
  
    // Calculate total price
    const pizzaPrice = 10;
    const burgerPrice = 8;
    const saladPrice = 6;
    const totalPrice = pizzaQuantity * pizzaPrice + burgerQuantity * burgerPrice + saladQuantity * saladPrice;
    const paye=document.getElementById('pay');
    function qr(){
  
      paye.innerHTML=`
     <img src="qr.png">
      `
  }
 
    // Display order summary
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = `
      <h2>Order Summary</h2>
      <p>Pizza: ${pizzaQuantity}</p>
      <p>Burger: ${burgerQuantity}</p>
      <p>Salad: ${saladQuantity}</p>
      <h3>Total Price: ${totalPrice}</h3>
      <button id="payqr" >PAY NOW</button>
    `
    document.getElementById("payqr").addEventListener("click", qr);

  });
  