String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};
(function () {
    $.event.special.destroyed = {
        remove: function (o) {
            if (o.handler) {
                o.handler()
            }
        }
    }
})();

var PawnoKitPagerEngine = {
    
    /*
        Loads page into parentDiv
    */
    currentParentalDiv: null,
    currentContentUrl: null,

    loadedScriptsUrls: [],
    
    // ~~~~~~~~
    loadScript: function(url, async){
        async = (typeof async === 'undefined') ? false : async;

        $.ajax({
            async: false,
            url: url,
            dataType: "script",
            success: function () {
                PawnoKitPagerEngine.loadedScriptsUrls.push(url);
            },
        });

    },

    /* 
        STYLE
    */

    loadedStylesUrls: [],

    // load 1 style from url
    loadStyle: function(url){
        PawnoKitPagerEngine.loadedStylesUrls.push(url);

        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: url
        }).appendTo("head");
    },

    // remove 1 loaded style
    unloadStyle: function (loadedStyleUrl) {
        PawnoKitPagerEngine.forEach(function (item, index, object) {
            if (item === loadedStyleUrl) {
                $('link[href="' + loadedStyleUrl + '"]').remove();
                object.splice(index, 1);
                return null;
            }
        });
    },

    // remove all loaded styles
    unloadAllStyles: function(){
        PawnoKitPagerEngine.forEach(function (item, index, object) {
            $('link[href="' + item + '"]').remove();
            object.splice(index, 1);
        });
    },

    /* 
        CONTENT
    */
    loadContent: function (parentDiv, url) {
        PawnoKitPagerEngine.currentContentUrl = url;
        PawnoKitPagerEngine.currentParentalDiv = parentDiv;
    },
    // ~~~~~~~~
    
    // ~~~~~~~~
    emptyCurrentParentalDiv: function(){
        $(currentParentalDiv).empty();
    },
    // ~~~~~~~~
    loadPage: function (parentDiv, contentUrl, cssUrl, scriptUrl) {

        PawnoKitPagerEngine.currentParentalDiv = parentDiv;
        PawnoKitPagerEngine.currentContentUrl = contentUrl;
        PawnoKitPagerEngine.currentScriptUrl = scriptUrl;
        PawnoKitPagerEngine.currentCssUrl = cssUrl;

        if (typeof cssUrl === 'undefined') {
            // load with no css
        } else {
            $("<link/>", {
                rel: "stylesheet",
                type: "text/css",
                href: cssUrl
            }).appendTo("head");
        }

        if (typeof scriptUrl === 'undefined') {
            // load with no script
        }

        

    },
    // ~~~~~~~~
    unloadCurrentPage: function(){
        //$("link[href="@Url.Content("~/Content/IndexCss.css")']").remove();
        $(currentParentalDiv).empty();
        $('link[href="'+currentCssUrl+'"]').remove();
    },
    // ~~~~~~~~
    install: function (parentDiv) {
        
    },
};

(function () {
    PawnoKitPagerEngine.install($("#content").get());
})();



