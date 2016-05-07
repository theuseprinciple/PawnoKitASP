function ConvertTextToPawn(oldtext) 
{ 
    var text = []; 
    for (var i = 0; i <= oldtext.length; ++i ) // source pawn by Tracker1
    { 
        switch ( oldtext[i] ) 
        { 
            case 'а': text[i] = 'a';
                continue; 
            case 'А': text[i] = 'A'; 
                continue; 
            case 'б': text[i] = '—'; 
                continue; 
            case 'Б': text[i] = 'Ђ'; 
                continue; 
            case 'в': text[i] = 'ў'; 
                continue; 
            case 'В': text[i] = '‹'; 
                continue; 
            case 'г': text[i] = '™'; 
                continue; 
            case 'Г': text[i] = '‚'; 
                continue; 
            case 'д': text[i] = 'љ'; 
                continue; 
            case 'Д': text[i] = 'ѓ'; 
                continue; 
            case 'е': text[i] = 'e'; 
                continue; 
            case 'Е': text[i] = 'E'; 
                continue; 
            case 'ё': text[i] = 'e'; 
                continue; 
            case 'Ё': text[i] = 'E'; 
                continue; 
            case 'ж': text[i] = '›'; 
                continue; 
            case 'Ж': text[i] = '„'; 
                continue; 
            case 'з': text[i] = 'џ'; 
                continue; 
            case 'З': text[i] = '?'; 
                continue; 
            case 'и': text[i] = 'њ'; 
                continue; 
            case 'И': text[i] = '…'; 
                continue; 
            case 'й': text[i] = 'ќ'; 
                continue; 
            case 'Й': text[i] = '†'; 
                continue; 
            case 'к': text[i] = 'k'; 
                continue; 
            case 'К': text[i] = 'K'; 
                continue; 
            case 'л': text[i] = 'ћ'; 
                continue; 
            case 'Л': text[i] = '‡'; 
                continue; 
            case 'м': text[i] = 'Ї'; 
                continue; 
            case 'М': text[i] = 'M'; 
                continue; 
            case 'н': text[i] = '®'; 
                continue; 
            case 'Н': text[i] = 'H'; 
                continue; 
            case 'о': text[i] = 'o'; 
                continue; 
            case 'О': text[i] = 'O'; 
                continue; 
            case 'п': text[i] = 'Ј'; 
                continue; 
            case 'П': text[i] = 'Њ'; 
                continue; 
            case 'р': text[i] = 'p'; 
                continue; 
            case 'Р': text[i] = 'P'; 
                continue; 
            case 'с': text[i] = 'c'; 
                continue; 
            case 'С': text[i] = 'C'; 
                continue; 
            case 'т': text[i] = '¦'; 
                continue; 
            case 'Т': text[i] = 'Џ'; 
                continue; 
            case 'у': text[i] = 'y'; 
                continue; 
            case 'У': text[i] = 'Y'; 
                continue; 
            case 'ф': text[i] = 'Ѓ'; //
                continue; 
            case 'Ф': text[i] = 'Ѓ'; 
                continue; 
            case 'х': text[i] = 'x'; 
                continue; 
            case 'Х': text[i] = 'X'; 
                continue; 
            case 'ц': text[i] = '‰'; // 160 
                continue; 
            case 'Ц': text[i] = '‰'; 
                continue; 
            case 'ч': text[i] = '¤'; 
                continue; 
            case 'Ч': text[i] = 'Ќ'; 
                continue; 
            case 'ш': text[i] = 'Ґ'; 
                continue; 
            case 'Ш': text[i] = 'Ћ'; 
                continue; 
            case 'щ': text[i] = 'Ў'; 
                continue; 
            case 'Щ': text[i] = 'Љ'; 
                continue; 
            case 'ь': text[i] = '©'; 
                continue; 
            case 'Ь': text[i] = '’'; 
                continue; 
            case 'ъ': text[i] = '§'; 
                continue; 
            case 'Ъ': text[i] = 'ђ'; 
                continue; 
            case 'ы': text[i] = 'Ё'; 
                continue; 
            case 'Ы': text[i] = '‘'; 
                continue; 
            case 'э': text[i] = 'Є'; 
                continue; 
            case 'Э': text[i] = '“'; 
                continue; 
            case 'ю': text[i] = '«'; 
                continue; 
            case 'Ю': text[i] = '”'; 
                continue; 
            case 'я': text[i] = '¬'; 
                continue; 
            case 'Я': text[i] = '•'; 
                continue; 
            case '*': text[i] = ']'; 
                continue;
            default: text[i] = oldtext[i];
                continue; 
        } 
    }  
    return text.join('');
}  


function ToUTF(){
	    
	     
    var textOut = document.getElementById("gt_textarea_out");
    var textInput = document.getElementById("gt_textarea_in");
    //var newd = ConvertTextToPawn(textOut.value);
    textOut.innerHTML = ConvertTextToPawn(textInput.value);
        
}


