document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const totalDueSpan = document.getElementById('total-due');
    const membershipTypeSelect = document.getElementById('membership-type');
    const classCheckboxes = document.querySelectorAll('input[name="classes"]');

    // Function to update the total due based on selected classes and membership
    function calculateTotalDue() {
        let total = parseInt(membershipTypeSelect.value, 10);
        classCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value, 10);
            }
        });
        totalDueSpan.textContent = `$${total}`;
    }

    // Event listener for changes in the form inputs
    form.addEventListener('change', calculateTotalDue);

    // Custom validation function
    function validateForm(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Resetting custom error messages
        document.querySelectorAll('.error-message').forEach(message => {
            message.textContent = ''; // Clear previous error messages
        });

        // Validation flags
        let isValid = true;

        // Validate each field
        const name = document.getElementById('name');
        const address = document.getElementById('address');
        const phone = document.getElementById('phone');
        const emergencyContact = document.getElementById('emergency-contact');
        const cardName = document.getElementById('card-name');
        const cardNumber = document.getElementById('card-number');
        const expiryDate = document.getElementById('expiry-date');
        const cvv = document.getElementById('cvv');
        const billingZip = document.getElementById('billing-zip');

        // Helper function to show error messages
        function showError(input, message) {
            const container = input.parentElement;
            const error = container.querySelector('.error-message');
            if (error) {
                error.textContent = message;
            } else {
                const errorDiv = document.createElement('div');
                errorDiv.textContent = message;
                errorDiv.className = 'error-message';
                errorDiv.style.color = 'red';
                container.appendChild(errorDiv);
            }
            isValid = false;
        }

        // Name validation
        if (name.value.trim() === '') {
            showError(name, 'Please enter a valid name.');
        }

        // Address validation
        if (address.value.trim() === '') {
            showError(address, 'Please enter a valid address.');
        }

        // Phone validation using a simple regex 
        if (!phone.value.match(/^\d{10}$/)) {
            showError(phone, 'Please enter a valid 10-digit phone number.');
        }

        // Emergency contact validation
        if (!emergencyContact.value.match(/^\d{10}$/)) {
            showError(emergencyContact, 'Please enter a valid 10-digit phone number for emergency contact.');
        }

        // Card Number validation
        if (!cardNumber.value.match(/^\d{16}$/)) {
            showError(cardNumber, 'Please enter a valid 16-digit card number fool!.');
        }

        // CVV validation
        if (!cvv.value.match(/^\d{3}$/)) {
            showError(cvv, 'Please enter a valid 3-digit CVV.');
        }

        // Proceed if all fields are valid
        if (isValid) {
            form.submit();
        }
    }

    // Attach event listener to the form submit event
    form.addEventListener('submit', validateForm);
});
