const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
]

function paintBack(){
    const backImage = images[Math.floor(Math.random() * images.length)];

    const backgroundImage = `url('src/${backImage}')`;
    document.body.style.backgroundImage = backgroundImage;
}

paintBack();
setInterval(paintBack, 5000);