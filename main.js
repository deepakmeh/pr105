function speak(){
    var synth = window.SpeechSynthesis;

    speak_data = "Taking your selfie in 45 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    
    synth.speak(utterThis);
    Webcam.attach(camera);
}

webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90,
});
camera = document.getElementById("camera");

