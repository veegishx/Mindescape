/**
 * This function converts RGB to HEX values
 * @param {*} r red color space
 * @param {*} g green color space
 * @param {*} b blue color space
 */
const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')

/**
 * This function retrieves the dominant colors from images
 */
const initializeImageColors = () => {
    const colorThief = new ColorThief();
    const img = document.querySelectorAll('div.video-thumbnail img');
    let count = -1;
    let titles = document.querySelectorAll(".video-title");
    img.forEach(element => {
        count++;
        let colors = [];

        // Wait for DOM to render image
        if (element.complete) {
            colorThief.getColor(element).forEach(element => {
                colors.push(element);
            });
        } else {
            element.addEventListener('load', function() {
                colorThief.getColor(element).forEach(element => {
                    colors.push(element);
                });
            });
        }

        const [r, g, b] = colors;

        //console.log(count);
        // Set gradient on each video card
        titles[count].style.background = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;

    });
}

window.onload = initializeImageColors;