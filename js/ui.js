//creating the ui class
class UI {
  constructor() {
    this.init();
  }

  init() {
    this.printCryptoCurrencies();
  }

  printCryptoCurrencies() {

    //fetch the currencies
    cryptoAPI.getCryptoCurrency()
      .then(data => {

        const cryptoCurrencyList = data.currency;
        const select = document.querySelector('#cryptocurrency');

        cryptoCurrencyList.forEach(element => {
          const option = document.createElement('option')
          option.value = element.id;
          option.appendChild(document.createTextNode(element.name))
          
          //display on html
          select.appendChild(option)
        }); 
      })
  }

  printMessage(message, className) {
    
    //create error div and insert message
    const errorDiv = document.createElement('div');
    errorDiv.className = className

    errorDiv.appendChild(document.createTextNode(message))

    //select where it will be displayed
    const messageDiv = document.querySelector('.messages');

    messageDiv.appendChild(errorDiv);

    setTimeout(() => {
      document.querySelector('.messages div').remove()
    }, 3000)
  }

  displayResult(data, currency, cryptocurrency) {

    const preResult = document.querySelector('#result .card')
    if (preResult) {
      preResult.remove();
    }

    const spinner = document.querySelector('.spinner')

    //display spinner
    spinner.style.display = 'block';

    let currencyName;

    currencyName = 'price_' + currency.toLowerCase();

    const value = data[currencyName]

    const result = document.getElementById('result');


    let res = `
        <div class="card blue darken-3">
          <div class="card-content white-text">
            <span class="card-title">Result</span>
            <p>The Price of ${data.name} from ${currency} is ${value}</p>
            <p>Last Hour: ${data.percent_change_1h}</p>
            <p>Last Day: ${data.percent_change_24h}</p>
            <p>Last 7 Days: ${data.percent_change_7d}</p>
          </div>
        </div>
      `
    
    //display result
    setTimeout(() => {

      //hide spinner
      spinner.style.display = 'none';

      result.innerHTML = res;
      
    }, 3000)

  }
}