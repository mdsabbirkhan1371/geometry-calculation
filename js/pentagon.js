// pentagon 
document.getElementById('p-button').addEventListener('click',function(){
    const p = areaInputCalculateById('pInputFirst');
    const b = areaInputCalculateById('pInputSecond');
    if(isNaN(p)||isNaN(b)){
        alert('please provide number only')
        return;
    }
    const area = 0.5*p*b;
    const areaTotal = setTextValueById('setValue',area);
    const entryOnElement = addCalculationEnty('Pentagon',area)
})