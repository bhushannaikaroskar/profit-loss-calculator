
const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-button");

function submitHandler(){
    console.log("Tested"); 
}

submitButton.addEventListener("click",submitHandler);
