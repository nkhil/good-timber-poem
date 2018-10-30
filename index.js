var audio = document.getElementById('audio');
var toggle = document.getElementById('toggleaudio');

document.getElementById('toggleaudio').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    toggle.classList.toggle('unmute');
    e.preventDefault();
}, true);