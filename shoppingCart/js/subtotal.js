function getTextvalue(textElement){
    const phonePrice = document.getElementById(textElement);
    const phonePricestring = phonePrice.innerText;
    const Pricelast = parseFloat(phonePricestring);
    return Pricelast;

}
document.getElementById('btn-checked').addEventListener('click',function(){
   
    const phonePricelast =getTextvalue('phone-total');
    const casePricelast =getTextvalue('case-total');
   
    const totalsubtotal = phonePricelast+casePricelast;
    const tax= (totalsubtotal*.1).toFixed(2);
    const TaxTotal = parseFloat(tax);

    const subtotal= document.getElementById('subtotal');
    const taxElement = document.getElementById('tax')

    const finalTotal =subtotal.innerText=totalsubtotal;
    const Finaltaxtotal = taxElement.innerText=TaxTotal;

    const Billamount = finalTotal+Finaltaxtotal;

    const totalAmounttext= document.getElementById('total');
    totalAmounttext.innerText=Billamount;

})