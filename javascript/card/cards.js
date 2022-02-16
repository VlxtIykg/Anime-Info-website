var timer;
var currently = "fma";
var currentlyPlay = true;

function playingz() {
    if(currentlyPlay) {
        currentlyPlay = false; 
        clearInterval(timer);
    }
    else {
        timer = setInterval(setCard, 5000);
        currentlyPlay = true;
    }
}

function setCard(){
    switch(currently) {
            case 'fma': 
                fma();
            break;
            case 'tokyoghoul': 
                tokyoghoul();
                break;
            case 'meliodas': 
                meliodas();
                break;
            case 'opm': 
                opm();
                break;
            case 'jujutsu':
                jjk();
                break;
            case 'bleach':
                bleach();
                break;
            default: 
                dazai();
                break;
            }
}

function unoCard() {
    switch(currently) {
        case 'fma': 
            bleach();
            currently = "dazai";
            break;
        case 'tokyoghoul': 
            dazai();
            currently = "fma";
            break;
        case 'meliodas': 
            fma();
            currently = "tokyoghoul";
            break;
        case 'opm': 
            tokyoghoul();
            currently = "meliodas";
            break;
        case 'jujutsu':
            meliodas();
            currently = "opm";
            break;
        case 'bleach':
            opm();
            currently = "jujutsu";
            break;
        default: 
            jjk();
            currently = "bleach";
            break;
        }
}