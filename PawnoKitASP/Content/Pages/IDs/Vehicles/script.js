Page = {
    Install: function () {
        var url = 'http://app.pawnokit.ru.swtest.ru/masters/vehicles.html';
        var param = 'vehiclechose';

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
        String.prototype.format = function () {
            var formatted = this;
            for (var i = 0; i < arguments.length; i++) {
                var regexp = new RegExp('\\{' + i + '\\}', 'gi');
                formatted = formatted.replace(regexp, arguments[i]);
            }
            return formatted;
        };


        function saveSelected(e_savebutton) {

            var el = e_savebutton.parentNode;

            var v_id = el.getElementsByClassName('id')[0].innerHTML;
            var v_name = el.getElementsByClassName('vname')[0].innerHTML;
            var v_cat = el.getElementsByClassName('category')[0].innerHTML;
            var v_mods = el.getElementsByClassName('mods')[0].innerHTML;

            var superiorEl = el.parentNode;
            var imgOut = superiorEl.getElementsByClassName('Image-Outputed')[0];
            var imgSrc = imgOut.getElementsByTagName('img')[0].src;
            //alert(imgSrc);

            var myMessage = "Vehicle Model ID: {0}\n\
            Vehicle Name: {1}\n\
            Category: {2}\n\
            Modifications: {3}".format(v_id, v_name, v_cat, v_mods);

            VK.api("wall.post", {
                attachments: imgSrc,
                message: myMessage
            }, function (data) { });

        }

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

