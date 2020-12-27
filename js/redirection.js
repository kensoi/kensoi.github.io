function redirect(redirected) {
    link = 'https://kensoi.github.io/'

    switch(redirected) {
        case 1: 
            link = 'https://github.com/kensoi'; break;
        case 2: 
            link = 'https://t.me/kensoi_fuji'; break;
        case 3: 
            link = 'https://vk.com/kensoi'; break;
        case 4: 
            link = 'https://drive.google.com/drive/folders/1Lh5jXPR9IHGoBQgC9C0nRUTxvW5ubagt'; break;
        case 5: 
            link += 'design.html'; break;
        case 6: 
            link += 'contacts.html'; break;
        case 7: 
            link += 'canarybot'; break;
        case 8: 
            link += 'testcanarybot'; break;
        case 9: 
            link += 'canarybot/install'; break;
        case 10: 
            link += 'canarybot/rules'; break;
    };
    location.href = link
}