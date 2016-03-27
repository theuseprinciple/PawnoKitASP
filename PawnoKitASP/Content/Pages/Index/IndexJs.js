Page = {
    Install: function () {
        $("#pk-quote").css('color', "green");
        console.log("script iss loaded");
    },
    Uninstall: function () {
        console.log("Element was removed");
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});

