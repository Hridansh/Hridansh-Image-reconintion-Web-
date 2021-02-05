Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

    camera = document.getElementById("camera");
    Webcam.attach('#camera');

    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
        })
    }

    console.log('ml5 version', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hyotTQa-b/model.json', modelLoded);

    function modelLoded(){
        console.log("Model has now loded!!!!");
    }

    function check(){
        image = document.getElementById('capture_image');
        classifier.classify(image, gotResult);
    }

    function gotResult(error, results){
        if (error) {
            console.error(error);
        }else {
            console.log(results);
            document.getElementById("identify_image_name").innerHTML = results[0].label;
            results_1 = results[0].confidence.toFixed(2);
            results_2 = results_1 * 100;
            document.getElementById("identify_image_accuracy").innerHTML = results_2 + "%"; 
        }
    }