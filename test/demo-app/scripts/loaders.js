function launchLoader (timeout, idValue) {

    const blockLoader = document.createElement('div');

    blockLoader.setAttribute('id', idValue);
    document.body.insertBefore(blockLoader, document.body.firstChild);

    setTimeout(function () {
        document.getElementById(idValue).remove();
    }, timeout);

}

document.addEventListener('DOMContentLoaded', () => {

    const timeout1 = 5000;
    const timeout2 = 8000;

    launchLoader(timeout1, 'loader1');
    launchLoader(timeout2, 'loader2');

});
