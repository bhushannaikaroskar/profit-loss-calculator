
const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-button");
const outputBox = document.querySelector("#output-box");

function showOutput(message){
    outputBox.innerHTML = message;
}

function calculateProfitAndLoss(initial,quantity,current){
    if(current>initial){
        const profit = (current - initial)*quantity;
        const profitPercentage = profit/(initial*quantity) * 100;
        showOutput(`The profit is ${profit} and the profit percent is ${profitPercentage}%`);
    }else if(initial>current){
        const loss = (initial - current)*quantity;
        const lossPercentage = loss/(initial*quantity) * 100;
        showOutput(`The loss is ${loss} and the profit percent is ${lossPercentage}%`);
    }else {
        showOutput("No gain no loss")
    }
}

function submitHandler(){
    const initial = Number(initialPrice.value);
    const qty = Number(quantity.value);
    const current = Number(currentPrice.value);
    calculateProfitAndLoss(initial,qty,current);
}

submitButton.addEventListener("click",submitHandler);
