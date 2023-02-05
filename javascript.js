let songkranBtn = document.querySelector('#songkran');
let pimaiBtn = document.querySelector('#pimai');

songkranBtn.addEventListener('click', function() {
    let save = confirm('Do you want to save this activity?');
    if (save) {
        console.log('OK')
    }else{
        console.log('No')
    }
});

pimaiBtn.addEventListener('click', function() {
    let save = confirm('Do you want to save this activity?');
    if (save) {
        console.log('OK')
    }else{
        console.log('No')
    }
});

      

    