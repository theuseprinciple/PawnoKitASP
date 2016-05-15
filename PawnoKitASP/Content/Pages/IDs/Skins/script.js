function saveSelected(e_savebutton) {

    var el = e_savebutton.parentNode;

    var s_id = el.getElementsByClassName('id')[0].innerHTML;
    var s_model = el.getElementsByClassName('model')[0].innerHTML;
    var s_SNT = el.getElementsByClassName('SNT')[0].innerHTML;
    var s_SPL = el.getElementsByClassName('SPL')[0].innerHTML;
    var s_gender = el.getElementsByClassName('gender')[0].innerHTML;

    var superiorEl = el.parentNode;
    var imgOut = superiorEl.getElementsByClassName('Image-Outputed')[0];
    var imgSrc = imgOut.getElementsByTagName('img')[0].src;
    //alert(imgSrc);

    var myMessage = "Skin ID: {0}\n\
            Skin Model Name: {1}\n\
            Skin Name/Type: {2}\n\
            Singleplayer Location: {3}\n\
            Gender: {4}".format(s_id, s_model, s_SNT, s_SPL, s_gender);

    VK.api("wall.post", {
        attachments: imgSrc,
        message: myMessage
    }, function (data) { });

}

Page = {
    Install: function () {
        var url = '/master/skins';
        var param = 'skinchose';

        function getXmlHttp() {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                } catch (ee) {
                }
            }
            if (typeof XMLHttpRequest != 'undefined') {
                return new XMLHttpRequest();
            }
        }

        $(function () {
            $(".buttonS").click(function () {
                // validate and process form here
                var radio_button_value;
                var out = document.getElementById('OUT');



                if ($("input[name=" + param + "]:checked").length > 0) {
                    radio_button_value = $('input:radio[name=' + param + ']:checked').val();
                }
                else {
                    out.innerHTML = "Вы ничего не выбрали!";
                    return false;
                }
                out.innerHTML = "Загружаю...";
                var xmlhttp = getXmlHttp();
                xmlhttp.open("GET", url + '?' + param + '=' + radio_button_value + "&savebuttons=true");
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        out.innerHTML = xmlhttp.responseText;
                    }
                }
                xmlhttp.send(null);
                return false;
            });
        });

        
    },
    Uninstall: function () {
        saveSelected = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});

