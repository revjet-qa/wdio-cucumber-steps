function visibleY (elmnt) {
    let rect = elmnt.getBoundingClientRect();
    const top = rect.top;
    const height = rect.height;
    let elmntParent = elmnt.parentNode;

    while (elmntParent !== document.body) {
        rect = elmnt.getBoundingClientRect();
        if (top <= rect.bottom === false) {
            return false;
        }
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) {
            return false;
        }
        elmntParent = elmntParent.parentNode;
    }
    // Check it's within the document viewport
    return top <= document.documentElement.clientHeight;
}

document.onscroll = function () {
    const blockScroll = document.getElementById('block-scroll');

    if (visibleY(blockScroll)) {
        blockScroll.innerHTML = 'Block was scrolled into view';
    }
};
