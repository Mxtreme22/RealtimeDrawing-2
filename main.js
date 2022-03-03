function setup() {
    video = createCapture(VIDEO);
    video.size(450, 400);

    canvas = createCanvas(400, 400);
    canvas.position(550,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}


function draw() {
    background('#00ffff');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}