
var CmdGen = {
    cmdtext: '',
    cmdtype: 'STD_CMD',
    //beregister = false;

    install: function () {
        //CmdGen.addEvent(window, 'load', CmdGen.init());
        CmdGen.init();
    },

    init: function () {
        $('#ButtonCreateCmd').bind('click', function () {
            CmdGen.create();
        });

        $('#ButtonResetCmd').bind('click', function () {
            CmdGen.clear();
        });
    },
    showError: function () {
        $("#ErrorHere").css("display", "block");
        setTimeout(CmdGen.hideError, 900);
    },
    hideError: function () {
        $("#ErrorHere").css("display", "none");
    },
    create: function () {

        CmdGen.cmdtype = $("select").val(); // получить тип
        CmdGen.cmdtext = $("input:text").val(); // получить команду
        if ($("input:text").val().length < 1) {
            //alert("Введите команду!");
            CmdGen.showError();
            return 0;
        }
        CmdGen.hideall();
        CmdGen.showone(CmdGen.cmdtype);
        $(".DatCmd").html(CmdGen.cmdtext);
        $(".LengthZone").html(CmdGen.cmdtext.length);
        $("#OutZone").css("visibility", "visible");

    },

    clear: function () {
        $("#OutZone").css("visibility", "hidden");
    },

    hideall: function () {

        $("#STD_CMD").css("display", "none");
        $("#DCMD_CMD").css("display", "none");
        $("#ZCMD_CMD").css("display", "none");
        $("#YCMD_CMD").css("display", "none");

    },

    showone: function (whatshow) {
        $("#" + whatshow).css("display", "block");
    },

    updatetype: function (newtype) {
        CmdGen.cmdtype = newtype;
        switch (newtype) {
            case 'STD_CMD': {
                $("#RegFlag").css("visibility", "visible");
                break;
            }
            default: {
                $("#RegFlag").css("visibility", "hidden");
            }
        }
    },
};



Page = {
    Install: function () {
        CmdGen.install();
    },
    Uninstall: function () {
        CmdGen = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});


