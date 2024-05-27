// Function to fetch and display the currency conversion
function convertCurrency() {
    // Get the amount and the currency from the user input
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('currency').value;

    // Set your API key here
    var apiKey = 'cur_live_qUyg2JlPWzTX3jy6v5u8ftYY957Dl3UM8c8qJQzs';

    // Define the endpoint with the required parameters
    var endpoint = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base=${fromCurrency}&currencies=USD,GTQ,KRW`;

    // Make the API request
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Assuming the API returns data in the format { "USD": { "value": amount }, ... }
                var resultUSD = data.data.USD.value.toFixed(2);
                var resultGTQ = data.data.GTQ.value.toFixed(2);
                var resultKRW = data.data.KRW.value.toFixed(2);

                // Display the results
                document.getElementById('results').innerHTML = `
                    <p>${amount} ${fromCurrency.toUpperCase()} is equivalent to:</p>
                    <p>${resultUSD} USD</p>
                    <p>${resultGTQ} GTQ</p>
                    <p>${resultKRW} KRW</p>
                `;
            } else {
                // Handle any errors returned by the API
                document.getElementById('results').innerHTML = 'Error: ' + data.message;
            }
        })
        .catch(error => {
            // Handle network errors
            console.error('Error fetching data:', error);
            document.getElementById('results').innerHTML = 'Error fetching data.';
        });
}

// Add event listener to the convert button
document.getElementById('convert').addEventListener('click', convertCurrency);
