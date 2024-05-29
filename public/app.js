document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const matricNumber = document.getElementById('matricNumber').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!validateCardNumber(cardNumber)) {
        alert('Please enter a valid card number.');
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert('Please enter a valid expiry date.');
        return;
    }

    if (!validateCVV(cvv)) {
        alert('Please enter a valid CVV.');
        return;
    }

    alert(`Payment submitted successfully for ${name} with matric number ${matricNumber}.`);
});

function validateCardNumber(cardNumber) {
    const regex = /^\d{16}$/;
    return regex.test(cardNumber);
}

function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    return regex.test(expiryDate);
}

function validateCVV(cvv) {
    const regex = /^\d{3,4}$/;
    return regex.test(cvv);
}
