document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const vegrollquantity = parseInt(document.getElementById('Vegroll-quantity').value) || 0;
    const cheeseburgerquantity = parseInt(document.getElementById('cheeseburgerquantity').value) || 0;
    const friedricequantity = parseInt(document.getElementById('friedricequantity').value) || 0;
  
    // Calculate total price
    const vegrollprice = 20;
    const cheeseburgerPrice = 35;
    const friedriceprice = 40;
    const totalPrice = vegrollquantity * vegrollprice + cheeseburgerquantity * cheeseburgerPrice + friedricequantity * friedriceprice;
  

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
      <p>Veg-Roll: ${vegrollquantity}</p>
      <p>Cheese-Burger: ${cheeseburgerquantity}</p>
      <p>Fried-Rice: ${friedricequantity}</p>
      <h3>Total Price: ${totalPrice}</h3>
      <button id="payqr">PAY NOW</button>
    `

    document.getElementById("payqr").addEventListener("click", qr);


  });
 
 
  