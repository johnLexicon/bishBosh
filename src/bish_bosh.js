
function getFormValues(){
    let answer = document.getElementById("nrOfTimes").value;
    const nrOfTimes = Number(answer);
    
    answer = document.getElementById("firstDivision").value;
    const firstDivision = Number(answer);
    
    answer = document.getElementById("secondDivision").value;
    const secondDivision = Number(answer);
    
    return [nrOfTimes, firstDivision, secondDivision];
  }
  
  function bishBosh(number, firstDivision, secondDivision){

    if(number % firstDivision == 0 && number % secondDivision == 0){
        return {className: "bishBoshColor", textContent: "Bish Bosh" };
    }
    else if(number % firstDivision == 0){
        return {className: "bishColor", textContent: "Bish" };
    }
    else if(number % secondDivision == 0){
        return {className: "boshColor", textContent: "Bosh" };
    }
    else{
        return {className: "", textContent: number };
    }

  }