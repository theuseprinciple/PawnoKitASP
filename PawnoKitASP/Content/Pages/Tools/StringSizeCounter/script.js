var OnlineCheck = true;

function OnCheckBoxChanged() {
    if ($("#OnlineCheck").is(":checked")) {
        OnlineCheck = true;
    }
    else {
        OnlineCheck = false;
    }
}


function CountLength()// считать длину
{
    var textInput = document.getElementById("CounterLength");
    textInput.innerHTML = ReturnLength();
}

function ReturnLength() // вернуть длину
{
    var val = $("#stringarea").val();
    val = val.length;
    return val;
}

Page = {
    Install: function () {
        $('input[name="stringareabutton"]').on("click", function () { // нажатие на кнопку подсчета
            CountLength();
        });

        $(document).on('keyup', '#stringarea', function () {
            if (OnlineCheck) { CountLength(); }
        });
    },
    Uninstall: function () {
        ReturnLength = null;
        CountLength = null;
        OnCheckBoxChanged = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});