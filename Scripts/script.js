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
    if(!isThereSecArg){
        currentOperator=e.target.textContent;
        if(input.textContent==0){
            if(currentOperator=='-'){
                input.textContent='';
                input.textContent+=currentOperator;
            }
            else{
                input.textContent='';
            }
        }
    }
    else{
        oldOperator=currentOperator;
        currentOperator=e.target.textContent;
    }
    if (currentOperator!='='){
        if(isThereSecArg){
            first_result=calculateResult(first_result,oldOperator,sec_result);
            oldOperator='';
            sec_result='';
            input.textContent=`${first_result}${currentOperator}`;
            
        }
        else{
        input.textContent+=e.target.textContent;
        }
    }
    if(isThereSecArg && currentOperator=== '='){
        first_result = calculateResult(first_result,oldOperator,sec_result);
        oldOperator='';
        sec_result='';
        input.textContent=`${first_result}`;
     }
   
    
}

function calculateResult(firstArg,opertorType,secArg){
    let net;
    switch(opertorType){
        case '+':
            net=add(Number(firstArg),Number(secArg));
            break;
        case '-':
            net=subtract(Number(firstArg),Number(secArg));
            break;
        case 'x':
            net=multiply(Number(firstArg),Number(secArg));
            break;
        case '/':
            net=divide(Number(firstArg),Number(secArg));
            break;
        
    }
    isThereSecArg=false;
    return net;

}
const add = function(a,b) {
    return a+b;
  };

const subtract = function(a,b) {
	return a-b;
};
const multiply = function(a,b) {
    return a*b;
  };
const divide = function(a,b) {
    return a/b;
  };