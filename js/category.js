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

function playvideo(name, type) {
    var videoName = name;
    var sourceName;
    //var source = this.document.getElementsByClassName('video')[0].src;
    var current = document.getElementById('bgVideo');
    if (type == 'ambient') {
        sourceName = "media/Ambient/";
    } else if (type == 'nature') {
        sourceName = "media/Nature/";
    } else if (type == 'relax') {
        sourceName = "media/Relax";
    }

    var fullSource = sourceName + videoName + ".mp4";
    current.setAttribute('src', fullSource);
}