let calculator = document.querySelector('.calculator');
let keys = document.querySelector('.calculator_keys');
let currentOp = document.querySelector('#displayTop');
let RunningTotal = document.querySelector('#displayBottom');
let displayWindow = document.querySelector('#display')
let operands = document.querySelectorAll('.operations');
let numberBtns = document.querySelectorAll('.number');
let deleteBtn = document.querySelector('.deleteBtn');
let clearBtn = document.querySelector('.clearBtn');
let equalBtn = document.querySelector('.equals')



let a = '';
let b = '';
let total = null;


let o;
let lastOp= '';



// Use Flags to set values!!!


// Button Events


numberBtns.forEach((numberBtns) =>{
    numberBtns.addEventListener('click', (e) =>{
       a += e.target.innerText;
       RunningTotal.innerText = a;
       
    })
})

operands.forEach((operands) =>{
    operands.addEventListener('click', (e) =>{
        if(!a) total;
        o = e.target.innerText;
        if(a && b && lastOp){
            operate()
        }
        else{
            total = parseInt(a)
        }
        clearVar(o);
        lastOp = o;
    }) 
})

equalBtn.addEventListener('click',(e) => {
    if(!currentOp || !RunningTotal) return;
    operate();
    clearVar();
    RunningTotal.innerText = total;
    a = total;
    b = '';
 
})

clearBtn.addEventListener('click', clearDisplay)


function operate(){
    console.log(lastOp)
    if( lastOp === '+'){
        total = parseInt(total) + parseInt(a)
    }
    else if( lastOp === '-'){
        total = parseInt(total) - parseInt(a)
    }
    else if( lastOp === '*'){
        total = parseInt(total) * parseInt(a)
    }
    else if( lastOp === '/'){
        total = parseInt(total) / parseInt(a)
    }
    else{
        return
    }

}

//Clear var 
function clearVar(operationName = ''){
    b += a +  '' + operationName + '';
    currentOp.innerText = b;
    RunningTotal.innerText = '';
    a = '';
}

// Functions

function clearDisplay(){
    a = '';
    b = '';
    RunningTotal.innerText = '';
    currentOp.innerText = '';
   
}




// if( aFlag === false){
//     currentOp.innerText += e.target.innerText;
//     a = currentOp.innerText
//      numArray.push(currentOp.innerText)
//      //operandFlag = false;
//      //aFlag = true;
    
// }
// else if(bFlag === false){
//     currentOp.innerText += e.target.innerText;
//      b = currentOp.innerText.split("").splice(a.length+1).join('');
//      operandFlag = false;
//      bFlag = true;
     
// }
// else if( newNum === false){
//     newNum = true;
//     currentOp.innerText += e.target.innerText;
//     newNum = currentOp.innerText.split("").splice(a.length+1).join('');
//     operandFlag = false;
//     newNum = false;
// }

