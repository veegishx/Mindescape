var figure = $(".video-card").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

document.getElementById('ambient').style.display = 'block';
document.getElementById('nature').style.display = 'none';
document.getElementById('relax').style.display = 'none';

function ambient() {
    document.getElementById('ambient').style.display = 'block';
    document.getElementById('nature').style.display = 'none';
    document.getElementById('relax').style.display = 'none';
}

function nature() {
    document.getElementById('ambient').style.display = 'none';
    document.getElementById('nature').style.display = 'block';
    document.getElementById('relax').style.display = 'none';
}

function relax() {
    document.getElementById('ambient').style.display = 'none';
    document.getElementById('nature').style.display = 'none';
    document.getElementById('relax').style.display = 'block';
}