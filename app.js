const initPrice = document.querySelector("#initial-price");
const stocksQty = document.querySelector("#stocks-qty");
const currentPrice = document.querySelector("#current-price");
const outputBox = document.querySelector("#output-box");
const formEl = document.querySelector("#stock-price-form");

formEl.addEventListener('submit', closingResult)

function calculatePL(ip, qty, curr){
   
    if (ip > curr) {
        console.log('loss')
        const loss = (ip - curr) * qty;
        const lossPercentage = ((loss / ip) * 100).toFixed(2);
         toggleTheme('loss')
        displayMsg(`Hey you've accounted a loss, Loss: ${loss} | Percent: ${lossPercentage}`)
    }
    else if (curr > ip){
        console.log(curr, ip)
        const profit = (curr - ip) * qty;
        const profitPercentage = ((profit / ip) * 100).toFixed(2);
        toggleTheme('profit')
        displayMsg(`yay!! you made a profit, profit: ${profit} | Percent: ${profitPercentage}`)
    }
    else{
        document.body.removeAttribute("class")
        displayMsg(`You are at breakeven`)
    }
}

function closingResult(event){
    event.preventDefault();
    const result = calculatePL(Number(initPrice.value),Number(stocksQty.value), Number(currentPrice.value))

}

function displayMsg(msg){
    outputBox.innerHTML = msg
}

function toggleTheme(result){
    console.log(result)
    document.body.removeAttribute("class")
    if(result === 'profit'){
        document.body.classList.add('profit-theme')
    }
   else if(result === 'loss'){
    document.body.classList.add('loss-theme')
   }
}