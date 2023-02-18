let x = 0;
// Triangle part 
document.getElementById('btn-triangle').addEventListener('click',function(){
    x = x + 1;
    // get input field data using id 
    const triangle = getInnerText('triangle');
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    
    const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
displayData(triangle,triangleArea)
    
})
// rectangle part 

document.getElementById('btn-rectangle').addEventListener('click',function(){
    x = x + 1;
   const rectangle = getInnerText('rectangle');
   const width = getInputValue('rectangle-width');
   const length = getInputValue('rectangle-length');

   const rectangleArea = parseFloat(width) * parseFloat(length);

   displayData(rectangle,rectangleArea);
   
})
// parallelogram part 

document.getElementById('btn-Parallelogram').addEventListener('click',function(){
    x = x + 1;
    const parallelogram = getInnerText('parallelogram')
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const parallelogramArea = parseFloat(base) * parseFloat(height);
 
    displayData(parallelogram,parallelogramArea);
    
 })
//  rhombus part 

 document.getElementById('btn-rhombus').addEventListener('click',function(){
    x = x + 1;
    const rhombus = getInnerText('rhombus')
    const firstDiagonal = getInputValue('first-diagonal');
    const secondDiagonal = getInputValue('second-diagonal');

    const rhombusArea = 0.5 * parseFloat(firstDiagonal) * parseFloat(secondDiagonal);
 
    displayData(rhombus,rhombusArea);
       
 })
 //pentagon part 
 
 document.getElementById('btn-pentagon').addEventListener('click',function(){
    x = x + 1;
    const pentagon = getInnerText('pentagon')
    const pentagonSide = getInputValue('pentagon-side');
    const pentagonBase = getInputValue('pentagon-base');

    const pentagonArea = 0.5 * parseFloat(pentagonSide) * parseFloat(pentagonBase);
 
    displayData(pentagon,pentagonArea);
    
 })

 //Ellipse part 
 
 document.getElementById('btn-ellipse').addEventListener('click',function(){
    x = x + 1;
    const ellipse = getInnerText('ellipse')
    const pi = 3.1416;
    const firstAxis = document.getElementById('first-axis').value;
    const secondAxis = document.getElementById('second-axis').value;

    const ellipseAreaCalc = pi * parseFloat(firstAxis) * parseFloat(secondAxis);
    const ellipseArea = ellipseAreaCalc.toFixed(2);
 
    displayData(ellipse,ellipseArea);
    
 })

 function displayData(triangle,triangleArea){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${x}</td>
    <td>${triangle}</td>
    <td>${triangleArea}</td>
        
    `
    container.appendChild(tr);
}

function getInputValue(id){
const value = document.getElementById(id).value;
return value;
}

function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return innerText;
}
