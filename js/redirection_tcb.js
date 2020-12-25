function redirect_testcanarybot(redirected) {
    link = 'http://kensoi.github.io/testcanarybot/'

    switch(redirected) {
        case 2:
            link = link + 'firstbot.html'; break;

        case 3:
            link = link + 'createmodule.html'; break;

        case 4:
            link = link + 'events.html'; break;

        case 5:
            link = link + 'objects.html'; break;

        case 6:
            link = link + 'tools/handlers.html'; break;

        case 7:
            link = link + 'tools/assets.html'; break;

        case 8:
            link = link + 'tools/keyboard.html'; break;

        case 9:
            link = link + 'tools/upload.html'; break;

        case 10:
            link = 'https://github.com/kensoi/testcanarybot/tree/master/examples/bot'; break;

        case 11:
            link = 'https://github.com/kensoi/testcanarybot/tree/master/examples/modules'; break;
            
    }
    location.href = link
}