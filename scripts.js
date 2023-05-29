const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");
const dolar = 5.2;
const euro = 5.9;
const bitcoin = 0.0000062


const convertValues = () => {
  const inputreais = document.getElementById("input-real").value;
  const realValueText = document.getElementById("real-value-text");
  const currencyValueText = document.getElementById("currency-value-text");

  realValueText.innerHTML = currencyValueText.innerHTML = new Intl.NumberFormat(
    "pt-br",
    { style: "currency", currency: "BRL" }
  ).format(inputreais);




  currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputreais / dolar);

  currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputreais / euro);

  currencyValueText.innerHTML = inputreais * bitcoin


  if (select.value === "US$ Dólar americano") {
    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputreais / dolar);
}

if (select.value ===  "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(inputreais / euro);
}

if (select.value === "Bitcoin") {
    inputreais/ bitcoin
}

};



changeCurrency = () => {
  const currencyname = document.getElementById("currency-name");
  const currencyimg = document.getElementById("currency-img");

  if (select.value === "US$ Dólar americano") {
    currencyname.innerHTML = "Dólar americano";
    currencyimg.src = "./images/estados-unidos (1) 1.png";
  }

  if (select.value === "€ Euro") {
    currencyname.innerHTML = "Euro";
    currencyimg.src = "./images/Design sem nome 1.png";
  }

  if (select.value === "Bitcoin") {
    currencyname.innerHTML = "Bitcoin";
    currencyimg.src = "./images/bitcoin.png";
  }
  convertValues ()
};

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);
