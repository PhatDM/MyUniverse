function showImage(){
    var options = document.getElementById('options');

    var images = document.getElementById('image-display');
    var images1 = document.getElementById('image-display1');
    var images2 = document.getElementById('image-display2');
    var images3 = document.getElementById('image-display3');
    var images4 = document.getElementById('image-display4');
    var images5 = document.getElementById('image-display5');
    var images6 = document.getElementById('image-display6');

    var note = document.getElementById('note');

    document.getElementById('audioplayer').muted = true;
    document.getElementById('audioplayer').muted = false;
    document.getElementById('audioplayer').play();

    images1.hidden = true;
    images2.hidden = true;
    images3.hidden = true;
    images4.hidden = true;
    images5.hidden = true;
    images6.hidden = true;
    note.hidden = true;

    switch(options.value){
        case '-':
            images.src = "../images/";
            break;
        case 'country':
            images.src = "../images/vietnam.jpg";
            break;
        case 'planet':
            images.src = "../images/earth.jpg";
            break;
        case 'moon':
            images.src = "../images/moon.jpg";
            break;
        case 'sun':
            images.src = "../images/sun.jpg";
            break;
        case 'milkyway':
            images.src = "../images/milkyway.jpg";
            break;
        case 'universe':
            images.src = "../images/universe1.jpg";
            images1.hidden = false;
            images2.hidden = false;
            images3.hidden = false;
            images4.hidden = false;
            images5.hidden = false;
            images6.hidden = false;
            note.hidden = false;
            break;
        default:
            break;
    }
}
