function redirect_canarybot(redirected) {
    link = 'http://kensoi.github.io/canarybot/'

    switch(redirected) {
        case 2:
            link = link + 'install'; break;

        case 3:
            link = link + 'rules'; break;
            
    }
    location.href = link
}