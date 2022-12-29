let button=document.getElementById("btn");
button.addEventListener("click",function(){
  let bill=document.getElementById("bill").value;
  let tip=document.getElementById("tip").value;

  let tips=document.getElementById("tips");
  tips.value=(bill*tip)/100;
  
  let total=document.getElementById("total");
  total.value=parseInt(bill)+parseInt(tips.value);
  
  let print=document.getElementById("print");
  print.innerText="your bill amount is "+total.value;
})

