// Step 01 add even listener 
// 02 get the value from input field 
// 03 multiply with value to get the String
// 04 string to number conversion 
// calculate new value and set it to input filed
// 05 add +1 with previous number 

function caseNumberUpdate(isIncrement){
    const casenumberfield = document.getElementById('case-number-field');
    const casenumberfieldstring = casenumberfield.value;
    const PriviousCasenumber = parseFloat(casenumberfieldstring);
    let newCaseNumber;
    
    if(isIncrement === true){
         newCaseNumber = PriviousCasenumber+1;
    }
   else{
     newCaseNumber = PriviousCasenumber-1;
   }
   
   casenumberfield.value =newCaseNumber;
   return newCaseNumber;
}

function updatecasePrice(newCaseNumber){
    const presentprice= newCaseNumber*59;   
    const casetoatl = document.getElementById('case-total');
    casetoatl.innerText=presentprice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber =caseNumberUpdate(true);
    updatecasePrice(newCaseNumber);
       
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber =caseNumberUpdate(false);
    updatecasePrice(newCaseNumber);
     
})