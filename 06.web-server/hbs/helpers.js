const hbs = require('hbs');


// helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (text) => {

    let words = text.split(' ');
    words.forEach((word, idx) => {
        word[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');

});