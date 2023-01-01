function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

   PayPal.Donation.Button({
       env: 'sandbox',
       hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
       // business: 'YOUR_EMAIL_OR_PAYERID',
       image: {
           src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
           title: 'PayPal - The safer, easier way to pay online!',
           alt: 'Donate with PayPal button'
       },
       onComplete: function (params) {
           // Your onComplete handler
       },
   }).render('#paypal-donate-button-container');
