var CurrentModule = {
    Install: function () {
        $("#pk-quote").css('color', "green");
        alert("script iss loaded");
    },
    Remove: function () { 
        alert("Element was removed");
        $("#module").unbind("destroyed");
    },
};


(function () {

    CurrentModule.Install();

    $('#module').bind('destroyed', function () {
        CurrentModule.Remove();
        delete CurrentModule;
    });
})();


