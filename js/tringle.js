// triangle 

document.getElementById('triangleButton').addEventListener('click',function(){
    const base = areaInputCalculateById('firstInput');
    const height = areaInputCalculateById('secondInput');
    if(isNaN(base)||isNaN(height)){
        alert('please provide number only')
        return;
    }
    const area = 0.5*base*height;
    const areaTotal = setTextValueById('setValue',area);
    const entryOnElement = addCalculationEnty('Triangle',area)
    
});

