document.getElementById('recButton').addEventListener('click',function(){
    const w = areaInputCalculateById('recFirstInput');
    const i = areaInputCalculateById('recSecondInput');
    if(isNaN(w)||isNaN(i)){
        alert('please provide number only')
        return;
    }
    const area = w*i;
    
    const areaTotal = setTextValueById('setValue',area)
    const entryOnElement = addCalculationEnty('Rectangle',area)
})