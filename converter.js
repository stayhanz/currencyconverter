function convert() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var access_key = 'cur_live_qUyg2JlPWzTX3jy6v5u8ftYY957Dl3UM8c8qJQzs'; // Replace with your actual API key from currencyapi.com

    // Endpoint from currencyapi.com
    var endpoint = `https://api.currencyapi.com/v3/latest?base=${currency}&key=${access_key}`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            // Assuming the API returns a 'data' object with currency rates
            var rates = data.data;
            var resultUSD = (currency === 'usd') ? amount : (amount * rates['USD']).toFixed(2);
            var resultGTQ = (currency === 'gtq') ? amount : (amount * rates['GTQ']).toFixed(2);
            var resultKRW = (currency === 'krw') ? amount : (amount * rates['KRW']).toFixed(2);

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
