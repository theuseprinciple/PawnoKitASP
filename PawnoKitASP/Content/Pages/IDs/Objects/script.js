Page = {
    Install: function () {

    },
    Uninstall: function () {
        scrolltop = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});

function scrolltop() {
    $("#content").scrollTop(0);
    
}

