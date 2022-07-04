//calc state

let screenOutput= document.getElementById('screenOutput');
let firstOperand= null;
let secondOperand= null;
let firstOperator=null;
let seacondOperator=null;


// basic operations


function add(a, b) {
    const answer = (+a + +b) ;
        return answer
};

function subtract(a,b){
    const answer=(+a - +b)
        return answer
};

function multiply(a,b){
    const answer=(+a * +b)
        return answer
};

function divide(a,b){
    const answer(+a / +b)
        return answer
};


// calculator function 
function clearAll(){
    screenOutput.textContent = 0;
    firstOperand=null;
    secondOperand=null;
    firstOperator=null;
};

function getAnswer(a, b, operator){
    let answer=" ";
    if (operator == '+'){
        answer=add(a,b);
    }else if(operator == '-'){
        answer=subtract(a,b);
    }else if(operator=='*'){
        answer=multiply(a,b);
    }else if(operator == '/'){
        answer=divide(a,b)
    }
    console.log(answer);
    screenOutput.textContent=answer;
    return parseFloat(answer);
};

// button event listeners

let resetFlag=false;
const buttons= document.querySelectorAll('button');
const numButtons= document.getElementsByClassName('num-button');

function clickButton(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            if(buttons[i].classList.contains('num-button')){
                console.log(buttons[i].value);
                if (buttons[i].value=='.' && screenOutput.textContent.includes('.')){

                }else if (screenOutput.textContent == '0' || screenOutput.textContent == 0) {
                    resetFlag = false;
                    screenOutput.textContent=buttons[i].value;
                }else if (secondOperand || resetFlag){
                    resetFlag=false;
                    screenOutput.textContent=buttons[i].value;
                }else {
                    screenOutput.textContent += buttons[i].value;
                }
            }else if (buttons[i].classList.contains('operator-button')){
                if(firstOperator==null){
                    firstOperator = buttons[i].value;
                    firstOperand = parseFloat(screenOutput.textContent);
                    screenOutput.textContent = `${firstOperand}  ${firstOperator}`;
                }} else if (firstOperator) { 
                    secondOperand = parseFloat(inputDisplay.textContent);
                    let answer = getAnswer(firstOperand, secondOperand, firstOperator);
                    equationDisplay.textContent = `${answer} ${buttons[i].value}`;
                    firstOperand = answer; 
                    inputDisplay.textContent = 0;
                    secondOperand = null;
                    firstOperator = buttons[i].value;
                  }
                } else if (buttons[i].classList.contains('equal-button')) {
                  if (firstOperand && firstOperator) {
                    secondOperand = parseFloat(inputDisplay.textContent);
                    let answer = getAnswer(firstOperand, secondOperand, firstOperator);
                    equationDisplay.textContent += ' ' + secondOperand + ' =';
                    firstOperand = answer;
                    resetFlag = true; 
                    secondOperand = null;
                    firstOperator = null;
                  }
                  
                } else if (buttons[i].classList.contains('clear-button')) {
                  clearAll();
              })
            }
          }
          clickButton()