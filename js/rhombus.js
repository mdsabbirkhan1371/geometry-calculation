// rhombus  area 

document.getElementById('ruButton').addEventListener('click',function(){
    const d1= areaInputCalculateById('ruFirstInput');
    const d2 = areaInputCalculateById('ruSecondInput');
    if(isNaN(d1)||isNaN(d2)){
        alert('please provide number only')
        return;
    }
    const area = 0.5*d1*d2;
    const areaTotal = setTextValueById('setValue',area);
    const entryOnElement = addCalculationEnty('Rhombus',area);
})
