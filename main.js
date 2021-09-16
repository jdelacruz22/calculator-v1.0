const calcScreenNum = document.getElementById('calc-screen-num');

let num1 = [],
    num2,
    operator;

window.addEventListener('keydown' , (e) => {
    switch(e.key){
        case '1':
            keyPressed('1')
            break;
        case '2':
            keyPressed('2')
            break;
        case '3':
            keyPressed('3')
            break;
        case '4':
            keyPressed('4')
            break;
        case '5':
            keyPressed('5')
            break;
        case '6':
            keyPressed('6')
            break;
        case '7':
            keyPressed('7')
            break;
        case '8':
            keyPressed('8')
            break;
        case '9':
            keyPressed('9')
            break;
        case '0':
            keyPressed('0')
            break;
        case '*':
            keyPressed('&#215')
            break;
        case '/':
            keyPressed('&#247')
            break;
        case '-':
            keyPressed('&#8722')
            break;
        case '+':
            keyPressed('&#43')
            break;
        case '=':
            keyPressed('&#61')
            break;           
    }
});

function keyPressed(num){

    console.log(num.length);

    if(num1.length <= 10 && num.length < 2){
        
        num1.push(num);
        
        showNumOne(num1.join(''));
        addComma(num1);
        scaleFontSize(num1);
        console.log(num1);
    }
    if(num.length >= 2){
        console.log('lol');
        num1 = [];
        operator = num;
        showNumOne(num1);
        
    }
    else{
        return;
    }
    

    
}

function showNumOne(num){
    calcScreenNum.innerHTML = num;
}

function addComma(num){
    if(num.length == 3 || num.length == 7 ){
        num.push(',');
    }
}

function scaleFontSize(num){
    if(num.length > 9){
        calcScreenNum.style.fontSize = "54px";
    }
}