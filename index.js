var audio = document.getElementById('audio');
var toggle = document.getElementById('toggleaudio');
let isPlaying = false;

audio.onplaying = ()=> isPlaying = true;
audio.onpause = () => isPlaying = false;

document.getElementById('toggleaudio').addEventListener('click', function (e)
{
    e = e || window.event;
    // audio.muted = !audio.muted;
    // toggle.classList.toggle('unmute');
    
    if (isPlaying){
        audio.pause();
    } else {
        audio.play();
    }

    if (audio.paused) {
        toggle.innerHTML = "<img src=\"img/play.png\">";
    } else {
        toggle.innerHTML = "<img src=\"img/pause.png\">";
    }
    e.preventDefault();
}, true);