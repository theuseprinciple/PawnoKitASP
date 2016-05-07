Page = {
    Install: function () {
        jQuery('#hrefRemoval a').removeAttr('href');
    },
    Uninstall: function () {

    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});

