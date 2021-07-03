function preload(){

}

function setup(){
    canvas = createCanvas(600 , 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9ghNOnQw1/model.json" , modelLoaded);
}

function draw(){
image(video , 0 , 0 , 600 , 600);
classifier.classify(video , gotResults);
}

function modelLoaded(){
    console.log("model is loaded !!!");
}
function gotResults(error , result){
    if(error){
        console.error(error);
    }else{
        console.log(result);

        document.getElementById("object_name").innerHTML = result[0].label;
        document.getElementById("object_accuracy").innerHTML = result[0].confidence.toFixed(2);
    }
}