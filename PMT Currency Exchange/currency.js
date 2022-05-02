const key = "1903ee4fb9280fc266a0b569088ef183d71d18f3";

// request directions for exchange USD to COP
// const url = `https://api.getgeoapi.com/v2/currency/convert
// // ?api_key=${key}
// // &from=USD
// // &to=COP
// // &amount=${input.value}
// // &format=json`;

// request directions for currencies list
// const urlo = `https://api.getgeoapi.com/v2/currency/list?api_key=${key}&format=json`;

// requests exchage
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// requests list of currencies
// fetch(urlo)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// DOM ELEMENTS..............................................
const input = document.querySelector("#input");
const arrows = document.querySelectorAll(".arrow");
const result = document.querySelector("#result");
const button = document.querySelector("#calculate-button");
const coFlag = document.querySelector("#co-flag");

// MAKE ARROWS GREEN ON CLICK EFFECT AND FETCH AND DISPLAY DATA......................

button.addEventListener("click", function () {
  console.log("work");
  let displayData;
  if (input.value === "") return;
  if (input.value !== "") {
    // formats data to be gathered for api
    const url = `https://api.getgeoapi.com/v2/currency/convert
?api_key=${key}
&from=USD
&to=COP
&amount=${input.value}
&format=json`;
    // fetches data from api
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        displayData = parseInt(data.rates.COP.rate_for_amount).toFixed(2);
        // console.log(displayData);
      });
    // makes all the arrows green one at a time
    arrows[0].style.borderBottom = "25px solid green";
    setTimeout(function () {
      arrows[1].style.borderBottom = "25px solid green";
      setTimeout(function () {
        arrows[2].style.borderBottom = "25px solid green";
        setTimeout(function () {
          arrows[3].style.borderBottom = "25px solid green";
          setTimeout(function () {
            coFlag.style.transform = "scale(1.5)";
            setTimeout(function () {
              arrows[4].style.borderBottom = "25px solid green";
              setTimeout(function () {
                arrows[5].style.borderBottom = "25px solid green";
                setTimeout(function () {
                  arrows[6].style.borderBottom = "25px solid green";
                  setTimeout(function () {
                    arrows[7].style.borderBottom = "25px solid green";
                    result.textContent = `${formatter.format(displayData)}`;
                    coFlag.style.transform = "scale(1)";
                    reset();
                  }, 200);
                }, 200);
              }, 200);
            }, 200);
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }
});

// RESETS EVERYTHING SO USER CAN INPUT THE NEW VALUE TO BE CONVERTED................

function reset() {
  for (let i = 0; i < arrows.length; i++) {
    arrows[i].style.borderBottom = "25px solid red";
  }
}

// CLEARS INPUT FIELD ON CLICK FOR BETTER UX
input.addEventListener("click", function () {
  input.value = "";
});

// NUMBER TO COLOMBIA CURRENCY
var formatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});
