//Select all your elements here
const buttons = document.querySelectorAll('.button')
const display = document.querySelector('.display')
const clearButt = document.querySelector('#clear')

//Create state boolean variables that do the following:
//num1 should hold the first term
//num2 should hole the second term
//state should hold the operation that will be applied
//  ex: If i press "+" then state should be set to "plus"
//set clear false and create clear bottom should be blanck
let num1 = "";
let num2 = "";
let state = "";
let clear = false;

//Create display function that sets the display of the display div
function displayFunction(num){
    if(display.textContent.length <9){
        if(clear == true){
            //Reset the display here. Use display.textContent to do so 
            display.textContent = num
            //set 'clear' to false
            clear = false
            //return 'clear'
            return clear
        }
        if(clear == false){
            //Append to the display. Use display.textContent to do so 
           display.textContent += num
            //return 'clear'
            return clear
        }
    }
}

//Create converter function that turns the string in the display div into a workable number
function converter(text){
    return parseFloat(text)
}

//Create operation function that takes in the state
function operation(state, operand){
    if(num1 == ""){
        //This is the first part of your operation, this if statement is done when num1 is equal to blank
        //Use the converter function on num1
        num1 = converter(display.textContent)
        //set clear to true
        clear = true
        //return the variable operand
        return operand
    }
    if(state !== "" && operand != "equal"){
        num2 = converter(display.textContent)
        if(state == "plus")
            //set the display to the value of the operation num1 + num2 using the converter function
            display.textContent = (num1 + num2).toString()
            if(state == "minus")
            //set the display to the value of the operation num1 - num2 using the converter function
            display.textContent = (num1 - num2).toString()
        if(state == "multi")
            //set the display to the value of the operation num1 * num2 using the converter function
            display.textContent = (num1 * num2).toString()
        if(state == "divide"){
            //set the display to the value of the operation num1 / num2 using the converter function
            display.textContent = (num1 / num2).toString()
        }
        num1 = converter(display.textContent)
        //Reset the num2 variable to blank
        num2 = ""
    }
    if(state != "" && operand == "equal"){
        num2 = converter(display.textContent)
        if(state == "plus")
            //set the display to the value of the operation num1 + num2 using the converter function
            
            if(state == "minus")
            //set the display to the value of the operation num1 - num2 using the converter function
            display.textContent = (num1 - num2).toString()
        if(state == "multi")
            //set the display to the value of the operation num1 * num2 using the converter function
        if(state == "divide"){
            //set the display to the value of the operation num1 / num2 using the converter function
        }
        num1 = "", num2 =""
    }
    //set clear to true
    clear = true
    //return the value operand
    return operand
}


//Create a loop to go through the buttons area and append EventHandlers so that when you click it does an operation
for(let i=0; i<buttons.length-1; i++){
    buttons[i].addEventListener('click', function(e){
        if(this.id == "equal"){
            //Here you want to use the opeartion function when equal is pressed. Make sure you set the return value as the new state and the second parameter in the operation function to this.id
        state = operation(state, this.id)
        }
        if(this.dataset.number == undefined && this.id !== "equal"){
            //When you look at your html elements they contain something called data-number. These are custom attributes that you can be used as values on your elements. The buttons that are associated with numbers have there corresponding numbers, but some values don't. This block of code is here when a button is clicked when it doesn't have a data-number attribute but also doesn't have an id of 'equal'. 
            //set state equal to this.id
            state = this.id
            //Use the operation function again. Remember to use state to receive the return function and use this.id as the second parameter 
            operation(state, this.id)
        }
        if(this.dataset.number != undefined){
            //Use the displayFunction to update the display element. Use the variable clear to receive the return element and use this.dataset.number as the parameter in the function
        clear = displayFunction(this.dataset.number)
        
        console.log('num1 is ${num1}, num2 is ${num2}, state is {state}, clear is ${clear} }')
        }
    })
}

//clearButt.addEventListener('click', function(){
   // display.textContent = ""
    //num1 = ""
    //num2 =""
   // state =false

//})
//return operand = clear

//clear = false
//