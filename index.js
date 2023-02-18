document.getElementById('btn-triangle').addEventListener('click',function(){
    
    // get input field data using id 
    const triangle = document.getElementById('triangle').innerText;
    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;
    
    const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${1}</td>
    <td>${triangle}</td>
    <td>${triangleArea}</td>
        
    `
    container.appendChild(tr);
})