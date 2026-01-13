// ==========================================
//           Security / Session
// ==========================================
const userSession = localStorage.getItem('alke_user');

if (!userSession) {
    window.location.href = 'login.html';
}

const user = JSON.parse(userSession);

// ==========================================
//           App logic (JQuery)
// ==========================================

$(document).ready(function () {

  // --- Dashboard Initialization ---

  // Show user name in navbar (if exists)
  $('#user-name-display').text(user.name);

  let walletRaw = localStorage.getItem("alke_wallet");
  let wallet;

  if (!walletRaw) {
      // Fallback if wallet doesn't exist.
      wallet = { balance: 0, transactions: [] };
      localStorage.setItem("alke_wallet", JSON.stringify(wallet));
  } else {
      wallet = JSON.parse(walletRaw);
  }

  // Update balance in DOM
  $("#wallet-balance").text(`$${wallet.balance.toLocaleString('es-CL')}`);
  
  renderTransactions();
});



    // --- Deposit Functionality ---
    
    // Listen for the 'submit' event on the deposit form
    $("#deposit-form").on("submit", function (event) {
      event.preventDefault(); // Prevents the page from reloading

      // 1. Get data
      const amountInput = $("#deposit-amount");
      const amount = Number(amountInput.val());

      // 2. Basic validations
      if (amount <= 0 || isNaN(amount)) {
          alert("Por favor, Ingresa un número mayor a 0");
          return;
      }

      // 3. Get current wallet data (To ensure they are fresh)
      // Re-read localStorage in case it changed in another tab
      const currentWallet = JSON.parse(localStorage.getItem("alke_wallet"));
      
      // 4. Add to balance
      currentWallet.balance += amount;

      // 5. Add record to history (Useful for Ticket 4)
      const transaction = {
          type: "deposit",
          amount: amount,
          date: new Date().toLocaleDateString(),
          description: "Deposito realizado"
      };
      // If the array doesn't exist, create it
      if(!currentWallet.transactions) currentWallet.transactions = [];
      currentWallet.transactions.push(transaction);

      // 6. Save changes (Persistence)
      localStorage.setItem("alke_wallet", JSON.stringify(currentWallet));

      // 7. UI Feedback
      $("#deposit-alert").removeClass("d-none"); // Show green alert
      amountInput.val(""); // Clear form
      
      // Visually update balance if on the same screen 
      $("#wallet-balance").text(`$${currentWallet.balance.toLocaleString('es-CL')}`);

      // Update transactions table
      renderTransactions();
  });

  
  // UX: Hide alert when user starts typing again
  $("#deposit-amount").on("input", function () {
      $("#deposit-alert").addClass("d-none");
  });


  // --- Transference functionality ---

    // 1. DATA: simulated contacts list
    const contacts = [
      "Ana María",
      "Betzabeth Gonzalez",
      "Carlos Perez",
      "David Loza",
      "Elena Nito",
      "Federico Diaz",
      "Goku Son"
  ];

  // 2. Autocomplete: Populate the HTML <datalist> with our contacts
  const $dataList = $("#contact-list");
  contacts.forEach(contact => {
      $dataList.append(`<option value="${contact}">`);
  });

  // 3. Send logic
  $("#send-money-form").on("submit", function(event) {
      event.preventDefault();

      // get values
      const contactName = $("#contact-input").val();
      const amount = Number($("#amount-input").val());

      // A. amount validation
      if (amount <= 0 || isNaN(amount)) {
          alert("Por favor ingresa un monto válido.");
          return;
      }

      // B. Contact validation: check if the user wrote something that's in our list
      if (!contacts.includes(contactName)) {
          alert("El contacto no existe en tu agenda.");
          return;
      }

      // C. Funds validation: Read current balance 
      const currentWallet = JSON.parse(localStorage.getItem("alke_wallet"));

      if (amount > currentWallet.balance) {
          // ERROR: Insufficient funds
          alert(`Fondos insuficientes. Tienes $${currentWallet.balance} y quieres enviar $${amount}.`);
          return;
      }

      // --- Succesful transaction ---

      // 1. Deduct money from balance
      currentWallet.balance -= amount;

      // 2. Create registry 
      const transaction = {
          type: "payment", // "payment" --> 'pago'
          amount: amount,
          date: new Date().toLocaleDateString(),
          description: `Envío a ${contactName}`
      };

      if (!currentWallet.transactions) currentWallet.transactions = [];
      currentWallet.transactions.push(transaction);

      // 3. Save in localStorage
      localStorage.setItem("alke_wallet", JSON.stringify(currentWallet));

      // 4. Visual feedback
      alert(`¡Transferencia exitosa! Has enviado $${amount} a ${contactName}.`);
      
      // 5. Redirect to menu or clear form
      // A: Clean form
      $("#contact-input").val("");
      $("#amount-input").val("");
      
      // B: Update balance in navbar
      $("#wallet-balance").text(`$${currentWallet.balance.toLocaleString('es-CL')}`);
      $(".available-balance").text(`$${currentWallet.balance.toLocaleString('es-CL')}`);

      // Update transactions table
      renderTransactions();
  });
  

  // UX: Display balance in input help text on page load
  if (wallet) {
      $(".available-balance").text(`$${wallet.balance.toLocaleString('es-CL')}`);
  }

  function renderTransactions() {
    const $tableBody = $("#transactions-body");
    
    // If we are not on the transactions page, exit the function
    if ($tableBody.length === 0) return;

    // Clear the table first
    $tableBody.empty();

    // 1. Read wallet data
    const walletData = JSON.parse(localStorage.getItem("alke_wallet"));
    
    // 2. Validate if there are transactions
    if (!walletData || !walletData.transactions || walletData.transactions.length === 0) {
        $tableBody.append('<tr><td colspan="4" class="text-center">No hay movimientos registrados.</td></tr>');
        return;
    }    

    // 3. Loop through the transactions array (we use reverse to show the most recent first)
    walletData.transactions.reverse().forEach(tx => {
        // Conditional styles: green for deposit, red for payment/send
        const isDeposit = tx.type === 'deposit';
        const badgeClass = isDeposit ? 'badge-success' : 'badge-danger';
        const typeText = isDeposit ? 'Depósito' : 'Envío';
        const amountColor = isDeposit ? 'text-success' : 'text-danger';
        const amountPrefix = isDeposit ? '+' : '-';

        const row = ` 
            <tr>
                <td>${tx.date}</td>
                <td>${tx.description}</td>
                <td><span class="badge ${badgeClass}">${typeText}</span></td>
                <td class="text-right font-weight-bold ${amountColor}">
                    ${amountPrefix} $${tx.amount.toLocaleString('es-CL')}
                </td>
            </tr>
        `;
        $tableBody.append(row);
    });
}