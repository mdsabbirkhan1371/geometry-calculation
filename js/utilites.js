// area calculate  of tpr 

function areaInputCalculateById (id){
    const inputElement = document.getElementById(id);
    const inputElementString = inputElement.value;
    const inputField = parseFloat(inputElementString)
    return inputField;
}

// set inner value 

function setTextValueById(id,newValue){
    const setTextValue = document.getElementById(id);
    setTextValue.innerText = newValue;
}

// add calculate element 
function addCalculationEnty (areaType,area){
    const entryElement = document.getElementById('calculation-enty');
    const p = document.createElement('p');
    const count =entryElement.childElementCount;
 
    p.innerHTML = `${count +1}. ${areaType} ${area}cm<sup>2</sup> <button class='btn btn-sm btn-success'>Convert m<sup>2</button>`
    entryElement.appendChild(p)
 }