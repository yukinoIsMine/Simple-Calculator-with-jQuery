$(document).ready(function(){
    let firstNum, secondNum, operator;
    let userInput = $('.userInput');
    let storeInput = $('.storeInput');

    $('.num').click(function(){
        let result = $(this).text();
        let num = userInput.val();
        userInput.val(num + result)
    })

    $('.operator').click(function(){
        firstNum = userInput.val();
        operator = $(this).text();
        storeInput.val(firstNum + operator)
        userInput.val(null)
    })

    $('.equalSign').click(function(){
        secondNum = userInput.val();
        let finalResult = getResult(firstNum, secondNum, operator);
        userInput.val(finalResult);
        storeInput.val(null); 
    })

    function getResult(firstNum, secondNum, operator){
        switch(operator){
            case '+':
                return Number(firstNum) + Number(secondNum);
                break;
            case '-':
                return Number(firstNum) - Number(secondNum);
                break;
            case '*':
                return Number(firstNum) * Number(secondNum);
                break;
            case '/':
                return Number(firstNum) / Number(secondNum);
                break;
            case '%':
                return Number(firstNum) % Number(secondNum);
                break;
        }
    }

    $('.clear').click(function(){
        userInput.val(null);
        storeInput.val(null);
    })

})