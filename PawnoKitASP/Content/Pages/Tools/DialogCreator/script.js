var RowsZonesCreated = 1; // сколько создано строк для диалога-листа
var LastRowId = 0; // ид последнего ряда
var OldDP = 'DIALOG_STYLE_INPUT'; // тип предыдущего диалога
var IsDialogOutPutZoneCreated = false;
var DialogsCreated = 0;

var LastTablistRowId = -1;
var TablistColsSelected = 3;
var MaxColsAllowed = 4;

function Init() {
    var Button = document.getElementById("PressButtonOnDialogCreate");
    Button.onclick = CreateDialog;
    DialogTablistAddRow();
    TablistUpdateColsVisibility(TablistColsSelected);
    //$("#colsnumber").css("display", "none");
}



function DialogListAddRow() {
    //ElemsZone
    var m_lineName = $("#m_lineNumber").data("pkmessage");

    var PrevLine = '#list-line-' + LastRowId;
    var NextLine = '<input id="list-line-' + (LastRowId + 1) + '" class = "l-l-s" type="text"  size = "40" placeholder = "'+m_lineName+' №' + (LastRowId + 1) + '">';
    $(PrevLine).after(NextLine);

    RowsZonesCreated++;
    LastRowId++;
}

function DialogListRemoveRow() {
    if (LastRowId == 0) return 1;
    var NeedLine = '#list-line-' + LastRowId;
    $(NeedLine).remove();
    RowsZonesCreated--;
    LastRowId--;
    //$("div").last()
}

function RemovAllListRows() {
    while (RowsZonesCreated > 1) {
        DialogListRemoveRow();
    }
}

function ShowError() {
    $("#ErrorZone").css("display", "block");
    setTimeout(HideError, 1500);
}

function HideError() {
    $("#ErrorZone").css("display", "none");
}


function TablistUpdateColsVisibility(colsselected) {
    for (var izz = 0; izz < MaxColsAllowed; izz++) {
        if (izz < colsselected) {
            $(".tablist-col-" + izz).css("display", "inline-block");
        }
        else {
            $(".tablist-col-" + izz).css("display", "none");
        }
    }

    TablistColsSelected = colsselected;
}

function DialogTablistAddRow() {

    var prevRowGroup = document.getElementById('tablist-row-' + (LastTablistRowId) + '');

    var newRowGrop = document.createElement('div');
    newRowGrop.id = 'tablist-row-' + (LastTablistRowId + 1) + '';
    newRowGrop.className = 'tablist-row';
    $(prevRowGroup).after(newRowGrop);


    var title = document.createElement('span');
    title.className = 'tablist-row-number-' + (LastTablistRowId + 1) + '';
    //newRowGrop.innerHTML = title;
    $(title).appendTo(newRowGrop); // добавить №x в новый див
    var numbertext = "№" + "" + (LastTablistRowId + 1);
    title.innerHTML = numbertext;

    var m_columnName = $("#m_columnNumber").data("pkmessage");

    for (var izz = 0; izz < MaxColsAllowed; izz++) // anuuu 
    {
        var newinput = document.createElement('input'); // cheeki breeki
        newinput.type = "text"; // cheeki breeki
        newinput.classList.add("tablist-row-" + (LastTablistRowId + 1)); // cheeki breeki
        newinput.classList.add("tablist-col-" + (izz)); // cheeki breeki
        newinput.size = 9; // cheeki breeki

        newinput.placeholder = m_columnName+" №" + (izz); // cheeki breeki
        $(newinput).appendTo(newRowGrop); // i v damke!
    }

    LastTablistRowId++;
    TablistUpdateColsVisibility(TablistColsSelected);
}

function DialogTablistRemoveRow() {
    if (LastTablistRowId == 0) return 1;
    var NeedLine = '#tablist-row-' + LastTablistRowId;
    $(NeedLine).remove();
    LastTablistRowId--;
}


