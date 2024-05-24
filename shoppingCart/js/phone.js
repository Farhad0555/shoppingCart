
function getPhoneNumber(isIncrement){
    const phonenumber = document.getElementById('phone-number-field');
    const phonenumberstring =phonenumber.value;
    const priviousphonenumber= parseFloat(phonenumberstring);
    let newphonenumber;
    if(isIncrement=== true){
         newphonenumber = priviousphonenumber+1;
    }
    else{
        newphonenumber = priviousphonenumber-1;
    } 
    phonenumber.value = newphonenumber;  

    return newphonenumber;
}

function phonePrice(newphonenumber){
    const phonetotalPrice = document.getElementById('phone-total');
    phonetotalPrice.innerText=newphonenumber*1219;
}
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newphonenumber=getPhoneNumber(true);

    phonePrice(newphonenumber);
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newphonenumber = getPhoneNumber(false);
    phonePrice(newphonenumber);
  
})