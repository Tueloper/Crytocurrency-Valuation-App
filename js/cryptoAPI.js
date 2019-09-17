
class CRYPTO {



  async getCryptoCurrency() {

    const coin = await fetch('https://api.coinmarketcap.com/v1/ticker/');
    const currency = await coin.json();
    // console.log(currency);
    return {
      currency
    };
  }

  async queryConvtApi(currency, cryptocurrency) {

    let url = `https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`;

    const converted = await fetch(url);
    const queryValues = await converted.json();

    return {
      queryValues
    }
  }
}
