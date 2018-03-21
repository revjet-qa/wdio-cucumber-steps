const e = {};

e.txtHeader = '//*[@id="header"]';
e.txtNewHeader = '//*[@id="new-header"]';
e.divTimeout = '//*[@id="div_timeout"]';
e.div = '//div';
e.checkboxTestUnchecked = '//*[@id="cbx-test" and not(@checked="checked")]';
e.checkboxTestChecked = '//*[@id="cbx-test" and @checked="checked"]';
e.blockTextBefore = '//*[@id="block-text" and contains(text(), "Double-click before")]';
e.blockTextAfter = '//*[@id="block-text" and contains(text(), "after double-click")]';

module.exports = e;
