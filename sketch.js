function setup() {
    createCanvas(400, 400);
    background(220);
    cor = color (random (0, 255), random(0, 255), random(0, 255));
    QuadradoX = [0, 0, 0, 0]
    QuadradoY = [random(height), random(height), random(height), random(height)]
  }
  
  function draw() {
    fill(cor)
    for(let contador in QuadradoX){
    square(QuadradoX[contador], QuadradoY[contador], 55, 20)
      QuadradoX[contador] +=  random(0,3)
      QuadradoY[contador] +=  random(-3, 3)
   
      if (QuadradoX[contador] >= width)
      {
          QuadradoX[contador] = 0
          QuadradoY[contador] = random(height)
          }
    }
  
    
      cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100) )
    }