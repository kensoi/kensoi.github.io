function redirect(redirected) {
    link = 'http://kensoi.github.io/'

    switch(redirected) {
        case 1: 
            link = 'http://github.com/kensoi'; break;
        case 2: 
            link = 'http://t.me/kensoi_fuji'; break;
        case 3: 
            link = 'http://vk.com/kensoi'; break;
        case 4: 
            link += 'projects'; break;
        case 5: 
            link += 'projects/#sources'; break;
        case 6: 
            link += 'design'; break;
        case 7: 
            link = 'https://drive.google.com/drive/folders/1Lh5jXPR9IHGoBQgC9C0nRUTxvW5ubagt'; break;
        case 8: 
            link = 'http://github.com/kensoi/testcanarybot/'; break;
        case 9: 
            link = 'http://github.com/kensoi/apigram/'; break;
        case 10: 
            link = 'http://github.com/kensoi/complex_angle/'; break;
        case 11: 
            link += 'canarybot'; break;
        case 12: 
            link += 'testcanarybot'; break;
    };
    location.href = link
}