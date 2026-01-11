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

$(document).ready(function () {

  const walletRaw = localStorage.getItem("alke_wallet");

  if (!walletRaw) {
    console.warn("No existe la wallet en localStorage");
    return;
  }

  const wallet = JSON.parse(walletRaw);
  const balance = wallet.balance;

  $("#wallet-balance").text(`$${balance}`);

});


$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault(); // evita recarga de página

    console.log("Formulario de depósito enviado");
  });

});

$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault();

    const amount = Number($("#deposit-amount").val());

    if (amount <= 0 || isNaN(amount)) {
      alert("Ingresa un monto válido");
      return;
    }

    console.log("Monto válido ingresado:", amount);
  });

});

$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault();

    const amount = Number($("#deposit-amount").val());

    if (amount <= 0 || isNaN(amount)) {
      alert("Ingresa un monto válido");
      return;
    }

    const walletRaw = localStorage.getItem("alke_wallet");

    if (!walletRaw) {
      alert("No se encontró la billetera");
      return;
    }

    const wallet = JSON.parse(walletRaw);

    console.log("Wallet actual:", wallet);
    console.log("Balance actual:", wallet.balance);
    console.log("Monto a depositar:", amount);
  });

});

$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault();

    const amount = Number($("#deposit-amount").val());

    if (amount <= 0 || isNaN(amount)) {
      alert("Ingresa un monto válido");
      return;
    }

    const walletRaw = localStorage.getItem("alke_wallet");

    if (!walletRaw) {
      alert("No se encontró la billetera");
      return;
    }

    const wallet = JSON.parse(walletRaw);

    const previousBalance = wallet.balance;
    wallet.balance = wallet.balance + amount;

    console.log("Balance anterior:", previousBalance);
    console.log("Monto depositado:", amount);
    console.log("Nuevo balance:", wallet.balance);
  });

});
///Aca se guardan los cambios en el localStorage 
$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault();

    const amount = Number($("#deposit-amount").val());

    if (amount <= 0 || isNaN(amount)) {
      alert("Ingresa un monto válido");
      return;
    }

    const walletRaw = localStorage.getItem("alke_wallet");

    if (!walletRaw) {
      alert("No se encontró la billetera");
      return;
    }

    const wallet = JSON.parse(walletRaw);

    const previousBalance = wallet.balance;
    wallet.balance = wallet.balance + amount;

    localStorage.setItem("alke_wallet", JSON.stringify(wallet));

    console.log("Balance anterior:", previousBalance);
    console.log("Monto depositado:", amount);
    console.log("Nuevo balance guardado:", wallet.balance);
  });

});

$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault();

    const amount = Number($("#deposit-amount").val());

    if (amount <= 0 || isNaN(amount)) {
      alert("Ingresa un monto válido");
      return;
    }

    const walletRaw = localStorage.getItem("alke_wallet");

    if (!walletRaw) {
      alert("No se encontró la billetera");
      return;
    }

    const wallet = JSON.parse(walletRaw);

    wallet.balance = wallet.balance + amount;

    localStorage.setItem("alke_wallet", JSON.stringify(wallet));

    // 👉 PASO 6: mostrar alert
    $("#deposit-alert").removeClass("d-none");

    console.log("Depósito realizado con éxito");
  });

});

$(document).ready(function () {

  $("#deposit-form").on("submit", function (event) {
    event.preventDefault();

    const amount = Number($("#deposit-amount").val());

    if (amount <= 0 || isNaN(amount)) {
      alert("Ingresa un monto válido");
      return;
    }

    const walletRaw = localStorage.getItem("alke_wallet");

    if (!walletRaw) {
      alert("No se encontró la billetera");
      return;
    }

    const wallet = JSON.parse(walletRaw);

    wallet.balance = wallet.balance + amount;

    localStorage.setItem("alke_wallet", JSON.stringify(wallet));

    // Mostrar mensaje de éxito
    $("#deposit-alert").removeClass("d-none");

    // Limpiar input
    $("#deposit-amount").val("");
  });

  // UX extra: ocultar alert cuando el usuario empieza a escribir de nuevo
  $("#deposit-amount").on("input", function () {
    $("#deposit-alert").addClass("d-none");
  });

});
