document.querySelector('.submit').addEventListener('click', function(e) {

    const cardData = {
        number: document.querySelector('#cardNumber input').value,
        holder: document.querySelector('#cardHolder input').value,
        expiry: {
            month: document.getElementById('month').value,
            year: document.getElementById('year').value
        },
        cvc: document.querySelector('#cvc input').value
    };

    if (!cardData.number || !cardData.cvc) {
        alert("Please fill in the card number and CVC!");
        return;
    }

    console.log("Processing Payment for:", cardData.holder);
    console.log("Full Data Object:", cardData);

    setTimeout(() => {
        alert("Payment Successful! Total: $199");
        this.innerText = "Submit";
        this.style.opacity = "1";
        this.disabled = false;
    }, 2000);
});