
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
       //outputDiv.innerHTML += '<p class="bishBoshColor">Bish Bosh</p>';
    }
    else if(number % firstDivision == 0){
        return {className: "bishColor", textContent: "Bish" };
        //outputDiv.innerHTML += '<p class="bishColor">Bish</p>';
    }
    else if(number % secondDivision == 0){
        return {className: "boshColor", textContent: "Bosh" };
        //outputDiv.innerHTML += '<p class="boshColor">Bosh</p>';
    }
    else{
        return {className: "", textContent: number };
        //outputDiv.innerHTML += `<p>${i}</p>`;
    }

  }