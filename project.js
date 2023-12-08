function handledeposit(){
    var convertedinputvalue = converttonumber("deposit-input","value");
    var converteddipositvalue = converttonumber("deposit-amount","innerText");
    var sum = convertedinputvalue + converteddipositvalue;
    setInnterText("deposit-amount",sum);
    var convertedtotalamount = converttonumber("total-amount","innerText");
    var totalsum = convertedinputvalue + convertedtotalamount;
    setInnterText("total-amount",totalsum);
    document.getElementById("deposit-input").value = "";
}
function converttonumber(id, element){
    if(element=="innerText"){
        var value = document.getElementById(id).innerText;
        return parseFloat(value); 
    }
    else{
     var value = document.getElementById(id).value;
     return parseFloat(value);
    }
}
function handlewithdraw(){
    var convertedinputwithdraw = converttonumber("withdraw-input","value");
    var convertedwithdrawamount = converttonumber("withdraw-amount","innerText");
    var sum = convertedinputwithdraw + convertedwithdrawamount;
    setInnterText("withdraw-amount",sum);
    var convertedtotalamount = converttonumber("total-amount","innerText");
    var balance = convertedtotalamount - convertedinputwithdraw;
    document.getElementById("total-amount").innerText = balance;
    setInnterText("total-amount",balance);
    document.getElementById("withdraw-input").value = "";
}
function setInnterText(id, value){
    document.getElementById(id).innerText = value;
} 

