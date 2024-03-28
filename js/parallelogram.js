// Parallelogram area 

document.getElementById('parButton').addEventListener('click',function(){
    const b = areaInputCalculateById('parFirstInput');
    const h = areaInputCalculateById('parSecondInput');
    if(isNaN(b)||isNaN(h)){
        alert('please provide number only')
        return;
    }
    const area = b*h;
    const areaTotal = setTextValueById('setValue',area);
    
    const entryOnElement = addCalculationEnty('Parallelogram',area);
    

})
