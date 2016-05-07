var keycodes = {
    9: "tab",
    20: "caps",
    16: "shift",
    17: "ctrl",
    32: "space",
    18: "alt",
    70: "f",
    13: "enter",
    89: "y",
    78: "n",
    67: "c",
    72: "h",
    97: "num1",
    100: "num4",
    102: "num6",
    87: "w",
    83: "s",
    104: "num8",
    98: "num2",
    81: "q",
    69: "e",
    107: "numplus",
    96: "num0",
    82: "r"
};


var keys = {
    "OnFoot":
    {
        "tab": 1,
        "caps": 128,
        "shift": 32,
        "ctrl": 4,
        "space": 8,
        "alt": 1024,
        "f": 16,
        "enter": 16,
        "y": 65536,
        "n": 131072,
        "c": 2,
        "h": 262144,
        "num1": 512,
        "num4": 8192,
        "num6": 16384
    },

    "InVehicle":
    {
        "y": 65536,
        "n": 131072,
        "numplus": 512,
        "num0": 1,
        "num2": 4096,
        "num8": 2048,
        "num4": 8192,
        "num6": 16384,
        "w": 8,
        "s": 32,
        "q": 256,
        "e": 64,
        "ctrl": 1,
        "alt": 4,
        "h": 2,
        "caps": 2,
        "r": 262144,
        "space": 128
    }
};

var IsChecked = false;
var input;
var output;
var clearButton;
//var stateButton = document.getElementsByName('state');
var oldkeyid;
var state = 'OnFoot';



function OnKeyModeChange() {
    var newmode;
    fm = document.forms['keymodeform'];
    for (i = 0; i < fm['keymode'].length; i++) {
        if (fm['keymode'][i].checked) {
            //alert(fm['keymode'][i].value)
            newmode = fm['keymode'][i].value
            break
        }
    }
    switch (newmode) {
        case 'keyme': {
            keys["OnFoot"]["shift"] = 8;
            keys["OnFoot"]["space"] = 32;
            break;
        }
        case 'keystd': {
            keys["OnFoot"]["shift"] = 32;
            keys["OnFoot"]["space"] = 8;
            break;
        }
    }
}

function OnKeyDown(keyid) {

    //state = stateButton.value;
    state = $('input[name="state"]:checked').val();

    var what = '';
    what = keycodes[keyid];

    input.value = null;
    input.focus();
    var endkey = keys[state][what];
    if (endkey != null) {
        if (oldkeyid != keyid) {
            output.value += '~~~~~~~~~~~~~~~~~~~~~~~~~\n';
        }

        output.value += "newkeys = " + endkey;
        output.value += " (" + what + ")";
        output.value += " (" + state + ")";
        output.value += '\n';
        output.scrollTop = output.scrollHeight;

        oldkeyid = keyid;
    }
}


Page = {
    Install: function () {
        input = document.getElementById("kf_input");
        output = document.getElementById("kf_output");
        clearButton = document.getElementById('ButtonResetCmd');

        input.onfocus = function () {
            this.className = 'highlight';
            IsChecked = true;
        }

        input.onblur = function () {
            this.className = '';
            IsChecked = false;
        }

        clearButton.onclick = function () {
            output.value = null;
        }
    },
    Uninstall: function () {
        input = null;
        clearButton = null;
        OnKeyDown = null;
        OnKeyModeChange = null;
        keys = null;
        keycodes = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});

