let videoSelector = document.getElementById('content');
let videos = document.querySelectorAll('.video-card');

videoSelector.addEventListener("mouseenter", function (event) {
    event.target.style.opacity = "1";
});

videoSelector.addEventListener("mouseleave", function (event) {
    event.target.style.opacity = "0";
});

videos.forEach(element => {
    element.addEventListener("click", function (event) {
        videos.forEach(element => {
            element.removeAttribute("class", "active");
            element.setAttribute("class","video-card");
        });
        element.setAttribute("class", 'video-card active');
        console.log(element);
    });
});