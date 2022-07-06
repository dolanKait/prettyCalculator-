class Calculator{
    constructor(previousButton, currentButton){
        this.previousButton = previousButton
        this.currentButton = currentButton
        this.clear()
    }

    clear(){
        this.currentOperand = ' '
        this.previousOperand = ' '
        this.operation = undefined
    }

    delete(){

    }


//adding .toString() so that js will actually add the numbers, but we want to append them (display them on the screen)

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand == " ") return 
        if (this.previousOperand !== " "){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ' '

    }

    compute(){

    }

    updateDisplay(){
        this.currentButton.innerText = this.currentOperand
        this.previousButton.innerText = this.previousOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document. querySelector('[data-equals]')
const deleteButton = document. querySelector('[data-delete]')
const clearButton = document. querySelector('[data-all-clear]')
const previousButton = document. querySelector('[data-previous-operand]')
const currentButton = document. querySelector('[data-current-operand]')


const calculator = new Calculator(previousButton, currentButton)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
)}