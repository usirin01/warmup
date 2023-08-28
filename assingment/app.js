function billingFunction(){
    var shippingNameElements = document.getElementById("shippingName");
    var shippingZipElements = document.getElementById("shippingZip");
    var billingInElements = document.getElementById("billingName");
    var billingZipElements = document.getElementById("billingZip");

    if (document.getElementById("same").checked){
        billingInElements.value = shippingNameElements.value; 
        billingZipElements.value = shippingZipElements.value;
    } 
    else{
        billingInElements.value ="";
        billingZipElements.value = "";
    }
}