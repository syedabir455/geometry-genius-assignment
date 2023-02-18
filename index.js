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

document.getElementById('btn-triangle').addEventListener('click',function(){
    
    // get input field data using id 
    const triangle = document.getElementById('triangle').innerText;
    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;
    
    const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
displayData(triangle,triangleArea)
    
})

document.getElementById('btn-rectangle').addEventListener('click',function(){
   const rectangle = document.getElementById('rectangle').innerText;
   const width = document.getElementById('rectangle-width').value;
   const length = document.getElementById('rectangle-length').value;
   const rectangleArea = parseFloat(width) * parseFloat(length);

   displayData(rectangle,rectangleArea);
   
})

document.getElementById('btn-Parallelogram').addEventListener('click',function(){
    const parallelogram = document.getElementById('parallelogram').innerText;
    const base = document.getElementById('parallelogram-base').value;
    const height = document.getElementById('parallelogram-height').value;
    const parallelogramArea = parseFloat(base) * parseFloat(height);
 
    displayData(parallelogram,parallelogramArea);
    
 })
 


