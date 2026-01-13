// Wait for the document to be ready
$(document).ready(function() {
    
    // Mock database (Admin credentials)
    const validUser = {
        email: "admin@alke.com",
        password: "1234",
        name: "Alke Admin"
    };

    // Initial balance (For new session)
    const initialBalance = {
        balance: 5000,
        transactions: []
    };

    // Listen for form submit
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevent HTML form submission

        // Get input values
        const inputEmail = $('#email').val();
        const inputPassword = $('#password').val();

        // Reset previous errors
        $('.form-control').removeClass('is-invalid');
        let hasErrors = false;

        // Validation: Empty fields
        if (!inputEmail) {
            $('#email').addClass('is-invalid');
            hasErrors = true;
        }
        if (!inputPassword) {
            $('#password').addClass('is-invalid');
            hasErrors = true;
        }

        if (hasErrors) {
            return; // Stop execution
        }

        // Validation: Check credentials
        if (inputEmail === validUser.email && inputPassword === validUser.password) {
            
            // --Succesful login--
            console.log("Login successful. Saving session...");

            // Save user data to localStorage (According to Roadmap)
            // We use JSON.stringify because localStorage only saves Strings
            localStorage.setItem('alke_user', JSON.stringify(validUser));
            
            // Initialize wallet data if it doesn't exist
            if (!localStorage.getItem('alke_wallet')) {
                localStorage.setItem('alke_wallet', JSON.stringify(initialBalance));
            }

            // Redirect to Dashboard
            window.location.href = 'menu.html';

        } else {
            // --Failed login--
            console.warn("Invalid credentials");
            $('#email').addClass('is-invalid');
            $('#password').addClass('is-invalid');
            alert("Error: Credenciales incorrectas. Prueba con admin@alke.com / 1234");
        }
    });
});