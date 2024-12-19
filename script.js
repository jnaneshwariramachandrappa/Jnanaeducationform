function validateForm() {
    const payment = document.getElementById('payment');
    const paymentError = document.getElementById('payment-error');

    if (payment.value <= 0) {
        paymentError.textContent = 'Payment must be a positive number';
        payment.focus();
        return false;
    } else {
        paymentError.textContent = '';
    }
    // Add other form validation logic here
    return true;
}