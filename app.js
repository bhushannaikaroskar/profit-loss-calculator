
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
        showOutput(`The profit is ${profit} and the profit percent is ${profitPercentage.toFixed(2)}%`);
    }else if(initial>current){
        const loss = (initial - current)*quantity;
        const lossPercentage = loss/(initial*quantity) * 100;
        showOutput(`The loss is ${loss} and the loss percent is ${lossPercentage.toFixed(2)}%`);
    }else {
        showOutput("No gain no loss")
    }
}

function submitHandler(){
    const initial = Number(initialPrice.value);
    const qty = Number(quantity.value);
    const current = Number(currentPrice.value);

    if(initialPrice.value == "" || quantity.value == "" || currentPrice.value ==""){
        showOutput("Input fields cannot be empty enter all value")
    }else if(initial<1 || qty<1 || current<1){
        showOutput("Value should be greater than zero")
    } else{
        calculateProfitAndLoss(initial,qty,current);
    }
}

submitButton.addEventListener("click",submitHandler);
