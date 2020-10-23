let corgiImg;

function preload(){
    url = 'https://dog.ceo/api/breed/corgi/images';
    data = loadJSON(url);
 //   print(data);
 //   display(data,10);
} 

function setup() {
  createCanvas(400, 400);
}
   // display(data,10);
function draw() {
  background(220);

  display(data,10);
  image(corgiImg, 200,200);
}

function display(data,i){
  if (data.status === 'success'){
    let corgi = data.message[i];
     // print(corgi);
    corgiImg = loadImage(corgi);
     // print(corgiImg);
    
  } else{
    print('failed');
  }
}