function CreateDialog() {
    var Did = '';
    var CurDP = '';
    var Dtitle = '';
    var Dinfo = '';
    var Dbut1 = '';
    var Dbut2 = '';

    var Did1 = document.getElementById("GetDialogID");
    Did = Did1.value;

    if (parseInt(Did) != Did) { // не челое число!
        // ошибка
        ShowError();
        return 1;
    }


    var CurDP1 = document.getElementById("GetDialogType");
    CurDP = CurDP1.value;

    if (CurDP == 'DIALOG_STYLE_LIST') {
        for (var i = 0; i <= LastRowId; i++) {
            Dinfo += $("#list-line-" + i).val();
            if (i != LastRowId) { Dinfo += '\\n'; }
        }

    }

    else if (CurDP == 'DIALOG_STYLE_TABLIST') {

        for (var i = 0; i <= LastTablistRowId; i++) // бежим по строчкам
        {
            for (var b = 0; b < TablistColsSelected; b++) // бежим по столбцам
            {
                Dinfo += $(".tablist-row-" + i).filter(".tablist-col-" + b).val();
                //alert("Строка "+i+"Столб "+b);
                if (b != TablistColsSelected - 1) { Dinfo += '\\t'; }
                else if (i == LastTablistRowId) {/*делать ничего*/ }
                else { Dinfo += "\\n" + "\\" + "<br/>"; }
            }
        }
    }
    else if (CurDP == 'DIALOG_STYLE_TABLIST_HEADERS') // как таблист только с заголовками
    {
        for (var i = 0; i < TablistColsSelected; i++) // бежим по заголовкам. Ок
        {
            //alert('заголовок');
            Dinfo += $(".tablist-col-header-" + i).val();
            if (i != TablistColsSelected - 1) { Dinfo += '\\t'; }
            else { Dinfo += "\\n" + "\\" + "<br/>"; }
        }

        for (var i = 0; i <= LastTablistRowId; i++) // бежим по строчкам
        {
            for (var b = 0; b < TablistColsSelected; b++) // бежим по столбцам
            {
                Dinfo += $(".tablist-row-" + i).filter(".tablist-col-" + b).val();
                //alert("Строка "+i+"Столб "+b);
                if (b != TablistColsSelected - 1) { Dinfo += '\\t'; }
                else if (i == LastTablistRowId) {/*делать ничего*/ }
                else { Dinfo += "\\n" + "\\" + "<br/>"; }
            }
        }
    }
    else {
        var Dinfo1 = document.getElementById("GetGT");
        Dinfo = Dinfo1.value;
    }

    var Dtitle1 = document.getElementById("GetTitle");
    Dtitle = Dtitle1.value;

    var Dbut11 = document.getElementById("GetButton1");
    Dbut1 = Dbut11.value;
    var Dbut21 = document.getElementById("GetButton2");
    Dbut2 = Dbut21.value;

    var m_clearName = $("#m_clearName").data("pkmessage");

    if (IsDialogOutPutZoneCreated != true) {
        $('#OutZone').append('<div class = "code"></div><input type="button" id = "ButtonForClean" onclick = "ClearCode()" value="'+m_clearName+'">');
    }
    //if( DialogsCreated == 0) {$('.code').empty();} // если диалогов не создано, то создана надпись "готов к созданию...", её удалить
    if (DialogsCreated != 0) {
        $('.code').append('<br />');
    }
    $('.code').append('ShowPlayerDialog(playerid, ' + Did + ', ' + CurDP + ', \"' + Dtitle + '\", \"' + Dinfo + '\", \"' + Dbut1 + '\", \"' + Dbut2 + '\");');
    DialogsCreated++;

    IsDialogOutPutZoneCreated = true;
}

function ClearCode() {
    $(".code").remove();
    $("#ButtonForClean").remove();
    //$('.code').append('К созданию диалога готов!');
    IsDialogOutPutZoneCreated = false;
    DialogsCreated = 0;
}


function UpdateDialogType(value) {
    var img = document.getElementById("DatIMG"); // добываем ссылку на элемент (например, по id)
    img.src = '/Content/Pages/Tools/DialogCreator/images/' + value + '.png'; // а вот собственно замена
    img.alt = value;

    if (value == 'DIALOG_STYLE_LIST') {
        //$('.StandartMainTextZone').empty();
        //$('.StandartMainTextZone').append('<input type="text" id="list-line-0" class = "l-l-s" size = "40" placeholder = "Строка №0"><input type="button" id = "AddLineButton" value="Добавить" onclick="DialogListAddRow()"><input type="button" id = "RemoveLineButton" value="Удалить" onclick = "DialogListRemoveRow()">');
        // добавить возможность выбора элементов
        $(".StandartMainTextZone").css("display", "none");
        $(".StandartDialogListZone").css("display", "block");
        $("#colsnumber").css("display", "none");
        $(".DialogTablistZone").css("display", "none");
        RemovAllListRows(); // пересоздать строки заного
    }
    else if (value == 'DIALOG_STYLE_TABLIST') {
        //CleaningAfterListDialog();
        //$('.StandartMainTextZone').empty();
        $(".StandartDialogListZone").css("display", "none");
        $(".StandartMainTextZone").css("display", "none");
        $("#colsnumber").css("display", "table-row");
        $(".tablist-headers").css("display", "none");
        $(".DialogTablistZone").css("display", "block");
    }
    else if (value == 'DIALOG_STYLE_TABLIST_HEADERS') {
        //CleaningAfterListDialog();
        // $('.StandartMainTextZone').empty();
        $(".StandartDialogListZone").css("display", "none");
        $(".StandartMainTextZone").css("display", "none");
        $("#colsnumber").css("display", "table-row");
        $(".tablist-headers").css("display", "block");
        $(".DialogTablistZone").css("display", "block");
    }
    else {
        if (OldDP == 'DIALOG_STYLE_LIST' || OldDP == 'DIALOG_STYLE_TABLIST' || OldDP == 'DIALOG_STYLE_TABLIST_HEADERS') {

            $(".StandartDialogListZone").css("display", "none");
            $(".StandartMainTextZone").css("display", "block");
            $("#colsnumber").css("display", "none");
            $(".DialogTablistZone").css("display", "none");

            //alert('Норм диалог вызван');
        }
    }
    OldDP = value;
}



Page = {
    Install: function () {
        Init();
    },
    Uninstall: function () {
        UpdateDialogType = null;
        ClearCode = null;
        CreateDialog = null;
        DialogTablistRemoveRow = null;
        DialogTablistAddRow = null;
        TablistUpdateColsVisibility = null;
        HideError = null;
        ShowError = null;
        RemovAllListRows = null;
        DialogListRemoveRow = null;
        DialogListAddRow = null;
        Init = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});


