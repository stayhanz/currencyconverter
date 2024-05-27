function convert() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var endpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            var rates = data[currency];
            var resultUSD = (currency === 'usd') ? amount : (amount / rates['usd']).toFixed(2);
            var resultGTQ = (currency === 'gtq') ? amount : (amount / rates['gtq']).toFixed(2);
            var resultKRW = (currency === 'krw') ? amount : (amount / rates['krw']).toFixed(2);

            document.getElementById('results').innerHTML = `
                <p>${amount} ${currency.toUpperCase()} is equivalent to:</p>
                <p>${resultUSD} USD</p>
                <p>${resultGTQ} GTQ</p>
                <p>${resultKRW} KRW</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('results').innerHTML = 'Error fetching data.';
        });
}
