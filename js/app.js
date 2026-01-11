// Security check: this script runs immediately when the page loads.

// Check if user is logged in
const userSession = localStorage.getItem('alke_user');

// If no session exists, redirect to login
if (!userSession) {
    console.warn("No active session found. Redirecting to login...");
    window.location.href = 'login.html';
}

// If session exists, parse the data for use in the app
const user = JSON.parse(userSession);
console.log("Welcome back, " + user.name);

// -- APP LOGIC STARTS HERE --
$(document).ready(function() {
    // Here the Dashboard will be implemented
});