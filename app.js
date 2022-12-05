var initialPrice = document.querySelector("#initial-price");
var qauntity = document.querySelector("#qty");
var currentaPrice = document.querySelector("#current-price");
var btn = document.querySelector("#check-button");
var output = document.querySelector("#output");

function calculateProfitAndLoss(ip, qp, cp) {
    if (ip > 0 && qp > 0 && cp > 0) {
        if (ip > cp) {
            var loss = (ip - cp) * qp;
            var lossPercentage = (loss / ip) * 100;
            showOutput(`your loss is ${loss} and your loss-percentage is ${lossPercentage}% 🙁`);
        }
        else if (cp > ip) {
            var profit = (cp - ip) * qp;
            var profitPercentage = (profit / ip) * 100;
            showOutput(`your profit is ${profit} and your profit-percentage is ${profitPercentage}% 🤑`);
        }
        else {
            showOutput("No pain no gain , no gain no pain 😶");
        }
    }
    else {
        showOutput("Please enter only positive number!📢");
    }
}

function calculate() {
    var ip = Number(initialPrice.value);
    var qp = Number(qauntity.value);
    var cp = Number(currentaPrice.value);
    calculateProfitAndLoss(ip, qp, cp)
}

function showOutput(msg) {
    output.innerText = msg;
}

btn.addEventListener("click", calculate);

