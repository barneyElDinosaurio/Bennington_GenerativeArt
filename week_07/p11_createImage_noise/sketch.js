var img;

function setup() {
  createCanvas(800, 800);
  img = createImage(800, 800);
  
  img.loadPixels();
  for (var x=0; x<img.width; x++) {
    for (var y=0; y<img.height; y++) {
      var idx = 4 * (x + y * img.width);
      
      // you can make pixels from scratch as a function of x and y
      
      img.pixels[idx] =   map(noise(x*0.0055 + y*0.011 + 10), 0, 1, 0, 255);
      img.pixels[idx+1] = map(noise(x*0.015 + y*0.0099 + 20), 0, 1, 0, 255);
      img.pixels[idx+2] = map(noise(x*0.0095 + y*0.0067 + 30), 0, 1, 0, 255);
      img.pixels[idx+3] = 255; 
    }
  }
  img.updatePixels();
  
}

function draw() {
  
  background(0);
  image(img, 5, 5);
}