function selectText2()
{
    var oTextBox = document.getElementById('tt2');
    oTextBox.focus();
    oTextBox.select()
}
function selectText3()
{
    var oTextBox = document.getElementById('tt3');
    oTextBox.focus();
    oTextBox.select()
}
function change(i)
{
    document.getElementById('tt2').value = i.replace(/\n/gi, '~n~').replace(/ /gi, '_').replace(/А/gi, 
    'A').replace(/Б/gi, '6').replace(/В/gi, 'B').replace(/Г/gi, 'F').replace(/Д/gi, 'D').replace(/Е/gi, 
    'E').replace(/Ё/gi, ' ').replace(/Ж/gi, 'G').replace(/З/gi, '3').replace(/И/gi, 'N').replace(/Й/gi, 
    'N').replace(/К/gi, 'K').replace(/Л/gi, 'L').replace(/М/gi, 'M').replace(/Н/gi, 'H').replace(/О/gi, 
    'O').replace(/П/gi, 'Z').replace(/Р/gi, 'P').replace(/С/gi, 'C').replace(/Т/gi, 'T').replace(/У/gi, 
    'Y').replace(/Ф/gi, 'V').replace(/Х/gi, 'X').replace(/Ц/gi, 'Q').replace(/Ч/gi, '4').replace(/Ш/gi, 
    'W').replace(/Щ/gi, 'W').replace(/Ъ/gi, 'J').replace(/Ы/gi, 'S').replace(/Ь/gi, 'J').replace(/Э/gi, 
    'E').replace(/Ю/gi, 'U').replace(/Я/gi, 'R');
    document.getElementById('tt3').value = i.replace(/\n/gi, '~n~').replace(/ /gi, '_').replace(/А/gi, 
    'A').replace(/Б/g, '—').replace(/б/g, 'Ђ').replace(/В/gi, '‹').replace(/Г/g, '™').replace(/г/g, '‚').replace(/Д/g, 
    'љ').replace(/д/g, 'ѓ').replace(/Е/gi, 'E').replace(/Ё/gi, 'E').replace(/Ж/g, '›').replace(/ж/g, '„').replace(/З/gi, 
    '€').replace(/И/gi, '…').replace(/Й/g, 'ќ').replace(/й/g, '†').replace(/К/gi, 'K').replace(/Л/g, 'ћ').replace(/л/g, 
    '‡').replace(/М/gi, '–').replace(/Н/gi, 'м').replace(/О/gi, 'O').replace(/П/g, 'Ј').replace(/п/g, 
    'Њ').replace(/Р/gi, 'P').replace(/С/gi, 'C').replace(/Т/gi, 'Џ').replace(/У/gi, 'Y').replace(/Ф/gi, 
    'Ѓ').replace(/Х/gi, 'X').replace(/Ц/gi, '‰').replace(/Ч/gi, 'Ќ').replace(/Ш/gi, 'Ћ').replace(/Щ/gi, 
    'Љ').replace(/Ъ/gi, 'ђ').replace(/Ы/gi, '‘').replace(/Ь/gi, '’').replace(/Э/gi, 'Є').replace(/Ю/gi, 
    '«').replace(/Я/g, '¬').replace(/я/g, '•')
}


function textarea_maxlength()
{
 var i, maxLength, textArea;
 textArea = document.getElementsByTagName('textarea');
 for (i = 0; i < textArea.length; i++)
{
 maxLength = parseInt(textArea[i].getAttribute('maxlength'));
 if (maxLength > 0)
{
 textArea[i].onchange =
 textArea[i].onkeyup =
 textArea[i].onkeydown =
 textArea[i].onkeypress = function(maxlength)
{
 return function()
{
 if (this.value.length > maxlength)
{
 this.value = this.value.substring(0, maxlength);
}
}
}(maxLength);
}
}
}

required = new Array("textp");
required_show = new Array("Поле сообщения не должно быть пустым");
function SendForm ()
{
 var i, j;
 for(j=0; j<required.length; j++)
{
 for(i=0; i<document.forms[0].length; i++)
{
 if(document.forms[0].elements[i].name == required[j] && document.forms[0].elements[i].value == "" )
{
 alert(required_show[j]);
 document.forms[0].elements[i].focus();
 return false;
}
}
}
 return false;
}



Page = {
    Install: function () {
        $('* textarea').on('keydown', function (a) { if (a.keyCode === 13) { a.preventDefault(); whenEnterPressed(); } });

        $('input[name="stringareabutton_from"]').on("click", function () { // Конвертировать в UTF
            ToUTF();
        });

    },
    Uninstall: function () {
        SendForm = null;
        textarea_maxlength = null;
        change = null;
        selectText2 = null;
        selectText3 = null;
        ToUTF = null;
        ConvertTextToPawn = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});

