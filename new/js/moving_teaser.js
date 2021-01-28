var i = 0

function fly_arrow(i) {
    element = document.getElementById(1);
    element.style.bottom = `${Math.sin(i / 20) * 8 + 70}px`
}
function fly_headline(i) {
    element = document.getElementById("headline");
    element.style.letterSpacing = Math.sin(360 - i / 80) * 4 + 6 + 'px'
    element.style.paddingTop = `calc(15vw + ${Math.sin(i / 40) * 4}px + 8px)`
    element.style.paddingBottom = `calc(15vw + 12px - ${element.style.paddingTop})`
}
function start_move_teaser() {
    let timer = setInterval(function () {
        switch(i) {
            case 360*80: 
                i = 0; break;

            default:
                i ++}

                fly_arrow(i)
                fly_headline(i)
    }, 20
    )
}