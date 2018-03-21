const e = {};

e.txtHeader = '//*[@id="header"]';
e.txtNewHeader = '//*[@id="new-header"]';
e.divTimeout = '//*[@id="div_timeout"]';
e.div = '//div';
e.checkboxTest = '//*[@id="cbx-test"]';
e.checkboxTestUnchecked = '//*[@id="cbx-test" and not(@checked="checked")]';
e.checkboxTestChecked = '//*[@id="cbx-test" and @checked="checked"]';

module.exports = e;
