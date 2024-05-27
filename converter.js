function convert() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('currency').value;
    var access_key = 'cur_live_qUyg2JlPWzTX3jy6v5u8ftYY957Dl3UM8c8qJQzs'; // Replace with your actual API key from currencyapi.com

    // Define the endpoint for conversion
    var endpoint = `https://api.currencyapi.com/v3/convert?apikey=${access_key}&from=${fromCurrency}&to=USD,GTQ,KRW&amount=${amount}`;

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Assuming the API returns data in the format { "USD": { "value": amount }, ... }
                var resultUSD = data.data.USD.value.toFixed(2);
                var resultGTQ = data.data.GTQ.value.toFixed(2);
                var resultKRW = data.data.KRW.value.toFixed(2);

                document.getElementById('results').innerHTML = `
                    <p>${amount} ${fromCurrency.toUpperCase()} is equivalent to:</p>
                    <p>${resultUSD} USD</p>
                    <p>${resultGTQ} GTQ</p>
                    <p>${resultKRW} KRW</p>
                `;
            } else {
                document.getElementById('results').innerHTML = 'Error: ' + data.message;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('results').innerHTML = 'Error fetching data.';
        });
}
