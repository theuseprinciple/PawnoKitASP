Page = {
    Install: function () {

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

