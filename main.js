nosex=0;
nosey=0;
function preload() {
  lips=loadImage("lip.png")

  

}
function setup() {
  canvas = createCanvas(500, 500)
  canvas.center();
  vid = createCapture(VIDEO);
  vid.hide();
  posenet = ml5.poseNet(vid, modelLoaded);
  posenet.on("pose", gotResults);
}
function draw() {
  image(vid, 0, 0, 500, 500)
  // stroke("red");
  // fill("red")
  // circle(nosex-70, nosey, 65)
  image(lips,nosex-125,nosey+50,100,100 )


}

function take_snapshot() {
  save("my pic.png")
}
function modelLoaded() {
  console.log("modelloaded succecsfuly")
}
function gotResults(results) {
  if (results.length > 0) {

    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y;
    console.log("nose x value is " + nosex + "nose y value is " + nosey)

  }


}