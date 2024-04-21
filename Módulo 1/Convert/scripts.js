const USD = 4.87;
const EUR = 5.32;
const GBP = 4.00;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
});

form.onsubmit = (event) => {
    event.preventDefault();
    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, "US$");
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, "€");
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        let total = formatCurrencyBRL(amount * price);

        result.textContent = `${total} Reais`
        footer.classList.add("show-result");

    } catch (error) {
        footer.classList.remove("show-result");
        alert("Não foi possível converter");
    }
}

function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pr-BR", { style: "currency", currency: "BRL" })
}

