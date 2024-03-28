document.getElementById('eleipsButton').addEventListener('click',function(){
    const pi =3.1416;
    const a = areaInputCalculateById('elipFirstInput');
    const b = areaInputCalculateById('eleipSecondInput');
    if(isNaN(a)||isNaN(b)){
        alert('please provide number only')
        return;
    }
    const area = pi*a*b;
    const areaFixed = area.toFixed(2)
    const totlArea = setTextValueById('setValue',areaFixed);
    const entryOnElement = addCalculationEnty('Ellipse',areaFixed)

})