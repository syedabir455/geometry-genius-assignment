let x = 0;
// Triangle part 
document.getElementById('btn-triangle').addEventListener('click',function(){
    x = x + 1;
  
    // get input field data using id 
    const triangle = getInnerText('triangle');
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    
   
    
    
    const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
    if(isNaN(triangleArea)){
        alert ('Please provide a valid number');
        return false;
    }
    else{
        triangleArea;
    }
displayData(triangle,triangleArea)


    
})
// rectangle part 

document.getElementById('btn-rectangle').addEventListener('click',function(){
    x = x + 1;
   const rectangle = getInnerText('rectangle');
   const width = getInputValue('rectangle-width');
   const length = getInputValue('rectangle-length');

   const rectangleArea = parseFloat(width) * parseFloat(length);
   if(isNaN(rectangleArea)){
    alert ('Please provide a valid number');
    return false;
}
else{
    rectangleArea;
}
   displayData(rectangle,rectangleArea);
   
})
// parallelogram part 

document.getElementById('btn-Parallelogram').addEventListener('click',function(){
    x = x + 1;
    const parallelogram = getInnerText('parallelogram')
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    const parallelogramArea = parseFloat(base) * parseFloat(height);
    if(isNaN(parallelogramArea)){
        alert ('Please provide a valid number');
        return false;
    }
    else{
        parallelogramArea;
    }
    displayData(parallelogram,parallelogramArea);
    
 })
//  rhombus part 

 document.getElementById('btn-rhombus').addEventListener('click',function(){
    x = x + 1;
    const rhombus = getInnerText('rhombus')
    const firstDiagonal = getInputValue('first-diagonal');
    const secondDiagonal = getInputValue('second-diagonal');

    const rhombusArea = 0.5 * parseFloat(firstDiagonal) * parseFloat(secondDiagonal);
    if(isNaN(rhombusArea)){
        alert ('Please provide a valid number');
        return false;
    }
    else{
        rhombusArea;
    }
    displayData(rhombus,rhombusArea);
       
 })
 //pentagon part 
 
 document.getElementById('btn-pentagon').addEventListener('click',function(){
    x = x + 1;
    const pentagon = getInnerText('pentagon')
    const pentagonSide = getInputValue('pentagon-side');
    const pentagonBase = getInputValue('pentagon-base');

    const pentagonArea = 0.5 * parseFloat(pentagonSide) * parseFloat(pentagonBase);
    if(isNaN(pentagonArea)){
        alert ('Please provide a valid number');
        return false;
    }
    else{
        pentagonArea;
    }
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
    if(isNaN(ellipseArea)){
        alert ('Please provide a valid number');
        return false;
    }
    else{
        ellipseArea;
    }
    displayData(ellipse,ellipseArea);
    
 })

 function displayData(triangle,triangleArea){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${x}</td>
    <td>${triangle}</td>
    <td>${triangleArea}cm<sup>2</sup></td>
    
        
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


//random background color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 

  document.getElementById('random-one').addEventListener("mouseenter", function(){
    document.getElementById('random-one').style.backgroundColor = randomColor();
  });

  document.getElementById('random-two').addEventListener("mouseenter", function(){
    document.getElementById('random-two').style.backgroundColor = randomColor();
  });
  document.getElementById('random-three').addEventListener("mouseenter", function(){
    document.getElementById('random-three').style.backgroundColor = randomColor();
  });
  document.getElementById('random-four').addEventListener("mouseenter", function(){
    document.getElementById('random-four').style.backgroundColor = randomColor();
  });
  document.getElementById('random-five').addEventListener("mouseenter", function(){
    document.getElementById('random-five').style.backgroundColor = randomColor();
  });
  document.getElementById('random-six').addEventListener("mouseenter", function(){
    document.getElementById('random-six').style.backgroundColor = randomColor();
  });
  