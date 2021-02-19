menu = false

function menuLoad() {
    var dynamicMenuButton = document.getElementById('dynamicMenuButton').style;
    dynamicMenuButton.background = `url('img/menu/plus.svg')`;
}

function menuTumbler() {
    var dynamicMenu = document.getElementById('dynamicMenu').style;
    var dynamicMenuButton = document.getElementById('dynamicMenuButton').style;
    
    if (menu === true) {
        menu = false
        dynamicMenu.marginLeft = 0; 
        dynamicMenu.overflowY = 'scroll';
        dynamicMenuButton.background = `url('img/menu/plus.svg')`;


    }
    else { 
        menu = true
        dynamicMenu.marginLeft = "384px";
        dynamicMenu.overflowY = 'hidden';
        dynamicMenuButton.background = `url('img/menu/minus.svg')`;

    }
}

function menuClick(num) {
    switch (num) {
        case 1: location.href = 'https://kensoi.github.io/'; break
        case 2: location.href = 'https://kensoi.github.io/design'; break
        case 3: location.href = 'https://kensoi.github.io/contacts'; break
    }
}