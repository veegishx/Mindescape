let videoSelector = document.getElementById('video-selector');
videoSelector.addEventListener("mouseenter", function (event) {
    event.target.style.opacity = "1";
});

videoSelector.addEventListener("mouseleave", function (event) {
    event.target.style.opacity = "0";
});