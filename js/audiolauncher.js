var audio;

window.addEventListener("load", () =>{
    audio = document.getElementById('intro');
    audio.play();
    setTimeout(function(){
        audio.pause();
    },
    10000);
});