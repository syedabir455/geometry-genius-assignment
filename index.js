function displayData(triangle,triangleArea){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${1}</td>
    <td>${triangle}</td>
    <td>${triangleArea}</td>
        
    `
    container.appendChild(tr);
}
// Triangle part 
document.getElementById('btn-triangle').addEventListener('click',function(){
    
    // get input field data using id 
    const triangle = document.getElementById('triangle').innerText;
    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;
    
    const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
displayData(triangle,triangleArea)
    
})
// rectangle part 
document.getElementById('btn-rectangle').addEventListener('click',function(){
   const rectangle = document.getElementById('rectangle').innerText;
   const width = document.getElementById('rectangle-width').value;
   const length = document.getElementById('rectangle-length').value;
   const rectangleArea = parseFloat(width) * parseFloat(length);

   displayData(rectangle,rectangleArea);
   
})
// parallelogram part 
document.getElementById('btn-Parallelogram').addEventListener('click',function(){
    const parallelogram = document.getElementById('parallelogram').innerText;
    const base = document.getElementById('parallelogram-base').value;
    const height = document.getElementById('parallelogram-height').value;
    const parallelogramArea = parseFloat(base) * parseFloat(height);
 
    displayData(parallelogram,parallelogramArea);
    
 })
//  rhombus part 
 document.getElementById('btn-rhombus').addEventListener('click',function(){
    const rhombus = document.getElementById('rhombus').innerText;
    const firstDiagonal = document.getElementById('first-diagonal').value;
    const secondDiagonal = document.getElementById('second-diagonal').value;
    const rhombusArea = 0.5 * parseFloat(firstDiagonal) * parseFloat(secondDiagonal);
 
    displayData(rhombus,rhombusArea);
       
 })
 //pentagon part 
 document.getElementById('btn-pentagon').addEventListener('click',function(){
    const pentagon = document.getElementById('pentagon').innerText;
    const pentagonSide = document.getElementById('pentagon-side').value;
    const pentagonBase = document.getElementById('pentagon-base').value;
    const pentagonArea = 0.5 * parseFloat(pentagonSide) * parseFloat(pentagonBase);
 
    displayData(pentagon,pentagonArea);
    
 })

 //Ellipse part 
 document.getElementById('btn-ellipse').addEventListener('click',function(){
    const ellipse = document.getElementById('ellipse').innerText;
    const pi = 3.1416;
    const firstAxis = document.getElementById('first-axis').value;
    const secondAxis = document.getElementById('second-axis').value;
    const ellipseAreaCalc = pi * parseFloat(firstAxis) * parseFloat(secondAxis);
    const ellipseArea = ellipseAreaCalc.toFixed(2);
 
    displayData(ellipse,ellipseArea);
    
 })

