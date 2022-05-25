function preload() {

}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(360,240);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw() {
    image(video,160,120,320,240);
    fill
    circle(30,30,50);
    circle(610,30,50);
    circle(30,450,50);
    circle(610,450,50);
    fill(lavender);
    rect(55,30,530,10);
    rect(55,450,530,10);
    rect(30,55,10,370);
    rect(610,55,10,370);
}

function take_snapshot() {
    save('student_name.png');
}
