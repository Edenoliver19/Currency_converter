// ==========================
// IMPORT READLINE
// ==========================
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ==========================
// CONSTANT EXCHANGE RATES (BASE = RWF)
// ==========================
const RATES = {
    USD: 1300,
    EUR: 1400,
    GBP: 1600,
    JPY: 9,
    RWF: 1
};

// ==========================
// WELCOME
// ==========================
console.log("=================================");
console.log(" Welcome to Currency Converter!");
console.log("=================================");
console.log("1. Convert currencies");
console.log("2. Exit program");

// ==========================
// MAIN MENU
// ==========================
rl.question("Enter your choice (1 or 2): ", function (choice) {

    if (choice === "1") {

        rl.question("Convert FROM (USD, EUR, GBP, JPY, RWF): ", function (fromCurrency) {
            fromCurrency = fromCurrency.toUpperCase();

            if (!RATES[fromCurrency]) {
                console.log("Unsupported currency.");
                rl.close();
                return;
            }

            rl.question("Convert TO (USD, EUR, GBP, JPY, RWF): ", function (toCurrency) {
                toCurrency = toCurrency.toUpperCase();

                if (!RATES[toCurrency]) {
                    console.log("Unsupported currency.");
                    rl.close();
                    return;
                }

                rl.question("Enter amount: ", function (amount) {
                    amount = Number(amount);

                    if (isNaN(amount) || amount <= 0) {
                        console.log("Invalid amount.");
                        rl.close();
                        return;
                    }

                    // ==========================
                    // CONVERSION LOGIC
                    // ==========================
                    const amountInRWF = amount * RATES[fromCurrency];
                    const result = amountInRWF / RATES[toCurrency];

                    console.log(`\n${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`);
                    rl.close();
                });
            });
        });

    } else if (choice === "2") {
        console.log("Goodbye! 👋");
        rl.close();
    } else {
        console.log("Invalid choice.");
        rl.close();
    }
});
