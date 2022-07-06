class Calculator{
    consturctor(PreviousOperandTextElement, CurrentOperandTextElement){
        this.PreviousOperandTextElement = PreviousOperandTextElement
        this.CurrentOperandTextElement = CurrentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(){
        this.currentOperand = number
    }

    chooseOperation(){

    }

    chooseOperation(){

    }

    compute(){

    }

    updateDisplay(){
        this.CurrentOperandTextElement.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document. querySelector('[data-equals]')
const deleteButton = document. querySelector('[data-delete]')
const clearButton = document. querySelector('[data-all-clear]')
const previousButton = document. querySelector('[data-previous-operand]')
const currentButton = document. querySelector('[data-current-operand]')


const Calc = new Calculator(PreviousOperandTextElement, CurrentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        Calculator.appendNumber(button.innerText)
        Calculator.updateDisplay()
    })
})