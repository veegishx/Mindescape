var figure = $(".video-card").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

document.getElementById('nature').style.visibility = 'hidden';
document.getElementById('nature').style.maxHeight = '0';
document.getElementById('relax').style.visibility = 'hidden';
document.getElementById('relax').style.maxHeight = '0';
document.getElementById('ambient').style.visibility = 'visible';
document.getElementById('nature').style.maxHeight = '100%';

function ambient() {
    document.getElementById('ambient').style.visibility = 'visible';
    document.getElementById('ambient').style.maxHeight = '100%';
    document.getElementById('nature').style.visibility = 'hidden';
    document.getElementById('nature').style.maxHeight = '0';
    document.getElementById('relax').style.visibility = 'hidden';
    document.getElementById('relax').style.maxHeight = '0';
}

function nature() {
    document.getElementById('ambient').style.visibility = 'hidden';
    document.getElementById('ambient').style.maxHeight = '0';
    document.getElementById('nature').style.visibility = 'visible';
    document.getElementById('nature').style.maxHeight = '100%';
    document.getElementById('relax').style.visibility = 'hidden';
    document.getElementById('relax').style.maxHeight = '0';
}

function relax() {
    document.getElementById('ambient').style.visibility = 'hidden';
    document.getElementById('ambient').style.maxHeight = '0';
    document.getElementById('nature').style.visibility = 'hidden';
    document.getElementById('nature').style.maxHeight = '0';
    document.getElementById('relax').style.visibility = 'visible';
    document.getElementById('relax').style.maxHeight = '100%';
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
        sourceName = "media/Relax/";
    }

    var fullSource = sourceName + videoName + ".mp4";
    current.setAttribute('src', fullSource);
}