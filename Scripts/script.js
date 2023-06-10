const input=document.querySelector('#input');
const clearButton=document.querySelector('.clear');
clearButton.addEventListener('click',function(){
    input.textContent='0';
});
console.log(clearButton);
const operators=Array.from(document.querySelectorAll('.operator'));
const numbers=Array.from(document.querySelectorAll('.number'));
numbers.forEach(item=>{
    item.addEventListener('click',inputNumber);
});
function inputNumber(e){
    if(input.textContent==0){
        input.textContent='';
    }
    input.textContent+=e.target.textContent;
}
operators.forEach(item=>{
    item.addEventListener('click',operatorClicked);
});
function operatorClicked(e){
    input.textContent+=e.target.textContent;
}

  