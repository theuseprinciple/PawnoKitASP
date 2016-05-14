var counter;
var counterNumber = 3;
var timeout;
function letItCount() {
    counter.innerHTML = counterNumber;
    timeout = setTimeout(CounterBell, 1000);
}
function CounterBell() {
    counterNumber--;
    if (counterNumber > -1) {
        letItCount();
    }
    else {
        run();
    }
}

function run() {
    document.getElementById('secondMain').style.display = "block";
    document.getElementById('preloaderMain').style.display = "none";
}

Page = {
    Install: function () {
        counter = document.getElementById("preloaderCounter");
        letItCount();
    },
    Uninstall: function () {
        clearTimeout(timeout);
        run = null;
        CounterBell = null;
        letItCount = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});