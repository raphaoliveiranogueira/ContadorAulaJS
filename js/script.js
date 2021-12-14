var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment(){
    if(currentNumber==10){
        return;
    }
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
    mudacor()
}
function decrement(){
    currentNumber = currentNumber - 1
    currentNumberWrapper.innerHTML = currentNumber
    mudacor()

}

function mudacor(){
    if(currentNumber<=0){
        currentNumberWrapper.style.color= 'red'
    }
    
    else if(currentNumber>0){
        currentNumberWrapper.style.color= 'black'
    }
}
