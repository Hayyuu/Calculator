const input=document.querySelector('#input');
const clearButton=document.querySelector('.clear');
const equalButton=document.querySelector('#equals');
let first_result='';
let operatorSpecified=false;
let currentOperator='';
let oldOperator='';
let sec_result='';
let isThereSecArg=false;
clearButton.addEventListener('click',function(){
    input.textContent='0';
    first_result='';
    sec_result='';
    operatorSpecified=false;
    currentOperator='';
    isThereSecArg=false;
});
const operators=Array.from(document.querySelectorAll('.operator'));
const numbers=Array.from(document.querySelectorAll('.number'));
numbers.forEach(item=>{
    item.addEventListener('click',inputNumber);
});
function inputNumber(e){
    if(currentOperator){
        sec_result+=e.target.textContent;
        input.textContent+=e.target.textContent;
        isThereSecArg=true;
        console.log('sec'+sec_result);
    }
    if(input.textContent==0){
        input.textContent='';
    }
    if(!currentOperator){
        input.textContent+=e.target.textContent;
        first_result=Number(input.textContent);
        console.log('first'+first_result);
    } 
    
}
operators.forEach(item=>{
    item.addEventListener('click',operatorClicked);
});
function operatorClicked(e){
    currentOperator=e.target.textContent;
    if (currentOperator!='='){
        if(isThereSecArg){
            first_result=calculateResult(first_result,currentOperator,sec_result);
            sec_result='';
            input.textContent=`${first_result}`;
            isThereSecArg=false;
        }
        else{
        input.textContent+=e.target.textContent;
        }
        oldOperator=currentOperator;

    }
    if(isThereSecArg && currentOperator== '='){
       sec_result= calculateResult(first_result,oldOperator,sec_result);
    }
   
    
}
function displayResult(operatorType,final_result){
    switch(operatorType){
        case '=':
            input.textContent='';
            input.textContent=final_result;
        default:
            input.textContent='';
            input.textContent=final_result;
    }
}
function calculateResult(firstArg,opertorType,secArg){
    let net;
    switch(opertorType){
        case '=':

        case '+':
            net=add(Number(firstArg),Number(secArg));
            firstArg=net;
            currentOperator='';
            isThereSecArg=false;
            break;
        case '-':
            net=subtract(Number(firstArg),Number(secArg));
            firstArg=net;
            currentOperator='';
            isThereSecArg=false;
            break;
        case '*':
        case '/':
    }
    return net;

}
const add = function(a,b) {
    return a+b;
  };

const subtract = function(a,b) {
	return a-b;
};