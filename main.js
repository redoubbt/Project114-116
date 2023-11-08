noseX=0;
noseY=0;

function preload()
{

clown_nose = loadImage('https://i.postimg.cc/wxhkgLHK/moustache-removebg-preview.png');

}

function setup() 
{

canvas = createCanvas(300, 300);
canvas.center();

video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {

console.log('Posenet is initialised');



}

function gotPoses(results)
{

if(results.length > 0)
{

    console.log(results);
    noseX = results[0].pose.nose.x -30;
    noseY = results[0].pose.nose.y +7;
}

}

function draw()
{

image(video, 0, 0, 300, 300 );
image(clown_nose, noseX, noseY, 70, 40);
}

function takeSnapshot()
{

save('filtered_image.jpg');

}