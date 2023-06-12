document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form inputs
    const vegbiryaniquantity = parseInt(document.getElementById('vegbiryaniquantity').value) || 0;
    const macroniquantity = parseInt(document.getElementById('macroniquantity').value) || 0;
    const maggiquantity = parseInt(document.getElementById('maggiquantity').value) || 0;
  
    // Calculate total price
    const vegbiryaniprice = 40;
    const macroniprice = 30;
    const maggiprice = 25;
    const totalPrice = vegbiryaniquantity*vegbiryaniprice + macroniquantity * macroniprice +maggiquantity * maggiprice;
  
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
      <p>Veg-Biryani: ${vegbiryaniquantity}</p>
      <p>Macroni: ${macroniquantity}</p>
      <p>Maggi: ${maggiquantity}</p>
      <h3>Total Price: ${totalPrice}</h3>
      <button id="payqr" >PAY NOW</button>
    `;
    document.getElementById("payqr").addEventListener("click", qr);

  });
  