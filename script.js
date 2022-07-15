const btn = document.querySelector(".btn"),
tip=document.querySelector(".tip"),
total=document.querySelector(".total"),
error=document.querySelector(".error");

const hideError = () => {
    setTimeout(() => {
   error.style.display="none";
    },5000);
};
const calculatetip =() => {
    const bill =document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    
    if(bill === ""|| rate == ""){
        error.style.display="block";
    hideError();
    } else if(isNaN(bill)){
        error.innerHTML ="please enter no";
        error.style.display="block";
        hideError();
    }else{
        let tipAmt = bill *rate;
        tipAmt= Math.ceil(tipAmt);
        tip.innerHTML=`tip: $${tipAmt}`;
        let totat = Number(bill)+ tipAmt;
        total.innerHTML=`Total Bill: $${totat}`;
    }
};

btn.addEventListener("click",calculatetip);