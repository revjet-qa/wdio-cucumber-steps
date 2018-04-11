const e = {};

// index.html
e.txtHeader = '//*[@id="header"]';
e.divTimeout = '//*[@id="div_timeout"]';
e.div = '//div';

// new-page.html
e.txtNewHeader = '//*[@id="new-header"]';
e.checkboxTestUnchecked = '//*[@id="cbx-test" and not(@checked="checked")]';
e.checkboxTestChecked = '//*[@id="cbx-test" and @checked="checked"]';
e.blockTextBefore = '//*[@id="block-text" and contains(text(), "Double-click before")]';
e.blockTextAfter = '//*[@id="block-text" and contains(text(), "after double-click")]';
e.buttonLaunch = '//*[@id="button-launch"]';
e.buttonWasClicked = '//*[@id="button-launch" and contains(text(), "Button was clicked")]';
e.blockScroll = '//*[@id="block-scroll" and contains(text(), "Scroll to this block")]';
e.blockScrolledIntoView = '//*[@id="block-scroll" and contains(text(), "Block was scrolled into view")]';

module.exports = e;
