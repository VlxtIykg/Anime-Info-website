function switchIt(id) {
    switch(id) {
        case '1':
        document.getElementById(id).classList.toggle("mw-collapsible-content");
        break;
        case '2':
        document.getElementById(id).classList.toggle("mw-collapsible-content");
        break;
        case '3':
        document.getElementById(id).classList.toggle("mw-collapsible-content");
        break;
        case '4':
        document.getElementById(id).classList.toggle("mw-collapsible-content");
        break;
        case '5':
        document.getElementById(id).classList.toggle("mw-collapsible-content");
        break;
    }
}

var switchvalue0 = true;
var switchvalue1 = true;
var switchvalue2 = true;
var switchvalue3 = true;
var switchvalue4 = true;

function swap(id) {
    switch(id) {
        case 'switch1':
            console.log(switchvalue0)
            switch(switchvalue0) {
                case true:
                    document.getElementById('switch1').innerText = 'Hide';
                    switchvalue0 = false; 
                    break;
                case false: 
                    document.getElementById('switch1').innerText = 'Show';
                    switchvalue0 = true;
                    break;
                default:
                    console.log("None of the above works");
                    break;
                }
            break;
        case 'switch2':
            console.log(switchvalue1)
            switch(switchvalue1) {
                case true:
                    document.getElementById('switch2').innerText = 'Hide';
                    switchvalue1 = false; 
                    break;
                case false: 
                    document.getElementById('switch2').innerText = 'Show';
                    switchvalue1 = true;
                    break;
                default:
                    console.log("None of the above works");
                    break;    
                }
            break;
        case 'switch3':
            console.log(switchvalue2);
            switch(switchvalue2) {
                case true:
                    document.getElementById('switch3').innerText = 'Hide';
                    switchvalue2 = false; 
                    break;
                case false: 
                    document.getElementById('switch3').innerText = 'Show';
                    switchvalue2 = true;
                    break;
                default:
                    console.log("None of the above works");
                    break;
                }
            break;
        case 'switch4':
            console.log(switchvalue3);
            switch(switchvalue3) {
                case true:
                    document.getElementById('switch4').innerText = 'Hide';
                    switchvalue3 = false; 
                    break;
                case false: 
                    document.getElementById('switch4').innerText = 'Show';
                    switchvalue3 = true;
                    break;
                default:
                    console.log("None of the above works");
                    break;
                }
            break;
        case 'switch5':
            console.log(switchvalue4);
            switch(switchvalue4) {
                case true:
                    console.log("Hi");
                    console.log(switchvalue0);
                    switchvalue4 = false;
                    console.log(switchvalue0);
                    document.getElementById('switch5').innerText = 'Hide';
                    break;
                case false: 
                    document.getElementById('switch5').innerText = 'Show';
                    switchvalue4 = true;
                    break;
                default:
                    console.log("None of the above works");
                    break;
                }
                break;
    }
}