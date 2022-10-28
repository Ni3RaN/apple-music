let songInfo = null;
let playing = true;
const playControl = document.getElementsByClassName("play-control")[0];
let playClass = '<button><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z" style="fill-rule:nonzero"></path></svg></button>';
let pauseClass = '<button><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z" style="fill-rule:nonzero"></path></svg></button>';
changePlaySatatus = () => {
    playControl.innerHTML = playing ? pauseClass : playClass;
    playing = !playing;
}

playOrPause = () => {

}

playControl.addEventListener("click", changePlaySatatus);


const colorThief = new ColorThief();
const img = document.querySelector('img');

// Make sure image is finished loading
if (img.complete) {
    const div = document.getElementsByClassName("apple-music-player")[0];
    RGBaster.colors(img, {
        success: function(payload) {
            // You now have the payload.
            div.style.backgroundColor = payload.dominant;
        }
    });
    let color = colorThief.getColor(img);
    div.style.color = "rgb("+color[0]+","+color[1]+","+color[2]+")";
    const buttons = document.getElementsByClassName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].style.fill = "rgb("+color[0]+","+color[1]+","+color[2]+")";
    } 
    playClass = '<button><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z" style="fill-rule:nonzero;fill:'+'rgb('+color[0]+','+color[1]+','+color[2]+')"'+'></path></svg></button>';
    pauseClass = '<button><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z" style="fill-rule:nonzero;fill:'+'rgb('+color[0]+','+color[1]+','+color[2]+')"'+'></path></svg></button>';

} else {
    img.addEventListener('load', function () {
        const div = document.getElementsByClassName("apple-music-player")[0];
        RGBaster.colors(img, {
            success: function(payload) {
                // You now have the payload.
                div.style.backgroundColor = payload.dominant;
            }
        });
        let color = colorThief.getColor(img);
        div.style.color = "rgb("+color[0]+","+color[1]+","+color[2]+")";
        const buttons = document.getElementsByClassName("button");
        for(let i=0;i<buttons.length;i++){
            buttons[i].style.fill = "rgb("+color[0]+","+color[1]+","+color[2]+")";
        } 
        playClass = '<button><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z" style="fill-rule:nonzero;fill: '+ 'rgb('+color[0]+','+color[1]+','+color[2]+')'+'></path></svg></button>';
        pauseClass = '<button><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z" style="fill-rule:nonzero;fill:'+'rgb('+color[0]+','+color[1]+','+color[2]+')'+'></path></svg></button>';
    });
}