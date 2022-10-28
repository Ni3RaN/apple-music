let songInfo = null;
let playing = true;
const playControl = document.getElementsByClassName("play-control")[0];
let playClass = '<button title="播放"><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z" style="fill-rule:nonzero"></path></svg></button>';
let pauseClass = '<button title="暂停"><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z" style="fill-rule:nonzero"></path></svg></button>';
changePlaySatatus = () => {
    playControl.innerHTML = playing ? pauseClass : playClass;
    playing = !playing;
}

playOrPause = () => {

}

playControl.addEventListener("click", changePlaySatatus);


const colorThief = new ColorThief();
const img = document.querySelector('img');

getColor = (list,backgroundColor) => {
    color0 = list[0];
    color1 = list[1];
    let r=0,g=0,b=0,cnt=0;
    for(let i=0;i<backgroundColor.length;i++) {
        if(backgroundColor[i] == ',') {
            cnt++;
        }
        if(backgroundColor[i] >= '0' && backgroundColor[i] <= '9') {
            if(cnt==0) {
                r=r*10+Number(backgroundColor[i]);
            }
            else if(cnt==1) {
                g=g*10+Number(backgroundColor[i]);
            }
            else if(cnt==2) {
                b=b*10+Number(backgroundColor[i]);
            }
        }
    }
    let dis0 = (color0[0]-r)*(color0[0]-r)+(color0[1]-g)*(color0[1]-g)+(color0[2]-b)*(color0[2]-b);
    let dis1 = (color1[0]-r)*(color1[0]-r)+(color1[1]-g)*(color1[1]-g)+(color1[2]-b)*(color1[2]-b);
    if(dis0>dis1) {
        return "rgb("+color0[0]+","+color0[1]+","+color0[2]+")";
    }
    else {
        return "rgb("+color1[0]+","+color1[1]+","+color1[2]+")";
    }
}

// Make sure image is finished loading
if (img.complete) {
    const div = document.getElementsByClassName("apple-music-player")[0];
    let backgroundColor = null;
    RGBaster.colors(img, {
        success: function(payload) {
            // You now have the payload.
            div.style.backgroundColor = payload.dominant;
            // let color = colorThief.getColor(img);
            let color = getColor(colorThief.getPalette(img),payload.dominant);
            div.style.color = color;
            const buttons = document.getElementsByClassName("button");
            for(let i=0;i<buttons.length;i++){
                buttons[i].style.fill = color;
            } 
            playClass = '<button title="播放"><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z" style="fill-rule:nonzero;fill: '+ color +'"></path></svg></button>';
            pauseClass = '<button title="暂停"><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z" style="fill-rule:nonzero;fill:'+ color +'"></path></svg></button>';
        }
    });
} else {
    img.addEventListener('load', function () {
        const div = document.getElementsByClassName("apple-music-player")[0];
        let backgroundColor = null;
        RGBaster.colors(img, {
            success: function(payload) {
                // You now have the payload.
                div.style.backgroundColor = payload.dominant;
                // let color = colorThief.getColor(img);
                let color = getColor(colorThief.getPalette(img),payload.dominant);
                div.style.color = color;
                const buttons = document.getElementsByClassName("button");
                for(let i=0;i<buttons.length;i++){
                    buttons[i].style.fill = color;
                } 
                playClass = '<button title="播放"><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M28.228,18.327l-16.023,8.983c-0.99,0.555 -2.205,-0.17 -2.205,-1.318l0,-17.984c0,-1.146 1.215,-1.873 2.205,-1.317l16.023,8.982c1.029,0.577 1.029,2.077 0,2.654Z" style="fill-rule:nonzero;fill: '+ color +'"></path></svg></button>';
                pauseClass = '<button title="暂停"><svg width="100%" height="100%" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421"><path d="M20.3,6l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Zm-9.5,0l2.9,0c0.994,0 1.8,0.806 1.8,1.8l0,18.4c0,0.994 -0.806,1.8 -1.8,1.8l-2.9,0c-0.994,0 -1.8,-0.806 -1.8,-1.8l0,-18.4c0,-0.994 0.806,-1.8 1.8,-1.8Z" style="fill-rule:nonzero;fill:'+ color +'"></path></svg></button>';
            }
        });
    });
}