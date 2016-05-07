
var MODE_FULL_SIZE = 0; // полноразмерный
var MODE_FILL_SIZE = 1; // заливка

var CurrentItemID = 0;
var ItemsLoaded = 2;
window.onload = Init;
//var childArray = child('txdlistzone', 'div');
//childArray.onclick = SelectItem(6);

function Init() {
    //$('.content').css('overflow', 'hidden');



    ItemsLoaded = 711;
    SelectItem(0);
    UpdateCounter(1);
}

function LeetSize(mode) {
    switch (mode) {
        case MODE_FULL_SIZE:
            {
                $("#txdinfoimg").css('min-height', '0px');
                $("#txdinfoimg").css('min-width', '0px');
                break;
            }
        case MODE_FILL_SIZE:
            {
                $("#txdinfoimg").css('min-height', '256px');
                $("#txdinfoimg").css('min-width', '256px');
                break;
            }
    }
}

function UpdateCounter(newval) {
    var counter = document.getElementById('counter');
    counter.innerHTML = newval + ' / ' + ItemsLoaded;
}

function GetPrevItem(itemid) {
    var ritem = itemid;
    var previtem = itemid - 1;
    if (previtem < 0) { // перед нами последний элемент
        ritem = ItemsLoaded - 1;
    }
    else {
        ritem = ritem - 1;
    }
    return ritem;
}

function GetNextItem(itemid) {
    var ritem = itemid;
    var nextitem = itemid + 1;
    if (nextitem >= ItemsLoaded) { // перед нами последний элемент
        ritem = 0;
    }
    else {
        ritem = ritem + 1;
    }
    return ritem;
}

function SelectItem(itemid) {
    //alert(itemid);
    SetItemImage(itemid);
    SetItemTxdName(itemid);
    Visual_RePaintIt(itemid);
    CurrentItemID = itemid;
    UpdateCounter(itemid + 1);
    var nextitem = GetNextItem(CurrentItemID);
    var previtem = GetPrevItem(CurrentItemID);

}

function NextItem() {
    var nextitem = GetNextItem(CurrentItemID);
    SelectItem(nextitem);


}

function PrevItem() {
    var previtem = GetPrevItem(CurrentItemID);
    SelectItem(previtem);
}

function Visual_RePaintIt(newitemid) {
    $(".current-txdlistelement").removeClass("current-txdlistelement"); // снимаем цвет с предыдущего
    var pathval = '#item-' + newitemid;
    $(pathval).addClass("current-txdlistelement"); // надеваем цвет на newitemid	
}

function SetItemTxdName(itemid) {
    var txtinline = '';
    txtinline = GetTxtInLine(itemid);

    var TxtName = '';
    TxtName = txtinline.toLowerCase();
    $("#CurrenttxdNameZone").attr("value", TxtName); // производим замену
}

function SetItemImage(itemid) {
    var rpath = '';
    rpath = GetItemImagePath(itemid);
    $("#txdinfoimg").attr("src", rpath); // производим замену
}

function GetTxtInLine(itemid) // возврат значения (value) itemid
{
    var txtinline = '';
    var pathval = '#item-' + itemid;
    txtinline = $(pathval).html();
    return txtinline;
}

function GetItemImagePath(itemid) // получение пути для изображения itemid
{
    var rpath = '';

    var txtinline = '';
    txtinline = GetTxtInLine(itemid);

    var cat2name = txtinline.split(':');

    rpath = "/Content/Pages/Tools/TextureManager/images/" + cat2name[0] + "/" + cat2name[1] + ".png";
    return rpath;
}Page = {
    Install: function () {
        Init();
    },
    Uninstall: function () {
        Init = null;
        LeetSize = null;
        UpdateCounter = null;
        GetPrevItem = null;
        GetNextItem = null;
        SelectItem = null;
        NextItem = null;
        PrevItem = null;
        Visual_RePaintIt = null;
        SetItemTxdName = null;
        SetItemImage = null;
        GetTxtInLine = null;
        GetItemImagePath = null;
    },
};

$(document).ready(function () {
    try {
        PawnoKitPager.installPageScript(Page);
    } catch (e) {
        Page.Install();
    }
});