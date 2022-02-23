// function randomNumber(){
//     const randomNumber = (  Math.floor   (Math.random() *10000 )  +500);
//     document.getElementById('randomNumberGenerator').innerHTML = randomNumber;
//     document.getElementById('randomNumberGenerator').value = "";

//     console.log(randomNumber)
// }
// let display = document.getElementById('display');
// buttons = document.querySelectorAll('button');

// let displayValue = "";
// for(item of number){
//     item.addEventListener('click', function(e){
//         buttonText = e.target.innerText;
//         console.log(buttonText);


//          if (buttonText == 'AC') {
//             buttonText = '';
//             displayValue = buttonText;
//             display.value = displayValue;
//         }
//         else{
//             displayValue += buttonText; 
//             display.value = displayValue;
//         }
//     })
// }


// const submitButton = document.getElementById('submitButton');
// submitButton.addEventListener('click',function(){
//     const submitValue = document.getElementById('display').value;
//     const submitNumber = parseFloat(submitValue);

//     const randomNumberGenerator = document.getElementById('randomNumberGenerator');
//     const randomNumber = parseFloat(randomNumberGenerator);
//     // var getNumber  = randomNumber - submitNumber ;
//     // console.log(getNumber);

//     if (randomNumber.length == submitNumber.length) {
//         notify.style.display = "block"; 
//     }
//     else{
//         notify_right.style.display = "block";
//     }
// })


function randomNumber(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '' ;
    if (pinString.length == 4) {
        return pin;
    }
    else{
        console.log('Got 3 Digit And Calling Again');
        return randomNumber();
    }
}

function generatePin(){
    const pin = randomNumber();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('display');
    if (isNaN (number)) {
        if  (number == 'AC'){
            calcInput.value = '';
        }
    }
    else {
        const beforeNumber = calcInput.value;
        const newNumber = beforeNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin(){
    const number = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('display').value;
    const successMassage = document.getElementById('notify_success');
    const failError = document.getElementById('notify-fail');

    if (number == typedNumbers) {
        successMassage.style.display = 'block';
        failError.style.display = 'none'
    }
    else{
        successMassage.style.display = 'none';
        failError.style.display = 'block';
    }
}