
function calculate(){

  var v1 = parseInt(document.getElementById('input1').value);
  var v2 = parseInt(document.getElementById('input2').value);
  var operator = document.getElementById('operation').value;
  
  var result;

   
    if(operator === "Sum"){
       result=v1+v2;
    }else if(operator === "Minus"){
      result=v1-v2;
    }else if(operator === "Multiply"){
       result=v1*v2; 
    }else if(operator === "Divide"){
      result=v1/v2;
    }else{
      alert('Please put number and operator');
      return;
    } 
   alert('the answer is' + " " + result);
}



