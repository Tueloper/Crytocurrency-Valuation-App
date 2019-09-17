
//instantiate the classes
var cryptoAPI = new CRYPTO();
var ui = new UI();


const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //reading the values
  const currency = document.querySelector('#currency').value;
  const cryptocurrency = document.querySelector('#cryptocurrency').value;

  //validating values
  if (currency === '' || cryptocurrency === '') {

    //print an error message
    ui.printMessage('All Fields Must Be Selected, Please Check & Try Again', 'card-panel card orange darken-2')

  } else {
    
    //query the api to get information]
    cryptoAPI.queryConvtApi(currency, cryptocurrency)
      .then(data => {

        const result = data.queryValues[0];
        //display the information
        ui.displayResult(result, currency, cryptocurrency);
      })
  }
})